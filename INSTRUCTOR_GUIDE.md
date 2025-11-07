# 강사 가이드: 코딩 에이전트를 똑똑하게 사용하기 with MCP 서버

## 📋 세션 개요

**시간:** 45분 (발표 10분 + 실습 35분)
**난이도:** 중급
**대상:** MCP와 AI 에이전트에 관심있는 개발자
**선수지식:** Git 기본, React 기본, VS Code 사용법

## 🎯 학습 목표

### 1. MCP 개념 이해

- MCP(Model Context Protocol)의 기본 개념과 필요성
- Context, Protocol의 의미
- MCP 통신 구조

### 2. 실전 워크플로 체험

- Context7로 최신 문서 학습
- GitHub MCP로 이슈/PR 자동화
- PlayWright MCP로 테스트 자동화
- 전체 개발 워크플로 통합 경험

---

## 📚 세션 구조

### Part I: MCP 핵심 개념 (10분)

#### 1. Agentic AI 시대와 MCP란?

**강사 스크립트:**

```
"기존 LLM은 단순히 텍스트를 생성했습니다.
하지만 Agentic AI는 '행동'을 취합니다.
파일을 읽고, 코드를 실행하고, API를 호출합니다.

MCP는 이런 AI 에이전트가 외부 도구와 소통하는 '표준 프로토콜'입니다.
USB가 모든 장치를 연결하듯, MCP는 모든 도구를 AI에 연결합니다."
```

**시연:**

- MCP 없이 AI 사용 → 제한된 정보
- MCP 연결 후 AI 사용 → 외부 도구 활용 가능

#### 2. MCP 사용 원리

**핵심 개념:**

1. **Context (맥락)**: AI에게 정확한 정보 주입
   - 예: Context7 = 최신 라이브러리 문서
2. **Protocol (규약)**: AI가 도구를 사용하는 표준 방법
   - 예: GitHub MCP = 이슈 생성, PR 생성 등 표준화된 액션

**강사 설명:**

```
"AI가 똑똑해도 '컨텍스트'가 없으면 헛소리를 합니다.
AI가 행동해도 '프로토콜'이 없으면 도구를 못 씁니다.
MCP는 이 두 가지를 해결합니다."
```

#### 3. MCP 통신 구조

**다이어그램 설명:**

```
[사용자] → [AI 에이전트] ←→ [MCP 서버] ←→ [외부 도구/API]
           (Gemini)          (Context7)      (GitHub API)
                             (GitHub)        (문서 DB)
                             (PlayWright)    (브라우저)
```

**주요 포인트:**

- JSON-RPC 기반 통신
- 양방향 스트리밍 지원
- 표준화된 도구 인터페이스

#### 4. MCP 연결 예시

**실제 설정 보여주기:**

```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"]
    },
    "playwright": {
      "command": "npx",
      "args": ["-y", "@executeautomation/playwright-mcp-server"]
    }
  }
}
```

**강사 멘트:**

```
"이렇게 간단히 설정하면,
Copilot이 이 3개의 도구를 자유자재로 사용할 수 있습니다."
```

---

### Part II: MCP 실습 워크플로 (35분)

#### ⚙️ 환경 준비 (5분)

**체크리스트:**

```bash
# 1. 프로젝트 클론 및 설치
cd mcp-test/client
npm install

# 2. 개발 서버 실행
npm run dev

# 3. VS Code에서 MCP 연결 확인
# Copilot 채팅에서 @context7, @github, @playwright 사용 가능한지 확인
```

**주의사항:**

- GitHub 로그인 필요
- Gemini 2.5 Flash 모델 사용 권장
- MCP 서버가 활성화되어 있는지 확인

---

#### 🍀 기초 실습: Context7 (5분)

**목표:** Context7이 최신 문서를 어떻게 학습하는지 체험

**실습 파일:** `src/before/ProfileForm.jsx`

**프롬프트:**

```
c7을 이용해서 google/genai 라이브러리를 학습하고
텍스트 생성을 생성형 AI를 사용하도록 변경해줘
```

**기대 결과:**

- Context7이 google/genai 문서 자동 검색
- 최신 API 문서 기반으로 코드 제안
- 기존 LLM 지식과의 차이 확인

**강사 설명 포인트:**

```
"Context7이 없었다면? AI는 오래된 API를 제안했을 겁니다.
Context7 덕분에 '지금' 사용 가능한 API를 배웠습니다."
```

---

#### 🧨 심화 실습: 통합 워크플로 (25분)

##### Phase 1: React 19 문서 학습 (3분)

**프롬프트:**

```
c7을 이용해서 React 19 문서를 학습하고
useActionState 전문가가 되어줘.
```

**강사 관찰 포인트:**

- Context7이 React 19 공식 문서 접근
- useActionState API 상세 정보 로드
- AI가 학습한 내용 요약 확인

---

##### Phase 2: 계획 수립 및 이슈 생성 (4분)

**프롬프트:**

```
현재 작업 중인 내용을 useActionState로 리팩터링할 계획을 세우고
GitHub MCP를 이용하여 새로운 이슈로 만들어 줘.
```

**강사 설명:**

```
"Copilot이 지금 3가지를 동시에 합니다:
1. 현재 파일 분석 (Context)
2. 리팩터링 계획 수립 (추론)
3. GitHub 이슈 생성 (Protocol/Action)"
```

**확인사항:**

- GitHub에 이슈가 생성되었는지 확인
- 이슈 번호 기억 (예: #1)

---

##### Phase 3: 테스트 작성 (5분)

**프롬프트:**

```
이 폼의 동작을 검증할 PlayWright 테스트 코드를 만들어서
'tests/MyForm.spec.js' 파일로 저장해 줘.
PlayWright MCP를 사용해서 어떻게 검증할 지 계획을 수립해
```

**강사 설명 포인트:**

```
"리팩터링하기 전에 '현재 상태'를 테스트로 고정합니다.
이게 바로 TDD의 핵심입니다.
PlayWright MCP가 브라우저 동작을 이해하고 테스트를 자동 생성합니다."
```

**확인사항:**

- tests/MyForm.spec.js 파일 생성 확인
- 테스트 코드 내용 검토

---

##### Phase 4: 코드 리팩터링 (4분)

**프롬프트:**

```
아까 만든 GitHub 이슈 계획대로,
현재 소스코드 파일을 리팩터링해줘.
```

**강사 관찰:**

```
"Copilot이 '세션 컨텍스트'를 유지합니다.
Phase 2에서 만든 이슈의 내용을 기억하고,
그 계획대로 정확히 리팩터링을 수행합니다."
```

---

##### Phase 5: 리팩터링 검증 (4분)

**프롬프트:**

```
PlayWright 테스트를 실행해서
리팩터링이 잘 됐는지 확인해 줘.
```

**강사 설명:**

```
"Phase 3에서 만든 테스트가 여전히 통과하면,
리팩터링이 기능을 망가뜨리지 않았다는 증명입니다."
```

**확인사항:**

- 테스트 실행 결과 확인
- 실패 시 Copilot에게 수정 요청

---

##### Phase 6: PR 생성 (5분)

**프롬프트:**

```
변경 사항을 커밋하고,
아까 만든 이슈와 연결해서 PR까지 올려 줘.
```

**강사 하이라이트:**

```
"마지막 단계입니다. GitHub MCP가:
1. 변경된 파일들을 커밋
2. 의미있는 커밋 메시지 자동 생성
3. PR 생성하며 이슈 자동 연결
4. PR 본문에 전체 과정 요약

이 모든 것이 단 한 번의 프롬프트로!"
```

**확인:**

- GitHub에서 PR 확인
- 이슈와 연결되었는지 확인
- 커밋 메시지와 PR 본문 품질 확인

---

## 🎓 마무리 및 Q&A (5분)

### 핵심 요약

**강사 스크립트:**

```
"오늘 우리가 한 일을 정리하면:

1. Context7 = AI에게 최신 지식 주입
2. GitHub MCP = 이슈/PR 워크플로 자동화
3. PlayWright MCP = 테스트 자동화

이 3개를 조합해서,
'문서 학습 → 계획 → 테스트 → 리팩터링 → 검증 → PR'
전체 워크플로를 자동화했습니다.

이게 바로 MCP의 힘입니다."
```

### 실무 활용 팁

1. **Context7 활용**
   - 신규 라이브러리 학습 시
   - 마이그레이션 가이드 필요 시
2. **GitHub MCP 활용**

   - 반복적인 이슈/PR 작업 자동화
   - 컨벤션 통일

3. **PlayWright MCP 활용**
   - 회귀 테스트 자동 생성
   - E2E 테스트 커버리지 확대

---

## 🔧 트러블슈팅

### 1. MCP 서버 연결 실패

**증상:** `@context7` 같은 명령어가 인식 안 됨

**해결:**

```bash
# VS Code 재시작
# 또는 MCP 서버 재연결
```

### 2. GitHub MCP 인증 실패

**해결:**

- GitHub 토큰 재발급
- VS Code에서 GitHub 재로그인

### 3. PlayWright 테스트 실패

**해결:**

```bash
# PlayWright 브라우저 설치
npx playwright install
```

---

## 📝 추가 자료

- MCP 공식 문서: https://modelcontextprotocol.io
- Context7 문서: https://github.com/upstash/context7-mcp
- GitHub MCP: https://github.com/modelcontextprotocol/servers

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
