/*







Given a positive integer n, 
find the sum of all integers in the range [1, n] 
inclusive that are divisible by 3, 5, or 7.

Return an integer denoting the sum of all 
numbers in the given range satisfying the constraint.

Input: n = 7
Output: 21
Explanation: Numbers in the range [1, 7] 
1, 2, 3, 4, 5, 6, 7
that are divisible by 3, 5, or 7 are 3, 5, 6, 7. 
The sum of these numbers is 21.

Input: n = 10
Output: 40
Explanation: Numbers in the range [1, 10] 
that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9, 10. 
The sum of these numbers is 40.

Input: n = 9
Output: 30
Explanation: Numbers in the range [1, 9] 
that are divisible by 3, 5, or 7 are 3, 5, 6, 7, 9. 
The sum of these numbers is 30.
*/

// Data Structures & Algorithm

/* 
STEP BY STEP

- Init variable totalMultipleSum
- Looping dari 1 sampai n
- Check apakah number nya itu bisa dibagi 3,5,7.
  - Kalo bisa, a
  ku bakal tambahkan dengan totalMultipleSum sebelumnya
*/

function canDivide(num: number): boolean {
  return num % 3 === 0 || num % 5 === 0 || num % 7 === 0;
}

function sumMultiples(n: number): number {
  let totalMultipleSum = 0;

  for (let i = 1; i <= n; i++) {
    if (canDivide(i)) {
      totalMultipleSum += i;
    }
  }

  return totalMultipleSum;
}

console.log(sumMultiples(9));
