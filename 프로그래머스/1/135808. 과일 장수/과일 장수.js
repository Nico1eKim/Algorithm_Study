function solution(k, m, score) {
  var answer = 0;

  // 1. 숫자 배열을 오름차순 정렬
  score.sort(function (a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  // 2. 나머지가 있다면 (버리는 사과) splice로 나머지를 잘라낸다
  if (score.length % m !== 0) {
    score.splice(0, score.length % m);
  }

  // 3. 합산
  const newArr = [];
  for (let i = 0; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}
