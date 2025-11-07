// ProfileForm.jsx (React 18)
import { useState } from "react";
import { submitForm } from "../api";

export default function ProfileForm() {
  const [name, setName] = useState("");
  const [isPending, setIsPending] = useState(false); // 1. 로딩 상태
  const [error, setError] = useState(null); // 2. 에러 상태
  const [submittedName, setSubmittedName] = useState(""); // 3. 제출된 이름

  const handleSubmit = async (event) => {
    event.preventDefault(); // 3. 수동으로 기본 동작 방지
    setIsPending(true); // 4. 수동으로 로딩 상태 설정
    setError(null);

    try {
      await submitForm(name);
      setSubmittedName(name); // 제출 성공 시 이름 저장
      setName(""); // 성공 시 초기화
    } catch (err) {
      setError(err.message); // 5. 수동으로 에러 상태 설정
    } finally {
      setIsPending(false); // 6. 수동으로 로딩 상태 해제
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="profile-form">
      <h4>프로필 업데이트</h4>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 입력"
        disabled={isPending} // 7. 수동으로 UI 비활성화
        data-testid="profile-name-input"
        aria-label="이름 입력"
      />
      <button
        type="submit"
        disabled={isPending}
        data-testid="profile-submit-button"
        aria-busy={isPending}
      >
        {isPending ? "저장 중..." : "저장"}
      </button>
      {error && (
        <p className="error" data-testid="profile-error-message" role="alert">
          {error}
        </p>
      )}
      {submittedName && (
        <p
          className="success"
          data-testid="profile-success-message"
          role="status"
        >
          ✓ {submittedName}님의 프로필이 업데이트되었습니다!
        </p>
      )}
    </form>
  );
}
