function sumOfMinimumAndMaximum(nums) {
  if (nums.length === 0) {
    return 0; 
  }

  let min = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return min + max;
}

console.log(sumOfMinimumAndMaximum([2, 1, 3, 4, 7])); 

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;