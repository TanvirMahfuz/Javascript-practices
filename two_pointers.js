function noConsecutive(input) {
  let ans = "";
  let i = 0,
    j = i + 1;
  while (i < input.length) {
    if (input[i] == input[j]) {
      j++;
    } else {
      ans += input[i];
      i = j;
    }
  }
  return ans;
}
function main(input) {
  let ans = "";
  let i = 0,
    j = i + 1;
  while (i < input.length) {
    if (input[i] == input[j]) {
      j++;
    } else {
      ans += input[i];
      i = j;
    }
  }
  return ans;
}
function noDuplicate(input) {
  console.log([...new Set(input.split(""))].join(""));
}
noDuplicate("aabccba");
