function titleCaseEdit(title) {
  return title
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

}

console.log(titleCaseEdit("a tale of two cities")); 
// Do not edit this line;
module.exports = titleCaseEdit;