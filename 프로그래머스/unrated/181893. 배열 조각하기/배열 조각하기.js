// 짝수 인덱스 -> 뒷부분 버리기
// 홀수 인덱스 -> 앞부분 버리기
function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    let index = query[i];

    if (i % 2 === 0) {
      // 짝수 인덱스의 쿼리 -> 뒷부분 삭제하기
      arr.splice(index + 1);
    } else {
      // 홀수 인덱스의 쿼리 -> 앞부분 삭제하기
      arr.splice(0, index);
    }
  }

  return arr;
}