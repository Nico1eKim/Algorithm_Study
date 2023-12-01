function solution(num, total) {
  let answer = [];
  let x = total / num;
  let limit = (num - 1) / 2;

  // 5, 15: 3 - 2 ~ 3 + 2
  // 4, 14: 3.5 - 1.5 ~ 3.5 + 1.5
  for (let i = x - limit; i <= x + limit; i++) {
    answer.push(i);
  }

  return answer;
}

console.log(solution(4, 14));
