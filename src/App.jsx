import { useState } from "react"; // 1. useState 훅 임포트
import ProfileFormBefore from "./before/ProfileForm";
import UserProfileBefore from "./before/UserProfile";
// import ProfileFormAfter from "./after/ProfileForm";
// import UserProfileAfter from "./after/UserProfile";

function App() {
  // 2. UserProfileBefore의 표시 여부를 관리하는 상태
  const [showBeforeProfile, setShowBeforeProfile] = useState(true);
  const [showAfterProfile, setShowAfterProfile] = useState(true);

  return (
    <div>
      <h1>🚀 React 18 → 19 마이그레이션 핸즈온</h1>

      <div className="info-box">
        <p>
          <strong>💡 목표:</strong> Gemini CLI + Context7을 활용하여 React 18
          코드를 React 19의 최신 기능으로 마이그레이션
        </p>
      </div>

      <h2>시나리오 1: 복잡한 폼(Form) 로직의 혁신</h2>

      <div className="container">
        <div className="section">
          <h3>
            Before <span className="badge v18">React 18</span>
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
            After <span className="badge v19">React 19</span>
          </h3>
          <p style={{ color: "#fbbf24" }}>
            이곳에 Context7을 활용하여 React 19버전으로 마이그레이션한
            컴포넌트를 추가합니다.
          </p>
          {/* <ProfileFormAfter /> */}
          <div
            className="info-box"
            style={{ marginTop: "1rem", fontSize: "0.9em" }}
          >
            <p>✅ useActionState</p>
            <p>✅ useFormStatus</p>
            <p>✅ 선언적 처리</p>
          </div>
        </div>
      </div>

      <hr />

      <h2>시나리오 2: 장황한 데이터 페칭(Fetching) 간소화</h2>

      <div className="container">
        <div className="section">
          <h3>
            Before <span className="badge v18">React 18</span>
          </h3>
          <button onClick={() => setShowBeforeProfile((prev) => !prev)}>
            {showBeforeProfile ? "프로필 숨기기" : "프로필 보이기"}
          </button>

          {/* 4. showBeforeProfile 상태에 따라 조건부 렌더링 */}
          {showBeforeProfile && (
            <>
              <UserProfileBefore userId={1} />
              <div
                className="info-box"
                style={{ marginTop: "1rem", fontSize: "0.9em" }}
              >
                <p>❌ useEffect + 3개의 useState</p>
                <p>❌ 명령적 상태 관리</p>
              </div>
            </>
          )}
        </div>

        <div className="section after">
          <h3>
            After <span className="badge v19">React 19</span>
          </h3>
          <button onClick={() => setShowAfterProfile((prev) => !prev)}>
            {showAfterProfile ? "프로필 숨기기" : "프로필 보이기"}
          </button>
          {showAfterProfile && (
            <>
              {/* <UserProfileAfter userId={1} /> */}
              <p style={{ color: "#fbbf24" }}>
                이곳에 Context7을 활용하여 React 19버전으로 마이그레이션한
                컴포넌트를 추가합니다.
              </p>
              <div
                className="info-box"
                style={{ marginTop: "1rem", fontSize: "0.9em" }}
              >
                <p>✅ use(promise)</p>
                <p>✅ 선언적 처리</p>
              </div>
            </>
          )}
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
