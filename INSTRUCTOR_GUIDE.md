# 강사 가이드: React 19 마이그레이션 핸즈온 세션

## 📋 세션 개요

**시간:** 20분
**난이도:** 초-중급  
**대상:** 프론트엔드 개발자, AI 도구 활용에 관심있는 개발자  
**선수지식:** React 기본, 터미널 사용법

## 🎯 학습 목표

1. **기술적 목표**

   - React 18 → 19 주요 변경사항 이해
   - use Hook 실습
   - Suspense를 이용한 선언적 로딩 처리

2. **도구적 목표**
   - Gemini CLI + Context7 MCP 실전 활용
   - AI의 "지식의 격차" 문제 인식
   - 최신 기술 문서 기반 AI 어시스턴트의 가치 체감

## 📚 세션 구조

### I. 도입 (15분)

#### A. 오프닝: "AI는 알지만, 모든 것을 알지는 못합니다"

**강사 스크립트:**

```
"여러분, 우리는 매일 AI 코드 어시스턴트를 사용합니다.
하지만 만약 이 똑똑한 AI가 '구식 정보'를 준다면?
기술은 무자비할 정도로 빠르게 진화합니다.
오늘 우리는 '지식의 격차'를 뛰어넘는 방법을 배울 것입니다."
```

#### B. "문제 상황" 시연

**시연 순서:**

1. 기존 AI 어시스턴트 열기 (Copilot, Claude 등)
2. 프롬프트 입력:
   ```
   React 19.2에서 새로 나온 '<Activity />' 컴포넌트에 대해 알려줘
   ```
3. AI의 실패 응답 확인
   - "정보가 없습니다"
   - "존재하지 않는 컴포넌트입니다"
   - 혹은 완전히 잘못된 정보

**강사 멘트:**

```
"이것이 '지식의 격차'입니다.
이 AI의 학습 데이터는 특정 시점에 멈춰있습니다.
오늘 우리는 Context7로 이 문제를 해결할 것입니다."
```

#### C. 솔루션 제시: Gemini CLI + Context7

**핵심 메시지:**

- Context7은 '죽은' 학습 데이터 대신 '살아있는' 최신 문서 참조
- React 19.2 공식 문서에 실시간 접근
- 오늘의 목표: React 18 → 19 마이그레이션 완수

#### D. 환경 설정 확인

**체크리스트:**

```bash
# 1. Gemini CLI 설치 확인
gemini --version

# 2. Context7 연결 테스트
gemini -c context7 "Test"

# 3. 프로젝트 다운로드 확인
cd hands-on-react18
npm install
npm run dev
```

**문제 해결:**

- Gemini CLI 미설치 시 → 설치 가이드 제공
- Context7 연결 실패 시 → 설정 파일 확인
- 포트 충돌 시 → `vite.config.js`에서 포트 변경

---

### II. 시나리오 1: 폼(Form) 마이그레이션 (30분)

#### A. Part 1: "Before" 코드 분석 (10분)

**파일:** `src/before/ProfileForm.jsx`

**강사 설명 포인트:**

1. **3개의 useState 지적**

   ```javascript
   const [name, setName] = useState(""); // 필수
   const [isPending, setIsPending] = useState(false); // 보일러플레이트
   const [error, setError] = useState(null); // 보일러플레이트
   ```

2. **명령형 로직 강조**

   ```javascript
   setIsPending(true); // 수동 명령
   setError(null); // 수동 명령
   setIsPending(false); // 수동 명령
   ```

3. **문제점 요약**
   - 과도한 상태 관리
   - `event.preventDefault()` 잊어버리기 쉬움
   - 수동 UI 바인딩 (`disabled={isPending}`)

**인터랙티브 질문:**

```
"여러분, 이 코드의 어떤 부분이 '필수적'이고
어떤 부분이 '보일러플레이트'일까요?"
```

#### B. Part 2: Context7 마이그레이션 (10분)

**프롬프트 가이드:**

```bash
gemini -c context7 "이 React 18 폼 코드(파일:./src/before/ProfileForm.jsx)를 React 19의 'Actions' 기능을 사용하도록 마이그레이션해줘. 'useActionState'와 'useFormStatus' 훅을 활용해서 로딩, 에러 처리를 포함한 코드를 더 간결하게 만들고 싶어. 마이그레이션된 전체 코드를 제공해줘."
```

**강사 노트:**

- 참가자들이 프롬프트를 입력하는 동안 순회
- Context7 응답 시간: 약 15-30초
- 생성된 코드를 `src/after/ProfileForm.jsx`에 저장하도록 안내

#### C. Part 3: "After" 코드 분석 (10분)

**예상 결과 코드 키포인트:**

1. **Action 함수 분리**

   ```javascript
   async function updateProfile(previousState, formData) {
     // 비즈니스 로직만 집중
   }
   ```

2. **useActionState의 마법**

   ```javascript
   const [state, formAction] = useActionState(updateProfile, initialState);
   // 더 이상 try-catch-finally 불필요!
   ```

3. **SubmitButton 컴포넌트**
   ```javascript
   function SubmitButton() {
     const { pending } = useFormStatus();
     return <button disabled={pending}>...</button>;
   }
   ```

**강조할 개선사항:**

- useState 3개 → 1개
- 명령형 → 선언적
- 코드 라인 수 약 40% 감소

#### D. (Optional) 트러블슈팅: useFormStatus 함정 (10분)

**시연 순서:**

1. **잘못된 코드 보여주기**

   - `src/broken/ProfileForm_broken.jsx` 열기
   - 같은 컴포넌트에서 `useFormStatus` 호출

2. **문제 확인**

   ```javascript
   // 🚩 작동하지 않음
   export default function ProfileForm() {
     const { pending } = useFormStatus(); // 항상 false
     return <form>...</form>;
   }
   ```

3. **Context7 진단 요청**

   ```bash
   gemini -c context7 "React 19에서 useFormStatus를 사용했는데 'pending' 상태가 업데이트되지 않아. 내 코드를 확인하고 React 19 문서를 바탕으로 이유를 설명해줘."
   ```

4. **해결책 설명**
   - `useFormStatus`는 부모 `<form>` 추적
   - 자식 컴포넌트에서 호출해야 함

**강사 멘트:**

```
"이것이 Context7의 진정한 가치입니다.
단순 코드 생성을 넘어, 최신 문서 기반으로
'왜' 안되는지 정확히 진단합니다."
```

#### E. 비교 분석 (5분)

**표를 화면에 띄우고 설명:**

| 개념        | React 18                      | React 19             |
| ----------- | ----------------------------- | -------------------- |
| 제출 처리   | `onSubmit` + `preventDefault` | `<form action={fn}>` |
| 로딩 상태   | `useState(isPending)`         | `useFormStatus()`    |
| 에러 처리   | `useState(error)`             | `useActionState()`   |
| 관심사 분리 | 혼재됨                        | 명확히 분리          |

---

### III. 시나리오 2: 데이터 페칭 마이그레이션 (30분)

#### A. Part 1: "Before" 코드 분석 (10분)

**파일:** `src/before/UserProfile.jsx`

**강사 설명 포인트:**

1. **3개의 useState 재등장**

   ```javascript
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   ```

2. **useEffect의 복잡성**

   ```javascript
   useEffect(() => {
     let ignore = false; // 경쟁 상태 방지
     // ... 복잡한 로직
     return () => {
       ignore = true;
     }; // 클린업
   }, [userId]);
   ```

3. **문제점 강조**
   - useEffect는 side effect용, 데이터 페칭용 아님
   - 경쟁 상태 수동 방지 필요
   - 폭포수(waterfall) 문제

**데모:**

- userId prop을 빠르게 변경하여 경쟁 상태 문제 시연
- 콘솔 로그로 이전 요청이 나중에 도착하는 상황 보여주기

#### B. Part 2: Context7 마이그레이션 (10분)

**프롬프트:**

```bash
gemini -c context7 "이 React 18 데이터 페칭 코드(파일:./src/before/UserProfile.jsx)를 React 19의 'use' 훅과 '<Suspense>'를 사용하도록 마이그레이션해줘. 'useEffect'와 3개의 'useState'를 모두 제거하고 싶어. 부모 컴포넌트가 <Suspense>를 어떻게 사용해야 하는지도 함께 보여줘."
```

**강사 노트:**

- Context7이 두 개 파일을 제안할 것임
  1. `UserProfile.jsx` (use Hook)
  2. `App.jsx` (Suspense 추가)
- 두 파일 모두 업데이트하도록 안내

#### C. Part 3: "After" 코드 분석 (10분)

**UserProfile.jsx 키포인트:**

1. **use Hook의 간결함**

   ```javascript
   const data = use(bioPromise);
   // useEffect 사라짐!
   // 3개의 useState 사라짐!
   ```

2. **패러다임 전환**
   - Side Effect → Render-Phase Reading
   - 명령형 → 선언적

**App.jsx 키포인트:**

3. **Suspense의 역할**
   ```javascript
   <Suspense fallback={<p>로딩 중...</p>}>
     <UserProfile userId={1} />
   </Suspense>
   ```

**강조할 개선사항:**

- 코드 라인 수: ~45줄 → ~15줄 (약 70% 감소)
- 복잡도 대폭 감소
- 경쟁 상태 자동 처리

#### D. 비교 분석 (5분)

**표를 화면에 띄우고 설명:**

| 개념        | React 18                  | React 19       |
| ----------- | ------------------------- | -------------- |
| 페칭 방식   | `useEffect` (side effect) | `use(promise)` |
| 로딩 UI     | `useState` + if문         | `<Suspense>`   |
| 경쟁 상태   | 수동 `ignore` 변수        | 자동 처리      |
| 코드 복잡도 | 높음 (30+ 줄)             | 낮음 (~10줄)   |

---

### IV. 클라이맥스: React 19.2 최신 기능 (15분)

#### A. "불가능한 질문" 설정 (3분)

**강사 스크립트:**

```
"자, 이제 Context7이 정말로 '최신'인지 증명하는 테스트를 하겠습니다.
세션 처음에 기존 AI가 실패했던 그 질문을 기억하시나요?
지금부터 그 질문을 Context7에게 던져봅시다."
```

#### B. "마법"의 프롬프트 실행 (5분)

**프롬프트:**

```bash
gemini -c context7 "방금 릴리스된 React 19.2 (2025년 10월)의 새로운 기능인 '<Activity />' 컴포넌트에 대해 설명해줘. 어떤 문제를 해결하고, 'mode' prop은 어떻게 사용하는 거야?"
```

**강사 노트:**

- 참가자들과 함께 실시간으로 응답 확인
- Context7의 응답 시간: 약 20-40초
- 정확한 정보가 나오는 순간 강조

#### C. Context7의 "정답" 분석 (7분)

**예상 응답 핵심:**

1. **`<Activity />` 설명**

   - 컴포넌트 가시성과 우선순위 제어
   - 페이지 성능 최적화

2. **`mode` prop 사용법**

   ```javascript
   // Before
   {
     isVisible && <Page />;
   }

   // After
   <Activity mode={isVisible ? "visible" : "hidden"}>
     <Page />
   </Activity>;
   ```

3. **두 가지 모드**
   - `hidden`: 백그라운드 pre-rendering
   - `visible`: 정상 렌더링

**강조할 점:**

```
"이 정보는 며칠 전 릴리스되었습니다.
지구상의 어떤 AI 모델도 아직 학습하지 못했습니다.
하지만 Context7은 최신 문서를 실시간으로 참조하여 정확히 답변했습니다."
```

---

### V. 마무리 (10분)

#### A. 핵심 메시지 요약

**"지식의 격차" 해결**

```
기존 AI: 학습 데이터 시점에 멈춤
Context7: 최신 문서에 실시간 연결
```

**"선언적 vs 명령형"**

```
React 18: "어떻게(How)" - 모든 상태를 수동 관리
React 19: "무엇을(What)" - 원하는 결과만 선언
```

#### B. 실무 적용 가이드

**언제 사용할까?**

1. 최신 라이브러리 도입 시
2. 레거시 코드 마이그레이션
3. 최신 베스트 프랙티스 확인

**워크플로우 통합**

```bash
# 1. 현재 코드를 컨텍스트로 제공
gemini -c context7 "파일:./MyComponent.jsx를 분석해줘"

# 2. 최신 기술로 개선 요청
gemini -c context7 "React 19 패턴으로 리팩토링해줘"

# 3. 문제 진단
gemini -c context7 "왜 작동하지 않는지 최신 문서 기반으로 설명해줘"
```

#### C. Q&A

**예상 질문 & 답변:**

**Q: "Context7 없이도 최신 문서를 직접 읽으면 되지 않나요?"**
A: "물론입니다. 하지만 Context7은:

- 문서의 관련 부분만 자동으로 찾아줌
- 코드와 문서를 연결하여 실질적 솔루션 제공
- 시간 절약 (수십 페이지 문서를 몇 초만에)"

**Q: "React 18로 계속 사용하면 안되나요?"**
A: "React 18도 훌륭합니다. 하지만:

- React 19는 코드를 40-70% 줄여줌
- 버그 발생 가능성 감소
- 더 나은 사용자 경험 (성능 개선)"

**Q: "다른 프레임워크(Vue, Svelte)에도 적용 가능한가요?"**
A: "Context7의 접근 방식은 모든 기술에 적용 가능합니다.
최신 문서만 있다면, Context7이 연결해줍니다."

---

## 📊 세션 체크리스트

### 사전 준비

- [ ] Gemini CLI 설치 확인
- [ ] Context7 MCP 설정 확인
- [ ] 프로젝트 다운로드 및 의존성 설치
- [ ] 개발 서버 포트 확인 (3000)
- [ ] 기존 AI 어시스턴트 준비 (비교 시연용)

### 시연 자료

- [ ] React 19.2 릴리스 노트 링크 준비
- [ ] 코드 비교 표 화면 공유 준비
- [ ] 터미널 화면 크게 보이도록 설정

### 백업 플랜

- [ ] Context7 연결 실패 시 → 사전 캡쳐 스크린샷
- [ ] 시간 부족 시 → 시나리오 2 생략 가능
- [ ] 질문 많을 시 → 추가 시간 확보

---

## 🎯 성공 지표

**기술적 이해**

- 참가자가 Actions, use Hook 개념 이해
- Before/After 코드 차이 설명 가능

**도구 활용**

- 참가자가 스스로 Context7 프롬프트 작성
- 마이그레이션 코드를 프로젝트에 적용

**인식 변화**

- "지식의 격차" 문제 인식
- Context7의 가치 체감
- 실무에 적용 의지

---

## 📞 문제 해결 연락처

**기술 지원:**

- Gemini CLI 문제: [링크]
- Context7 설정: [링크]
- React 19 공식 문서: https://react.dev/

**세션 피드백:**

- 강사 이메일: [이메일]
- 설문 조사: [링크]
