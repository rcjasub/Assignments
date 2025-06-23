class MySolution {
  constructor() {
    this.flag = false; // optional
  }

  binarySearch(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        return true;
      }

      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return false;
  }
}

let anw = new MySolution();

console.log(anw.binarySearch([1,2,3,4,5], 2));
// Output: true

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
