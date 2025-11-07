# 프롬프트 치트시트

이 문서는 핸즈온 세션에서 사용할 모든 프롬프트를 정리한 참고 자료입니다.

---

## 🍀 기초 실습: Context7

### 기본 문서 학습

```
c7을 이용해서 google/genai 라이브러리를 학습하고
텍스트 생성을 생성형 AI를 사용하도록 변경해줘
```

---

## 🧨 심화 실습: 통합 워크플로

### Phase 1: React 19 문서 학습

```
c7을 이용해서 React 19 문서를 학습하고
useActionState 전문가가 되어줘.
```

**목적:** AI에게 React 19 useActionState에 대한 최신 지식 주입

---

### Phase 2: 계획 수립 및 이슈 생성

```
현재 작업 중인 내용을 useActionState로 리팩터링할 계획을 세우고
GitHub MCP를 이용하여 새로운 이슈로 만들어 줘.
```

**목적:**

- 현재 파일 분석
- 리팩터링 계획 수립
- GitHub 이슈 자동 생성

---

### Phase 3: 테스트 작성

```
이 폼의 동작을 검증할 PlayWright 테스트 코드를 만들어서
'tests/MyForm.spec.js' 파일로 저장해 줘.
PlayWright MCP를 사용해서 어떻게 검증할 지 계획을 수립해
```

**목적:**

- 현재 상태 검증용 E2E 테스트 생성
- 리팩터링 전 기능 고정

---

### Phase 4: 코드 리팩터링

```
아까 만든 GitHub 이슈 계획대로,
현재 소스코드 파일을 리팩터링해줘.
```

**목적:** 계획에 따른 코드 리팩터링 실행

---

### Phase 5: 리팩터링 검증

```
PlayWright 테스트를 실행해서
리팩터링이 잘 됐는지 확인해 줘.
```

**목적:** 테스트로 리팩터링 성공 여부 검증

---

### Phase 6: PR 생성

```
변경 사항을 커밋하고,
아까 만든 이슈와 연결해서 PR까지 올려 줘.
```

**목적:**

- 변경사항 커밋
- 커밋 메시지 자동 생성
- 이슈와 연결된 PR 생성

---

## � 프롬프트 작성 팁

### 1. 명확한 도구 지정

❌ 나쁜 예:

```
React 19 문서를 학습해줘
```

✅ 좋은 예:

```
c7을 이용해서 React 19 문서를 학습하고
useActionState 전문가가 되어줘.
```

### 2. 구체적인 출력 형식 지정

❌ 나쁜 예:

```
테스트 만들어줘
```

✅ 좋은 예:

```
이 폼의 동작을 검증할 PlayWright 테스트 코드를 만들어서
'tests/MyForm.spec.js' 파일로 저장해 줘.
```

### 3. 컨텍스트 참조

❌ 나쁜 예:

```
새로운 계획으로 코드를 수정해줘
```

✅ 좋은 예:

```
아까 만든 GitHub 이슈 계획대로,
현재 소스코드 파일을 리팩터링해줘.
```

### 4. 단계별 요청

한 번에 모든 것을 요청하지 말고, 단계를 나누어 요청하세요.

✅ 권장 순서:

1. 문서 학습
2. 계획 수립
3. 테스트 작성
4. 코드 수정
5. 검증
6. 커밋/PR

---

## 🔍 추가 탐색 프롬프트

### 코드 분석

```
현재 파일의 문제점을 분석하고
개선 방안을 제시해줘
```

### 문서 탐색

```
c7을 이용해서 [라이브러리명] 최신 문서에서
[기능명]에 대한 정보를 찾아줘
```

### 테스트 수정

```
tests/MyForm.spec.js 테스트가 실패했어.
코드를 분석하고 테스트를 수정해줘
```

### 커밋 메시지 개선

```
이번 변경사항에 대한 의미있는 커밋 메시지를
작성해줘. Conventional Commits 형식으로
```

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
