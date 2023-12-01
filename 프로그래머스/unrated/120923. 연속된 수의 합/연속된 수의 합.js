function solution(num, total) {
  let answer = [];
  let x = Math.floor(total / num);
  let limit = Math.floor(num / 2);

  if (num % 2 !== 0) {
    for (let i = x - limit; i <= x + limit; i++) {
      answer.push(i);
    }
  } else {
    // 3 - 2 + 1
    for (let i = x - limit + 1; i <= x + limit; i++) {
      answer.push(i);
    }
  }

  return answer;
}