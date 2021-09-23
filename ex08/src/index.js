// Only change code below this line

function myMutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  for (var i = 0; i < arr.length; i++) {
    if (arr[0].indexOf(arr[1][i]) < 0) {
      return false;
    }
  }
  return true;
}
// Only change code above this line

console.log(myMutation(["Noel", "Ole"])); // Change this line
module.exports = myMutation;
