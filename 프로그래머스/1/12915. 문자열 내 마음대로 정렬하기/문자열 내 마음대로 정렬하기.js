// 오름차순 정렬
// .sort((a, b) => a > b ? 1 : -1);
function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    // 각 문자열의 n번째 인덱스를 비교해서
    if (a[n] > b[n]) return 1;
    if (b[n] > a[n]) return -1;

    // 만약에 n번째 인덱스가 같으면 사전식으로 비교
    if (a > b) return 1;
    if (b > a) return -1;

    return 0;
  });

  return answer;
}
