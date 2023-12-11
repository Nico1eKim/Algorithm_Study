function solution(s) {
  let s_to_num = parseInt(s); // 문자열 숫자로 형변환

  if (s.length === 4 || s.length === 6) {
    for (let i = 0; i < s.length; i++) {
      // 문자열과 숫자로 변환하게 같으면 숫자니까!
      if (s_to_num == s) return true;
    }
  }
  return false; // 다른 모든 경우
}