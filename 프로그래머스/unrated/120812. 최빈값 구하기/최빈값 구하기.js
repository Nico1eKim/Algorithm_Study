// 다른 값이 나오면 배열에 저장해서 플러스 시키기
function solution(array) {
  let answer = [];
  let countObj = {};

  for (let i = 0; i < array.length; i++) {
    if (array[i] in countObj) {
      countObj[array[i]] += 1;
    } else {
      countObj[array[i]] = 1;
    }
  }

  for (let key in countObj) {
    answer.push([parseInt(key), countObj[key]]);
  }

  // 개수 많은 순으로 정렬
  answer.sort((a, b) => b[1] - a[1]);

  if (answer.length > 1 && answer[0][1] === answer[1][1]) return -1;
  return answer[0][0];
}