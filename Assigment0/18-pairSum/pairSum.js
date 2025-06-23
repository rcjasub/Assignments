function pairSum(nums, target) {
   let needed = 0;
   let pair = new Set();
   for(let num of nums){
      needed = target - num;
       if(pair.has(needed))
       {
        return true;
       }
       else{
        pair.add(num);
       }
   }
   return false;
}

console.log(pairSum([2,3,4,1], 5));

// Do not edit this line;
module.exports = pairSum;