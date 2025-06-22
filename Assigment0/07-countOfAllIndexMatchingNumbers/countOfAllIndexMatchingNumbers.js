function countOfAllIndexMatchingNumbers(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++){
    if (typeof nums[i] === "number" && nums[i] === i) {
      count++;
    }
  }

  return count;
}

console.log(countOfAllIndexMatchingNumbers([0, 2, 2, 3, 4])); 

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;