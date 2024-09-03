let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
  let n = nums.length;
  let l = 0,
    r = 1;
  while (r < n) {
    if (nums[l] == nums[r]) {
      nums[r] = "_";
      r++;
    } else {
      l = r;
      r++;
    }
  }
  l = 0;
  r = 0;
  for (let i = 0; i < n; i++) {
    if (nums[i] == "_") {
      for (let j = i + 1; j < n; j++) {
        if (nums[j] != "_") {
          nums[i] = nums[j];
          nums[j] = "_";
          break;
        }
      }
    }
  }
  return nums.filter((item) => item != "_").length;
};

var removeDuplicates2 = function (nums) {
  let arr = [...new Set(nums)];

  for (let i = 0; i < nums.length; i++) {
    typeof arr[i] === "number" ? (nums[i] = arr[i]) : (nums[i] = "_");
  }
  return arr.length;
};
var removeDuplicates3 = function (nums) {
  let n = nums.length;
  nums.splice(0, nums.length, ...new Set(nums));

  n = n - nums.length;
  for (let i = 0; i < n; i++) {
    nums.push("_");
  }

  return nums.length - n;
};
var removeDuplicates4 = function (nums) {
  let n = nums.length;
  let l = 0;
  r = 0;
  while (r < n) {
    if (nums[l] !== nums[r]) {
      nums[l + 1] = nums[r];
      l++;
    }
    r++;
  }
  for (let i = l + 1; i < nums.length; i++) {
    nums[i] = "_";
  }

  return l + 1;
};
console.log(removeDuplicates4(nums));
console.log(nums);
