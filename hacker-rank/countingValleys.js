/*
A valley is a sequence of consecutive steps below sea level, 
starting with a step down from sea level and ending with a step up to sea level

Input ==>
    8
    UDDDUDUU

Output ==> 1

_/\      _
   \    /
    \/\/
*/
function countingValleys(steps, path) {
  // Write your code here
  let valley = 0;
  let level = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] == "D") {
      level--;
    } else {
      if (level == -1) {
        valley++;
      }
      level++;
    }
  }

  return valley;
}
/*
_
 \    / \        / 
  \ /    \ / \ /
*/

console.log(countingValleys(12, "DDUUDDUDUUUD"));
