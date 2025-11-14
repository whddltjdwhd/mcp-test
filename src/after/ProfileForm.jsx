// src/after/ProfileForm.jsx (React 19+ with Actions)
import { useState, useTransition } from "react";
import { submitForm } from "../api";

export default function ProfileForm() {
  // useTransition을 사용하여 UI 블로킹 없이 비동기 작업을 처리합니다.
  // isPending은 action이 실행 중일 때 true가 됩니다.
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState(null);
  const [submittedName, setSubmittedName] = useState("");

  // action 함수는 form의 `action` 속성에 전달됩니다.
  // FormData 객체를 통해 form 필드 값에 접근할 수 있습니다.
  const handleSubmitAction = async (formData) => {
    const name = formData.get("name");
    if (!name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }

    setError(null);
    setSubmittedName("");

    // startTransition으로 action을 감싸면, 해당 작업 동안 isPending이 true가 됩니다.
    startTransition(async () => {
      try {
        await submitForm(name);
        setSubmittedName(name);
      } catch (err) {
        setError(err.message);
      }
    });
  };

  return (
    // `action` 속성에 직접 서버/클라이언트 액션을 전달합니다.
    // 이렇게 하면 React가 양식 제출의 상태(pending, data, error)를 관리할 수 있게 됩니다.
    <form action={handleSubmitAction} data-testid="profile-form">
      <h4>프로필 업데이트 (개선)</h4>
      <input
        type="text"
        name="name" // `name` 속성이 FormData의 키가 됩니다.
        placeholder="이름 입력"
        disabled={isPending}
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
      {!error && submittedName && (
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
