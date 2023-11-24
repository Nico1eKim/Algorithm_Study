function solution(answers) {
  const answer = [];
  const FIRST = [1, 2, 3, 4, 5];
  const SECOND = [2, 1, 2, 3, 2, 4, 2, 5];
  const THIRD = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const grade = [0, 0, 0];
  let max = 0;

  for (let i = 0; i < answers.length; i++) {
    if (FIRST[i % 5] === answers[i]) grade[0]++;
    if (SECOND[i % 8] === answers[i]) grade[1]++;
    if (THIRD[i % 10] === answers[i]) grade[2]++;
  }

  // 최고 점수 찾기
  for (let i = 0; i < grade.length; i++) {
    max = max < grade[i] ? grade[i] : max;
  }

  for (let i = 0; i < grade.length; i++) {
    if (max === grade[i]) {
      answer.push(i + 1);
    }
  }

  return answer;
}
