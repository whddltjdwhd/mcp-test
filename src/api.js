export function fetchBio(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 0) {
        reject(new Error("잘못된 사용자 ID입니다."));
      } else {
        resolve(
          `사용자 ${userId}의 바이오입니다. React 19의 use Hook으로 페치되었습니다.`
        );
      }
    }, 1500);
  });
}

export async function submitForm(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name.trim() === "") {
        reject(new Error("이름은 비워둘 수 없습니다."));
      } else {
        alert(`이름이 저장되었습니다 - ${name}`);
        resolve();
      }
    }, 1500);
  });
}
