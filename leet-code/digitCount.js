/*

You are given a 0-indexed string num of 
length n consisting of digits.

Return true if for every index i in the range 0 <= i < n, 
the digit i occurs num[i] times in num, otherwise return false.

Example: 1
Input: num = "1210"
Output: true
Explanation:
num[0] = '1'. The digit 0 occurs once in num.
num[1] = '2'. The digit 1 occurs twice in num.
num[2] = '1'. The digit 2 occurs once in num.
num[3] = '0'. The digit 3 occurs zero times in num.
The condition holds true for every index in "1210", so return true.

Example: 2
Input: num = "030"
Output: false
Explanation:
num[0] = '0'. The digit 0 should occur zero times, but actually occurs twice in num.
num[1] = '3'. The digit 1 should occur three times, but actually occurs zero times in num.
num[2] = '0'. The digit 2 occurs zero times in num.
The indices 0 and 1 both violate the condition, so return false.

Psuedo Code:
- Map the the number
  Input: num = "1210"
  { 1: 2, 2: 1, 0: 1 }
- Looping ke string nya
  - Dapeting value dari key hash map nya berdasarkan index string nya
  - Bandingkan value tersebut dengan string di perulang nya
  - Kalo semisal ga sama, kita bisa return false aja.
*/

/* SOAL ALGORITMA DAN STRUKTUR DATA NYA
Input: num = "1210"
Output: true
Explanation:
num[0] = '1'. The digit 0 occurs once in num.
num[1] = '2'. The digit 1 occurs twice in num.
num[2] = '1'. The digit 2 occurs once in num.
num[3] = '0'. The digit 3 occurs zero times in num.
The condition holds true for every index in "1210", so return true.
*/

function digitCount(num) {
  const map = new Map();

  for (let i = 0; i < num.length; i++) {
    if (map.has(num[i])) {
      map.set(num[i], map.get(num[i]) + 1);
    } else {
      map.set(num[i], 1);
    }
  }

  let mapValue;
  for (let i = 0; i < num.length; i++) {
    mapValue = map.get(`${i}`) ?? 0;
    const numValue = Number(num[i]);

    if (mapValue !== numValue) {
      return false;
    }
  }

  return true;
}

console.log(digitCount("4210100"), "INI HASILNYA");
// 0 === 4
// 1 === 2
// 3 === 0
// 4 === 1
