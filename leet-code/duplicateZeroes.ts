/*


Given a fixed-length integer array arr,
duplicate each occurrence of zero, 
shifting the remaining elements to the right.

Note that elements beyond the length
of the original array are not written. 
Do the above modifications to the input array
in place and do not return anything.

Duplicate si 0
Array baru nya tuh panjang itu harus 
sama dgn original array

Examples:
Input: arr = [1,0,2,3,0,4,5,0]
Output: [1,0,0,2,3,0,0,4]
Explanation: After calling your function,
the input array is modified to: [1,0,0,2,3,0,0,4]

Input: arr = [1,2,3]
Output: [1,2,3]
Explanation: After calling your function, 
the input array is modified to: [1,2,3]

Input: arr = [1,0,2,0,3]
Output: [1, 0, 0, 2, 0]

Pseudo Code:
KITA HARUS GANTI ARRAY NYA SECARA LANGSUNG
- Butuh bikin array baru buat nampung angkat yg terseleksi
- Looping ke array nya
- Kalo semisal angka nya tuh 0
    -  Maka aku bakal push 0 nya 2 kali ke array barunya
- Kalo semisal angka nya bukan 0
    - Maka aku bakal push si angka nya aja, tanpa duplicate
- Kalo semisal index perulangan nya itu sama dengan panjang
  array nya, maka kita bakal stop perulangan nya.
*/

function duplicateZeroes(arr: number[]): number[] {
  const finalArray: number[] = [];
  arr.forEach((num) => {
    if (finalArray.length === arr.length) {
      return;
    } else if (num === 0) {
      if (finalArray.length === arr.length - 1) {
        finalArray.push(num);
      } else {
        finalArray.push(num, 0);
      }
    } else {
      finalArray.push(num);
    }
  });
  return finalArray;
}

function duplicateZeroes2(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }

  console.log(arr);
}

duplicateZeroes2([1, 0, 2, 0, 3]);
