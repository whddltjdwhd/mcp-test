import TextGeneratorBefore from "./before/TextGenerator";
import ProfileFormBefore from "./before/ProfileForm";
// import TextGeneratorAfter from "./after/TextGenerator";
// import ProfileFormAfter from "./after/ProfileForm";
// import UserProfileAfter from "./after/UserProfile";

function App() {
  return (
    <div>
      <h1>🚀 코딩 에이전트를 똑똑하게 사용하기 with MCP 서버</h1>
      <div className="info-box">
        <p>
          <strong>💡 목표:</strong> MCP(Model Context Protocol)를 활용하여
          <br />
          문서 학습 → 계획 수립 → 테스트 작성 → 코드 리팩터링 → 검증 → PR 생성
          <br />
          전체 워크플로를 자동화합니다.
        </p>
      </div>
      <h2>🍀 기초 실습: Context7로 최신 문서 학습하기</h2>
      <div className="info-box">
        <p>
          <strong>📝 실습 프롬프트:</strong>
          <br />
          "c7을 이용해서 google/genai 라이브러리를 학습하고 텍스트 생성을 생성형
          AI를 사용하도록 변경해줘"
        </p>
        <p style={{ marginTop: "0.5rem", fontSize: "0.9em" }}>
          ✅ Context7이 google/genai 최신 문서를 학습합니다
          <br />
          ✅ 아래 mock 응답이 실제 AI 생성 텍스트로 바뀝니다
          <br />✅ 최신 라이브러리 API 사용법이 자동 반영됩니다
        </p>
      </div>
      <TextGeneratorBefore />
      <hr />
      <h2>🧨 심화 실습: React 19 마이그레이션 워크플로</h2>
      <div className="info-box">
        <p>
          <strong>Phase 1:</strong> React 19 문서 학습 →{" "}
          <strong>Phase 2:</strong> 계획 수립 & 이슈 생성 →<br />
          <strong>Phase 3:</strong> 테스트 작성 → <strong>Phase 4:</strong> 코드
          리팩터링 → <strong>Phase 5:</strong> 검증 → <strong>Phase 6:</strong>{" "}
          PR 생성
        </p>
      </div>
      <h3>실습 대상: 폼(Form) 로직 리팩터링</h3>
      <div className="container">
        <div className="section">
          <h3>
            Before <span className="badge v18">useState 사용</span>
          </h3>
          <ProfileFormBefore />
          <div
            className="info-box"
            style={{ marginTop: "1rem", fontSize: "0.9em" }}
          >
            <p>❌ 3개의 useState</p>
            <p>❌ 수동 event.preventDefault()</p>
            <p>❌ 명령형 상태 관리</p>
          </div>
        </div>

        <div className="section after">
          <h3>
            After <span className="badge v19">useActionState</span>
          </h3>
          <p style={{ color: "#fbbf24", padding: "1rem" }}>
            <strong>📝 실습 순서:</strong>
            <br />
            1. React 19 문서 학습
            <br />
            2. 리팩터링 계획 & 이슈 생성
            <br />
            3. PlayWright 테스트 작성
            <br />
            4. 코드 리팩터링
            <br />
            5. 테스트 실행 & 검증
            <br />
            6. PR 생성
          </p>
          {/* <ProfileFormAfter /> */}
          <div
            className="info-box"
            style={{ marginTop: "1rem", fontSize: "0.9em" }}
          >
            <p>✅ useActionState로 통합 상태 관리</p>
            <p>✅ 자동 pending 상태 관리</p>
            <p>✅ 선언적 폼 처리</p>
          </div>
        </div>
      </div>
      <div className="info-box" style={{ marginTop: "2rem" }}>
        <p>
          <strong>🎯 다음 단계:</strong> 위의 실습 순서에 따라 프롬프트를
          실행하여
          <br />
          전체 MCP 워크플로를 체험해보세요!
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          자세한 프롬프트는 <code>PROMPTS_CHEATSHEET.md</code>를 참조하세요.
        </p>
      </div>
    </div>
  );
}

export default App;
