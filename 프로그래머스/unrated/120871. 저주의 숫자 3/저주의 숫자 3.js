// 3의 배수이거나 3이 들어가면 건너뛰기
function solution(n) {
  let answer = 0;

  for (let i = 0; i < n; i++) {
    answer++;

    while (answer % 3 === 0 || `${answer}`.includes("3")) {
      answer++;
    }
  }

  return answer;
}
