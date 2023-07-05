/*







Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

              1
           1     1
        1     2     1
     1     3     3     1
  1     4     6     4     1


Example 1:

Input: rowIndex = 3
Output: [1,3,3,1]

Input: rowIndex = 0
Output: [1]

Input: rowIndex = 1
Output: [1,1]
*/

// DYNAMIC PROGRAMMING ALGORITHM
// APPROACH  => BOTTOM UP (TABULATION)
// APPROACH  => TOP DOWN (MEMOIZATION)

function sumRows(rows: number[]): number[] {
  const result: number[] = [];
  let prefNum = 0;

  for (let i = 0; i < rows.length; i++) {
    const currentSum = prefNum + rows[i];
    result.push(currentSum);
    prefNum = rows[i];
  }

  result.shift();
  return result;
}

function pasCalTriangleII(rowIndex: number): number[] {
  const rows: number[][] = [];
  rows[0] = [1];
  rows[1] = [1, 1];

  for (let i = 2; i <= rowIndex; i++) {
    const newPascal: number[] = sumRows(rows[i - 1]);
    newPascal.unshift(1);
    newPascal.push(1);
    rows[i] = newPascal;
  }

  return rows[rowIndex];
}

console.log(pasCalTriangleII(4));
