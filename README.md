# React 18 → React 19 마이그레이션 핸즈온 세션

## 🎯 세션 목표

Gemini CLI와 Context7 MCP를 활용하여 React 18 코드를 React 19의 최신 기능으로 마이그레이션하는 실전 경험

## 📚 학습 내용

1. **React 19 Actions**: 복잡한 폼 로직을 선언적으로 간소화
2. **React 19 use Hook**: 데이터 페칭의 새로운 패러다임
3. **Context7**: 최신 기술 문서에 실시간으로 연결된 AI 파트너

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 2. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

### 3. Gemini CLI 설정 확인

```bash
# Context7이 정상 작동하는지 테스트
gemini -c context7 "Test"
```

## 📁 프로젝트 구조

```
hands-on-react18/
├── src/
│   ├── before/              # React 18 버전 (마이그레이션 전)
│   │   ├── ProfileForm.jsx  # 시나리오 1: 복잡한 폼 로직
│   │   └── UserProfile.jsx  # 시나리오 2: useEffect 데이터 페칭
│   ├── after/               # React 19 버전 (마이그레이션 후)
│   │   ├── ProfileForm.jsx  # Actions + useActionState
│   │   └── UserProfile.jsx  # use Hook + Suspense
│   ├── broken/              # 트러블슈팅용 잘못된 예제
│   │   └── ProfileForm_broken.jsx
│   ├── App.jsx             # 메인 앱
│   └── main.jsx
└── README.md
```

## 🎓 시나리오 1: 폼(Form) 로직 마이그레이션

### Before (React 18)

- ❌ 3개의 useState (name, isPending, error)
- ❌ 수동 event.preventDefault()
- ❌ 명령형 상태 관리 (setIsPending, setError)
- ❌ 수동 UI 비활성화 (disabled={isPending})

### After (React 19)

- ✅ useActionState로 통합 상태 관리
- ✅ <form action={formAction}> 네이티브 지원
- ✅ useFormStatus로 자동 pending 상태
- ✅ 선언적 폼 처리

### Context7 프롬프트

```bash
gemini -c context7 "이 React 18 폼 코드(파일:./src/before/ProfileForm.jsx)를 React 19의 'Actions' 기능을 사용하도록 마이그레이션해줘. 'useActionState'와 'useFormStatus' 훅을 활용해서 로딩, 에러 처리를 포함한 코드를 더 간결하게 만들고 싶어. 마이그레이션된 전체 코드를 제공해줘."
```

## 🎓 시나리오 2: 데이터 페칭 마이그레이션

### Before (React 18)

- ❌ useEffect + 3개의 useState (data, loading, error)
- ❌ 경쟁 상태(race condition) 수동 방지
- ❌ 복잡한 클린업 로직
- ❌ 수동 로딩/에러 UI 처리

### After (React 19)

- ✅ use(promise)로 렌더링 단계 데이터 읽기
- ✅ Suspense로 선언적 로딩 처리
- ✅ ErrorBoundary로 선언적 에러 처리
- ✅ 자동 경쟁 상태 방지

### Context7 프롬프트

```bash
gemini -c context7 "이 React 18 데이터 페칭 코드(파일:./src/before/UserProfile.jsx)를 React 19의 'use' 훅과 '<Suspense>'를 사용하도록 마이그레이션해줘. 'useEffect'와 3개의 'useState'를 모두 제거하고 싶어. 부모 컴포넌트가 <Suspense>를 어떻게 사용해야 하는지도 함께 보여줘."
```

## 🐛 트러블슈팅: useFormStatus의 함정

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
