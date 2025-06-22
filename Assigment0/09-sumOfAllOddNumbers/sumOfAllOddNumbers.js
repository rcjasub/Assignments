function sumOfAllOddNumbers(nums) {
   let count = 0;
   for(let i = 0; i < nums.length; i++){
    if(typeof nums[i] === 'number' && nums[i] % 2 !== 0){
      count++;
   }
  }
   return count;
}

console.log(sumOfAllOddNumbers([1, 2, 3, 4, 5, 6])); // Output: 3

// Do not edit this line;
module.exports = sumOfAllOddNumbers;