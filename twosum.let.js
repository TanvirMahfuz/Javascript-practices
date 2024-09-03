function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;
  while (l <= r) {
    // Changed from l < r to l <= r
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}
var twoSum = function (nums, target) {
  let n = nums.length;
  let originalNums = [...nums]; // Copy original nums for index retrieval
  nums.sort((a, b) => a - b); // Sort the array

  for (let i = 0; i < n; i++) {
    let complement = target - nums[i];
    let j = binarySearch(nums, complement);

    if (j != -1 && i != j) {
      // Get the original indices
      let index1 = originalNums.indexOf(nums[i]);
      let index2 = originalNums.indexOf(nums[j], index1 + 1); // Avoid getting the same index twice
      return [index1, index2];
    }
  }
  return -1;
};

console.log(twoSum([3, 3, 3], 6)); // Expected Output: [1, 2]
