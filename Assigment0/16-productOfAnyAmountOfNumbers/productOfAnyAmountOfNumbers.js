function productOfAnyAmountOfNumbers(...args) {
 
      let sum = 1;
      for(let vals of args)
      {
        sum *= vals;
      }
      return sum;
}

console.log(productOfAnyAmountOfNumbers(1,2,3));

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;