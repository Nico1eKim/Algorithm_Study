function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    let index = query[i];

    if (i % 2 === 0) {
      // 짝수 인덱스의 쿼리 -> 뒷부분 자르기
      arr.splice(index + 1, arr.length - (index + 1));
    } else {
      arr.splice(0, index);
    }
  }

  return arr;
}
