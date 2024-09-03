let nums = [3, 3];
var removeElement = function (nums, val) {
  let l = 0,
    r = nums.length - 1;
  while (l < r) {
    if (nums[l] == val) {
      while (nums[r] == val && l < r) {
        r--;
      }
      let temp = nums[l];
      nums[l] = nums[r];
      nums[r] = temp;
    }
    l++;
  }

  while (nums[nums.length - 1] == val) {
    nums.pop();
  }
  return nums.length;
};

console.log(removeElement(nums, 3));
console.log(nums);
