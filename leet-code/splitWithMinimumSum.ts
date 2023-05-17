/*
Given a positive integer num, split it into two 
non-negative integers num1 and num2 such that:

The concatenation of num1 and num2 is a permutation of num.
In other words, the sum of the number of occurrences of 
each digit in num1 and num2 is equal to the number of 
occurrences of that digit in num.
num1 and num2 can contain leading zeros.
Return the minimum possible sum of num1 and num2.

Notes:

It is guaranteed that num does not contain any leading zeros.
The order of occurrence of the digits in num1 and num2 may 
differ from the order of occurrence of num.

TOPIC ==>> SORTING

EXAMPLES:

Input: num = 4325 ==> 2345
- Kita mesti pecah si number nya ini jadi 2 bagian
num 1 => 43 num 2 => 25 TOTAL SUM => 68 (GA VALID) 
num 1 => 45 num 2 => 32 TOTAL SUM => 77 (GA VALID) 
num 1 => 24 num 2 => 35 TOTAL SUM => 59
Output: 59
Explanation: We can split 4325 so that num1 is 24 and num2 is 35,
giving a sum of 59. We can prove that 59 is indeed the minimal 
possible sum.


Input: num = 687
Output: 75
Explanation: We can split 687 so that num1 is 68 and num2 is 7,
which would give an optimal sum of 75.

PSEUDO CODE:
4325

- Mengurutkan number  => 2345
- Pecah number nya jadi 2 bagian
Gimana kita mecah tapi menghasilkan penjumlahan yg minimal?
num1 is 24 and num2 is 35
2345
2435
Kalo dia tuh angka genap => Sorting dari terkecil ke yang terbesar
Kalo dia tuh angka ganjil => Sorting dari terbesar ke yang terkecil
24 + 35 => 59
25 + 34 => 59
    - 
*/

function splitWithMinimumSum(num: number): number {
  const arrayNum = num
    .toString()
    .split("")
    .sort((a, b) => Number(a) - Number(b));

  let num1 = "";
  let num2 = "";

  arrayNum.forEach((num, index) => {
    if (index % 2 == 0) {
      num1 += num;
    } else {
      num2 += num;
    }
  });

  return Number(num1) + Number(num2);
}

// Kalo pake index => 588889
// Kalo pake num => 2444444479
console.log(splitWithMinimumSum(2344467));
