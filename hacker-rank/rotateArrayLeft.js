/*
A left rotation operation on an array shifts each of the array's elements  unit to the left. 
For example, if  left rotations are performed on array , then the array would become . 
Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

Example:

a = 1 2 3 4 5 
d = 2

Output:
[3, 4, 5, 1, 2]
*/

function rotLeft(a, d) {
  const result = [...a];

  for (let i = 0; i < d; i++) {
    result.push(result.shift());
  }

  return result;
}

console.log(rotLeft([1, 2, 3, 4, 5], 2));

function rotLeft2(a, d) {
  const splice = a.splice(d % a.length);
  return [...splice, ...a];
}

console.log(rotLeft2([1, 2, 3, 4, 5], 2));
