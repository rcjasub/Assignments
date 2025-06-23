function setUnionOfAnyAmountOfSets(...args) {
  let p = new Set();
  for(let arr of args)
  {
    for(let val of arr){
      p.add(val);
    }
  }
  return [...p];
}


console.log(setUnionOfAnyAmountOfSets([1,2,3], [4,5,6]));

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;