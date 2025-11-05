// UserProfile.jsx (React 18)
import { useState, useEffect } from "react";
import { fetchBio } from "../api";

export default function UserProfile({ userId }) {
  // 1. 데이터, 로딩, 에러를 위한 3개의 useState
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2. 데이터 페칭을 위한 useEffect
  useEffect(() => {
    async function startFetching() {
      setLoading(true);
      setError(null);
      try {
        const bio = await fetchBio(userId);
        setData(bio);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    startFetching();
  }, [userId]); // 3. 의존성 배열 관리 (잊으면 무한 루프)

  // 4. 로딩과 에러 상태를 수동으로 렌더링
  if (loading) {
    return <p className="loading">프로필 로딩 중...</p>;
  }
  if (error) {
    return <p className="error">{error}</p>;
  }

  // 5. 성공 시 데이터 렌더링
  return (
    <div>
      <h4>사용자 프로필</h4>
      <p>{data}</p>
    </div>
  );
}
