function solution(s) {
  let answer = "";
  let numArr = s.split(" ").map((x) => +x);
  let min = numArr[0];
  let max = numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] <= min) min = numArr[i];
    if (numArr[i] >= max) max = numArr[i];
  }

  answer = `${min} ${max}`;

  return answer;
}
