function countOfAllBooleansAndStrings(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++){
    if ( typeof arr[i] === "boolean" || typeof arr[i] === "string"){
      count++;
    }
  }
  return count;
}

console.log(countOfAllBooleansAndStrings([true, false, 42, "hello", true, "world"])); 

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;