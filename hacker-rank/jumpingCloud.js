/*
- Init cloudCount variable
- Looping through the array 
- If the next number is 1 then do noth
- If the next number is not 1 then we can increment the cloudCount variable

*/

// function jumpingOnClouds(c) {
//   let cloudCount = 0;
//   c.forEach((cloud, i) => {
//     if (c[i + 1] !== 1) {
//       cloudCount++;
//     } else {
//       cloudCount--;
//     }
//   });

//   return cloudCount;
// }

function jumpingOnClouds(c) {
  let jump = 0;
  let length = c.length;

  c.reduce((prev, curr, index) => {
    let r = prev + 1;

    if (r === 2) {
      jump += 1;
      curr === 1 ? (r = 1) : (r = 0);
    } else if (r === 1 && index === length - 1) {
      jump += 1;
    }

    return r;
  });

  return jump;
}

function jumpingOnClouds2(c) {
  let jumpCount = 0;
  let cloudsLength = c.length;

  for (let i = 0; i < cloudsLength; ) {
    if (cloudsLength > i + 2 && c[i + 2] == 0) {
      i = i + 2;
    } else {
      i = i + 1;
    }

    jumpCount++;
  }
  return jumpCount - 1;
}

const firstCase = [0, 0, 0, 0, 1, 0];

console.log(jumpingOnClouds2(firstCase));
