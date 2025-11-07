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
yarn install
```

### 2. 개발 서버 실행

```bash
yarn start
```

### 3. MCP 서버 연결 확인

Gemini CLI에서 Context7, GitHub, PlayWright MCP 서버와 연결되었는지 확인하세요.

## 📁 프로젝트 구조

```
client/
├── src/
│   ├── before/                  # 리팩터링 전 코드 (React 18 패턴)
│   │   ├── ProfileForm.jsx      # 폼 제출 처리 (useState 4개 사용)
│   │   └── TextGenerator.jsx    # AI 텍스트 생성 (수동 상태 관리)
│   ├── after/                   # 리팩터링 후 코드 (React 19 패턴)
│   │   └── (실습 중 생성됨)
│   ├── api.js                   # Mock API 함수
│   ├── ErrorBoundary.jsx        # 에러 처리용 컴포넌트
│   ├── App.jsx                  # 메인 앱 컴포넌트
│   ├── main.jsx                 # 진입점
│   └── index.css                # 스타일
├── tests/                       # 테스트 파일 (선택사항)
│   └── .gitkeep
├── PROMPTS_CHEATSHEET.md        # 프롬프트 치트시트
├── INSTRUCTOR_GUIDE.md          # 강사용 가이드
└── README.md                    # 이 파일
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

현재 `src/before/ProfileForm.jsx`를 React 19의 최신 문법으로 리팩터링하는 전체 워크플로를 진행합니다.

### Phase 1: React 19 문서 학습

**프롬프트:**

```
c7을 이용해서 React 19 문서를 학습해줘.
```

**결과:** Copilot이 React 19 최신 지식을 습득합니다.

---

### Phase 2: 계획 수립 및 이슈 생성

**프롬프트:**

```
현재 작업 중인 내용을 최신 react 문법을 이용해 리팩터링할 계획을 세우고
GitHub MCP를 이용하여 새로운 이슈로 만들어 줘.
```

**결과:**

- Copilot이 현재 파일 분석 후 리팩터링 계획 수립
- GitHub MCP가 자동으로 이슈 생성 (예: Issue #1)

---

### Phase 3: 테스트 작성

**프롬프트:**

```
이 폼의 동작을 검증할 PlayWright 테스트 코드를 만들어서
'tests/ProfileForm.spec.js' 파일로 저장해 줘.
```

**결과:**

- PlayWright를 사용한 E2E 테스트 생성
- tests/ProfileForm.spec.js 파일 자동 생성

---

### Phase 4: 코드 리팩터링

**프롬프트:**

```
ProfileForm만 리팩토링 진행해줘
```

**결과:**

- Copilot이 계획에 따라 코드를 리팩터링
- `src/after/ProfileForm.jsx` 파일 생성

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

### Context7 진단 프롬프트

```bash
gemini -c context7 "React 19에서 useFormStatus를 사용했는데 'pending' 상태가 업데이트되지 않아. 내 코드를 확인하고 React 19 문서를 바탕으로 이유를 설명해줘. (파일:./src/broken/ProfileForm_broken.jsx)"
```

## 🎉 최신 기능 테스트: React 19.2

### Context7의 최신 정보력 증명

```bash
gemini -c context7 "방금 릴리스된 React 19.2 (2025년 10월)의 새로운 기능인 '<Activity />' 컴포넌트에 대해 설명해줘. 어떤 문제를 해결하기 위해서 사용하는 거야?"
```

## 💡 핵심 메시지

### "지식의 격차(Information Gap)"

- 기존 AI: 학습 데이터 시점에 멈춤
- Context7: 최신 문서에 실시간 연결
