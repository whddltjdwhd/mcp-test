import UserProfileBefore from "./before/UserProfile";
// import UserProfileAfter from "./after/UserProfile";

function App() {
  return (
    <div>
      <h1>🚀 React 18 → 19 마이그레이션 핸즈온</h1>

      <div className="info-box">
        <p>
          <strong>💡 목표:</strong> Gemini CLI + Context7을 활용하여 React 18
          코드를 React 19의 최신 기능으로 마이그레이션
        </p>
      </div>

      <h2>장황한 데이터 페칭(Fetching) 간소화</h2>

      <div className="container">
        <div className="section">
          <h3>
            Before <span className="badge v18">React 18</span>
          </h3>
          <UserProfileBefore userId={1} />
          <div
            className="info-box"
            style={{ marginTop: "1rem", fontSize: "0.9em" }}
          >
            <p>❌ useEffect + 3개의 useState</p>
            <p>❌ 수동 경쟁 상태 방지</p>
            <p>❌ 복잡한 클린업</p>
          </div>
        </div>

        <div className="section after">
          <h3>
            After <span className="badge v19">React 19</span>
          </h3>
          {
            /* {<UserProfileAfter userId={1} />} */ <p>
              이곳에 UserProfileAfter 컴포넌트를 추가하세요.
            </p>
          }
          <div
            className="info-box"
            style={{ marginTop: "1rem", fontSize: "0.9em" }}
          >
            <p>✅ use(promise)</p>
            <p>✅ Suspense</p>
            <p>✅ ErrorBoundary</p>
            <p>✅ 선언적 처리</p>
          </div>
        </div>
      </div>

      <hr />

      <div className="info-box">
        <p>
          <strong>🎯 다음 단계:</strong> 터미널에서 Gemini CLI + Context7
          프롬프트를 실행하여 마이그레이션을 시작하세요!
        </p>
        <p style={{ marginTop: "0.5rem" }}>
          자세한 가이드는 <code>README.md</code>를 참조하세요.
        </p>
      </div>
    </div>
  );
}

export default App;
