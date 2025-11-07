# 코딩 에이전트를 똑똑하게 사용하기 with MCP 서버

## 🎯 세션 목표

MCP(Model Context Protocol)를 활용하여 **문서 학습 → 계획 수립 → 테스트 작성 → 코드 리팩터링 → 검증 → PR 생성**에 이르는 전체 워크플로를 자동화합니다.

## 📚 사용할 MCP 서버

1. **Context7**: 최신 라이브러리 문서를 실시간으로 학습
2. **GitHub**: 이슈/PR 생성 및 관리 자동화
3. **PlayWright**: E2E 테스트 자동 생성 및 실행

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

### 3. MCP 서버 연결 확인

VS Code에서 GitHub Copilot이 Context7, GitHub, PlayWright MCP 서버와 연결되었는지 확인하세요.

## 📁 프로젝트 구조

```
client/
├── src/
│   ├── before/              # 리팩터링 전 코드
│   │   ├── ProfileForm.jsx  # 실습 대상 파일
│   │   └── UserProfile.jsx
│   ├── after/               # 리팩터링 후 참고 코드
│   ├── App.jsx
│   └── main.jsx
└── tests/                   # PlayWright 테스트 파일 저장 위치
```

## 🍀 기초 실습: Context7로 문서 학습하기

### 목표

Context7 MCP를 사용하여 최신 라이브러리 문서를 학습하고 코드에 반영합니다.

### 프롬프트

```
c7을 이용해서 google/genai 라이브러리를 학습하고
텍스트 생성을 생성형 AI를 사용하도록 변경해줘
```

### 결과

- Context7이 google/genai 최신 문서를 가져옴
- Gemini가 문서 기반으로 코드를 업데이트

---

## 🧨 심화 실습: MCP 통합 워크플로

### Phase 1: React 19 문서 학습

**프롬프트:**

```
c7을 이용해서 React 19 문서를 학습하고
useActionState 전문가가 되어줘.
```

**결과:** Gemini가 React 19 useActionState API 전문 지식을 습득합니다.

---

### Phase 2: 계획 수립 및 이슈 생성

**프롬프트:**

```
현재 작업 중인 내용을 useActionState로 리팩터링할 계획을 세우고
GitHub MCP를 이용하여 새로운 이슈로 만들어 줘.
```

**결과:**

- Gemini가 현재 파일 분석 후 리팩터링 계획 수립
- GitHub MCP가 자동으로 이슈 생성

---

### Phase 3: 테스트 작성

**프롬프트:**

```
이 폼의 동작을 검증할 PlayWright 테스트 코드를 만들어서
'tests/MyForm.spec.js' 파일로 저장해 줘.
PlayWright MCP를 사용해서 어떻게 검증할 지 계획을 수립해
```

**결과:**

- PlayWright MCP가 테스트 계획 수립
- tests/MyForm.spec.js 파일 자동 생성

---

### Phase 4: 코드 리팩터링

**프롬프트:**

```
아까 만든 GitHub 이슈 계획대로,
현재 소스코드 파일을 리팩터링해줘.
```

**결과:** Gemini가 계획에 따라 코드를 리팩터링합니다.

---

### Phase 5: 리팩터링 검증

**프롬프트:**

```
PlayWright 테스트를 실행해서
리팩터링이 잘 됐는지 확인해 줘.
```

**결과:** PlayWright 테스트 실행 및 결과 확인

---

### Phase 6: PR 생성

**프롬프트:**

```
변경 사항을 커밋하고,
아까 만든 이슈와 연결해서 PR까지 올려 줘.
```

**결과:**

- GitHub MCP가 커밋 메시지 자동 생성
- 이슈와 연결된 PR 자동 생성

---

## 💡 핵심 포인트

- **Context7**: 최신 문서를 실시간으로 학습하여 AI에게 정확한 컨텍스트 제공
- **GitHub MCP**: 이슈/PR 관리 자동화로 워크플로 간소화
- **PlayWright MCP**: 자동 테스트 생성으로 리팩터링 안정성 확보

### 문제 상황

```javascript
// ❌ 작동하지 않음 - pending이 항상 false
export default function ProfileForm() {
  const { pending } = useFormStatus(); // 같은 컴포넌트에서 호출
  return <form>...</form>;
}
```

### 해결 방법

```javascript
// ✅ 올바른 사용법 - 자식 컴포넌트에서 호출
function SubmitButton() {
  const { pending } = useFormStatus(); // 부모 <form> 추적
  return <button disabled={pending}>제출</button>;
}
```

### Context7 진단 프롬프트

```bash
gemini -c context7 "React 19에서 useFormStatus를 사용했는데 'pending' 상태가 업데이트되지 않아. 내 코드를 확인하고 React 19 문서를 바탕으로 이유를 설명해줘. (파일:./src/broken/ProfileForm_broken.jsx)"
```

## 🎉 최신 기능 테스트: React 19.2

### Context7의 최신 정보력 증명

```bash
gemini -c context7 "방금 릴리스된 React 19.2 (2025년 10월)의 새로운 기능인 '<Activity />' 컴포넌트에 대해 설명해줘. 어떤 문제를 해결하고, 'mode' prop은 어떻게 사용하는 거야?"
```

## 📊 마이그레이션 비교표

### 폼 처리

| 개념      | React 18                  | React 19           |
| --------- | ------------------------- | ------------------ |
| 제출 처리 | onSubmit + preventDefault | <form action={fn}> |
| 로딩 상태 | useState(isPending)       | useFormStatus()    |
| 에러 처리 | useState(error)           | useActionState()   |

### 데이터 페칭

| 개념      | React 18                | React 19            |
| --------- | ----------------------- | ------------------- |
| 페칭 방식 | useEffect (side effect) | use(promise)        |
| 로딩 UI   | useState + if문         | <Suspense fallback> |
| 경쟁 상태 | 수동 ignore 변수        | 자동 처리           |

## 💡 핵심 메시지

### "지식의 격차(Information Gap)"

- 기존 AI: 학습 데이터 시점에 멈춤
- Context7: 최신 문서에 실시간 연결

### "선언적 vs 명령형"

- React 18: "어떻게(How)" - 모든 상태를 수동 관리
- React 19: "무엇을(What)" - 원하는 결과만 선언

## 🔗 참고 자료

- [React 19 공식 문서](https://react.dev/)
- [React 19 릴리스 블로그](https://react.dev/blog/2024/12/05/react-19)
- [React Compiler](https://react.dev/learn/react-compiler)

## 📝 라이센스

MIT
