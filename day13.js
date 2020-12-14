function extractEachKth(nums, index) {
  //  write code here.
  let temp = [];
  let newNums = nums.filter((num, numIndex) => {
    for (let i = index - 1; i < nums.length; i += index) {
      temp.push(i);
    }
    return temp.every((t) => t !== numIndex);
  });
  return newNums;
}
