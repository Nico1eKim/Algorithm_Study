function solution(numbers, k) {
  let answer = 1; // 던지는 사람의 번호

  // 마지막으로 공을 던지는 사람은 k-1번
  for (let i = 0; i < k - 1; i++) {
    answer += 2; // 옆 사람을 건너 뜀

    // 마지막 번호를 넘어가면 처음으로 돌아가기
    if (answer > numbers.length) {
      answer -= numbers.length;
    }
  }

  return answer;
}
