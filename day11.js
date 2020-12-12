function avoidObstacles(nums) {
  //  write code here.
  nums.sort((a, b) => a - b);
  let step = 2;
  let testArr = [];
  let isTouchObstacles = true;

  while (isTouchObstacles) {
    for (let i = step; i < nums[nums.length - 1]; i += step) {
      testArr.push(i);
    }
    let isContain = testArr.some((testNum) => nums.includes(testNum));

    if (isContain) {
      step++;
      testArr = [];
    } else {
      isTouchObstacles = false;
    }
  }
  return step;
  // [2, 4, 6, 8]
  // [3, 5, 6, 7, 9]
}
