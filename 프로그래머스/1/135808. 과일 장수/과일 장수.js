function solution(k, m, score) {
  let answer = 0;
  const max_box = Math.floor(score.length / m); // 최대 사과 상자 개수
  let index = m - 1; // 각 상자의 최저값이 있는 인덱스

  // [4,4,4,4,4,4,2,2,2,2,1,1]
  score.sort((a, b) => b - a); // 내림차순으로 정렬

  for (let i = 0; i < max_box; i++) {
    answer += score[index] * m; // 최저 점수 * 사과 개수
    index += m;
  }

  return answer;
}
