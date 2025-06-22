class MySolution {
  countDownSum(num) {
    if(num === 1)
    {
      return 1;
    }else{

      return num + this.countDownSum(num -1);
    }
  }
}


// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;

let studentInstance = new StudentSolution();
console.log(studentInstance.countDownSum(5)); // ➡ 15