function arrayMaximalAdjacentDifference(nums) {
  //  write code here.
  let maxDifference = 0;

  if (nums.length === 0) {
    return 0;
  }
  nums.forEach((num, index) => {
    let nextIndex = index + 1;
    let touchLast = nextIndex >= nums.length ? true : false;
    if (!touchLast) {
      let temp = Math.abs(num - nums[nextIndex]);
      if (temp > maxDifference) {
        maxDifference = temp;
      }
    }
  });
  return maxDifference;
}
