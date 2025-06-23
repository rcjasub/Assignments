function fizzBuzz(start, end) {
  const result = [];

  for (let i = start; i <= end; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz(1, 15)); 
// Do not edit this line;
module.exports = fizzBuzz;