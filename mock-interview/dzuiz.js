/*
Given the n number, please print a string with the following pattern:
n = 8
1 * 3 4 * 6 * 8 


// Enable Quokka for debugging
*/

function main(n) {
  let numOfPrev = 0;
  let numUsed = false;
  let needStar = false;

  let output = "";

  for (let i = 1; i <= n; i++) {
    if (needStar) {
      i;
      output += "*";
      needStar = false;
      numOfPrev++;
    } else if (numOfPrev % 2 === 0) {
      i;
      output += `${i}`;
      needStar = true;
    } else {
      if (numUsed) {
        i;
        output += `${i}`;
        needStar = true;
        numUsed = false;
      } else {
        i;
        output += `${i}`;
        numUsed = true;
      }
    }
  }

  return output;
}

function main2(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 2 || i % 5 === 0) {
      output += "*";
    } else {
      output += `${i}`;
    }
  }

  return output;
}

console.log(main2(10));
