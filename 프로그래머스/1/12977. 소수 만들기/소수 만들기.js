function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k]; // 주어진 숫자 중 3개 더하기

        let count = 0; // 약수의 개수
        for (let l = 1; l <= sum; l++) { // 소수 판별
          if (sum % l === 0) count++;
        }

        if (count === 2) answer++;
      }
    }
  }

  return answer;
}
