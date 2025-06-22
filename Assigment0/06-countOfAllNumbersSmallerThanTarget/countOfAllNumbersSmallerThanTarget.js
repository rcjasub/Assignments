function countOfAllNumbersSmallerThanTarget(nums, target) {
  let count = 0;
  for(let i = 0; i < nums.length; i++){
    if(typeof nums[i] === "number" && nums[i] < target){
      count++;
    } 
  }

  return count;
}

console.log(countOfAllNumbersSmallerThanTarget([1, 2, 3, 4, 5], 3)); // Output: 2

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;