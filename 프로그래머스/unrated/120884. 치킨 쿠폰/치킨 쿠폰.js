// 치킨의 수 === 쿠폰의 수
// chicken / 10 -> 서비스(다 더해야 함)
// chicken % 10 -> 남은 치킨의 수(다시 계산할때 더해서 계산)
function solution(chicken) {
  let answer = 0;

  // 서비스를 받을 수 있을 때까지
  while (chicken >= 10) {
    // 소수점 안나오게 Math.floor 사용
    let service = Math.floor(chicken / 10); // 치킨 10마리 당 서비스 1마리

    answer += service; // 리턴해야되는 값은 서비스로 받은 치킨 수

    chicken = service + (chicken % 10); // 새로운 치킨 수는 서비스로 받은 치킨 + 남은 치킨
  }

  return answer;
}