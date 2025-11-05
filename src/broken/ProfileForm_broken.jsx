// ProfileForm_broken.jsx (React 19 - 잘못된 예시)
// 🚩 이 코드는 작동하지 않습니다! useFormStatus의 일반적인 실수 사례

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

async function updateProfile(previousState, formData) {
  const name = formData.get("name");

  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (name.trim() === "") {
    return { success: false, message: "이름은 비워둘 수 없습니다." };
  }

  console.log(`React 19: 이름이 저장되었습니다 - ${name}`);
  return { success: true, message: "프로필이 저장되었습니다!" };
}

export default function ProfileForm() {
  const [state, formAction] = useActionState(updateProfile, {
    success: false,
    message: null,
  });

  // 🚩 이 훅은 여기서 작동하지 않습니다!
  // useFormStatus는 부모 <form>의 상태를 추적합니다.
  // 같은 컴포넌트 내의 <form>은 추적하지 않습니다!
  const { pending } = useFormStatus();

  return (
    <form action={formAction}>
      <h4>프로필 업데이트 (버그 있음)</h4>
      <input type="text" name="name" placeholder="이름 입력" />

      {/* 'pending'은 항상 false가 됩니다. */}
      <button type="submit" disabled={pending}>
        {pending ? "저장 중..." : "저장"}
      </button>

      {state.message && (
        <p style={{ color: state.success ? "green" : "red" }}>
          {state.message}
        </p>
      )}
    </form>
  );
}
