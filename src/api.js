// 가짜 API 호출 함수
export function fetchBio(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 에러 테스트를 위해 userId가 0일 때 에러 발생
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
