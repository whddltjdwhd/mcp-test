# Context7 프롬프트 치트시트

이 문서는 핸즈온 세션에서 사용할 모든 Context7 프롬프트를 정리한 참고 자료입니다.

---

## 📋 시나리오 1: 폼 마이그레이션

### 1-1. 기본 마이그레이션 요청

```bash
gemini -c context7 "이 React 18 폼 코드(파일:./src/before/ProfileForm.jsx)를 React 19의 'Actions' 기능을 사용하도록 마이그레이션해줘. 'useActionState'와 'useFormStatus' 훅을 활용해서 로딩, 에러 처리를 포함한 코드를 더 간결하게 만들고 싶어. 마이그레이션된 전체 코드를 제공해줘."
```

### 1-2. 코드 분석 요청

```bash
gemini -c context7 "파일:./src/before/ProfileForm.jsx를 분석하고, React 19로 마이그레이션할 때 얻을 수 있는 구체적인 이점을 설명해줘."
```

### 1-3. 단계별 설명 요청

```bash
gemini -c context7 "React 18의 폼 처리를 React 19 Actions로 마이그레이션하는 과정을 단계별로 설명해줘. 각 단계에서 어떤 개선이 이루어지는지 코드 예시와 함께 보여줘."
```

---

## 🐛 트러블슈팅: useFormStatus

### 2-1. 문제 진단 요청

```bash
gemini -c context7 "React 19에서 useFormStatus를 사용했는데 'pending' 상태가 업데이트되지 않아. 내 코드를 확인하고 React 19 문서를 바탕으로 이유를 설명해줘. (파일:./src/broken/ProfileForm_broken.jsx)"
```

### 2-2. useFormStatus 사용법 확인

```bash
gemini -c context7 "React 19의 useFormStatus 훅은 어떻게 사용하는 거야? 일반적인 실수와 올바른 사용법을 코드 예시와 함께 보여줘."
```

### 2-3. 해결 방법 적용

```bash
gemini -c context7 "파일:./src/broken/ProfileForm_broken.jsx의 useFormStatus 문제를 고쳐줘. 왜 이렇게 수정해야 하는지도 설명해줘."
```

---

## 📡 시나리오 2: 데이터 페칭 마이그레이션

### 3-1. 기본 마이그레이션 요청

```bash
gemini -c context7 "이 React 18 데이터 페칭 코드(파일:./src/before/UserProfile.jsx)를 React 19의 'use' 훅과 '<Suspense>'를 사용하도록 마이그레이션해줘. 'useEffect'와 3개의 'useState'를 모두 제거하고 싶어. 부모 컴포넌트가 <Suspense>를 어떻게 사용해야 하는지도 함께 보여줘."
```

### 3-2. use Hook 개념 이해

```bash
gemini -c context7 "React 19의 'use' 훅이 useEffect와 어떻게 다른지 설명해줘. 왜 데이터 페칭에서 use 훅이 더 나은지 구체적인 이유를 알려줘."
```

### 3-3. Suspense 통합 방법

```bash
gemini -c context7 "React 19에서 use 훅과 Suspense를 함께 사용하는 방법을 보여줘. 부모-자식 컴포넌트 구조에서 어떻게 설정해야 하는지 전체 코드를 제공해줘."
```

### 3-4. 경쟁 상태 처리 확인

```bash
gemini -c context7 "React 18에서는 경쟁 상태(race condition)를 방지하기 위해 'ignore' 변수를 사용했어. React 19의 use 훅은 이 문제를 어떻게 해결하는지 설명해줘."
```

---

## 🎉 최신 기능 탐색: React 19.2

### 4-1. Activity 컴포넌트 질문

```bash
gemini -c context7 "방금 릴리스된 React 19.2 (2025년 10월)의 새로운 기능인 '<Activity />' 컴포넌트에 대해 설명해줘. 어떤 문제를 해결하고, 'mode' prop은 어떻게 사용하는 거야?"
```

### 4-2. React 19.2 전체 기능

```bash
gemini -c context7 "React 19.2에서 새로 추가된 기능들을 모두 알려줘. 각 기능이 어떤 문제를 해결하는지 예시와 함께 설명해줘."
```

### 4-3. Activity 실전 적용

```bash
gemini -c context7 "React 19.2의 <Activity /> 컴포넌트를 사용해서 탭 전환 시 상태를 유지하는 코드를 작성해줘. 실제 사용 사례를 보여줘."
```

---

## 💡 일반 학습 프롬프트

### 5-1. React 19 주요 변경사항

```bash
gemini -c context7 "React 19에서 React 18 대비 가장 중요한 변경사항 5가지를 알려줘. 각 변경사항이 개발자에게 어떤 영향을 주는지 설명해줘."
```

### 5-2. 마이그레이션 체크리스트

```bash
gemini -c context7 "React 18에서 React 19로 마이그레이션할 때 확인해야 할 체크리스트를 만들어줘. Breaking changes와 deprecation 경고를 모두 포함해줘."
```

### 5-3. 베스트 프랙티스

```bash
gemini -c context7 "React 19에서 폼 처리의 베스트 프랙티스는 무엇인가? Actions, useActionState, useFormStatus를 언제 어떻게 사용하는지 가이드라인을 제공해줘."
```

### 5-4. 성능 최적화

```bash
gemini -c context7 "React 19의 새로운 기능들을 사용해서 애플리케이션 성능을 최적화하는 방법을 알려줘. 구체적인 예시와 함께 설명해줘."
```

---

## 🔍 코드 리뷰 프롬프트

### 6-1. 마이그레이션된 코드 검증

```bash
gemini -c context7 "파일:./src/after/ProfileForm.jsx를 리뷰해줘. React 19 베스트 프랙티스를 잘 따르고 있는지, 개선할 부분이 있는지 알려줘."
```

### 6-2. 에러 발생 시 디버깅

```bash
gemini -c context7 "파일:./src/after/ProfileForm.jsx를 실행했는데 [에러 메시지]가 발생했어. React 19 문서를 기반으로 원인과 해결 방법을 알려줘."
```

### 6-3. 타입스크립트 적용

```bash
gemini -c context7 "파일:./src/after/ProfileForm.jsx를 TypeScript로 변환해줘. React 19의 새로운 타입 정의를 정확하게 적용해줘."
```

---

## 🚀 심화 프롬프트

### 7-1. useOptimistic 통합

```bash
gemini -c context7 "파일:./src/after/ProfileForm.jsx에 useOptimistic 훅을 추가해서 낙관적 UI 업데이트를 구현해줘. 사용자가 즉각적인 피드백을 받을 수 있도록 해줘."
```

### 7-2. Server Actions 적용

```bash
gemini -c context7 "이 폼을 Server Actions와 함께 사용하려면 어떻게 수정해야 해? Next.js App Router 환경에서 동작하는 코드를 보여줘."
```

### 7-3. ErrorBoundary 통합

```bash
gemini -c context7 "use 훅을 사용하는 컴포넌트에 ErrorBoundary를 적용하는 방법을 보여줘. Promise rejection을 우아하게 처리하고 싶어."
```

### 7-4. 다중 폼 관리

```bash
gemini -c context7 "한 페이지에 여러 개의 폼이 있을 때, React 19 Actions를 어떻게 관리하는 것이 좋을까? 코드 예시와 함께 보여줘."
```

---

## 📊 비교 분석 프롬프트

### 8-1. Before/After 성능 비교

```bash
gemini -c context7 "React 18 방식(파일:./src/before/ProfileForm.jsx)과 React 19 방식(파일:./src/after/ProfileForm.jsx)의 성능 차이를 분석해줘. 렌더링 횟수, 메모리 사용량 등을 비교해줘."
```

### 8-2. 코드 복잡도 비교

```bash
gemini -c context7 "React 18과 React 19의 데이터 페칭 코드를 비교하고, 코드 복잡도가 어떻게 개선되었는지 정량적으로 분석해줘."
```

### 8-3. 사용자 경험 개선

```bash
gemini -c context7 "React 19로 마이그레이션하면 사용자 경험이 어떻게 개선되는지 설명해줘. 로딩 상태, 에러 처리, 응답성 측면에서 비교해줘."
```

---

## 🛠️ 실전 적용 프롬프트

### 9-1. 실제 프로젝트 마이그레이션 계획

```bash
gemini -c context7 "대규모 React 18 프로젝트를 React 19로 마이그레이션하는 단계별 계획을 세워줘. 위험 요소와 완화 전략도 포함해줘."
```

### 9-2. 호환성 확인

```bash
gemini -c context7 "React 19로 마이그레이션할 때 기존 라이브러리(react-router, redux, styled-components 등)와의 호환성 문제가 있을까? 각 라이브러리별로 확인 사항을 알려줘."
```

### 9-3. 점진적 마이그레이션

```bash
gemini -c context7 "React 18과 React 19 코드를 같은 프로젝트에서 혼용할 수 있을까? 점진적으로 마이그레이션하는 전략을 제시해줘."
```

---

## 📝 문서화 프롬프트

### 10-1. 마이그레이션 가이드 생성

```bash
gemini -c context7 "팀원들을 위한 React 19 마이그레이션 가이드를 작성해줘. 주요 변경사항, 코드 예시, 주의사항을 포함해줘."
```

### 10-2. JSDoc 주석 추가

```bash
gemini -c context7 "파일:./src/after/ProfileForm.jsx에 JSDoc 주석을 추가해줘. 각 함수와 컴포넌트의 역할, 매개변수, 반환값을 명확히 문서화해줘."
```

### 10-3. README 업데이트

```bash
gemini -c context7 "React 19로 마이그레이션한 프로젝트의 README.md를 업데이트해줘. 새로운 기능 사용법과 개발 환경 설정을 포함해줘."
```

---

## 💬 대화형 학습 프롬프트

### 11-1. "왜?"에 대한 질문

```bash
gemini -c context7 "React 19에서 왜 forwardRef가 더 이상 필요 없어졌어? ref를 prop으로 직접 전달할 수 있게 된 이유와 내부 동작을 설명해줘."
```

### 11-2. 개념 비교

```bash
gemini -c context7 "React 19의 'Actions'와 'Server Actions'의 차이점은 뭐야? 각각 언제 사용하는 게 적절한지 알려줘."
```

### 11-3. 고급 패턴

```bash
gemini -c context7 "React 19에서 use 훅과 useEffect를 함께 사용해야 하는 경우가 있을까? 있다면 어떤 경우인지 예시를 보여줘."
```

---

## 🎯 프롬프트 작성 팁

### 좋은 프롬프트의 특징:

1. **구체적인 파일 경로** 제공
2. **명확한 목표** 기술
3. **컨텍스트** 제공 (React 버전, 사용 중인 기능)
4. **기대하는 결과** 명시

### 프롬프트 템플릿:

```
gemini -c context7 "[동작](파일:[경로])를 [목표]하고 싶어. [추가 요구사항]을 포함해서 [결과물]을 제공해줘."
```

### 예시:

```bash
gemini -c context7 "분석(파일:./src/before/ProfileForm.jsx)를 React 19 Actions로 리팩토링하고 싶어. useActionState와 useFormStatus를 포함해서 완전한 코드를 제공해줘."
```

---

## 🔗 참고 자료

- **React 공식 문서**: https://react.dev/
- **Context7**: https://context7.dev/
- **Gemini CLI**: https://github.com/google/generative-ai-cli

---

**팁:** 이 치트시트를 브라우저 북마크나 IDE 옆에 두고 참조하세요! 🚀
