function solution(nums) {
  let diff = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    if (diff.includes(nums[i])) continue;
    else if (diff.length < nums.length / 2) diff.push(nums[i]);
  }

  return diff.length;
}