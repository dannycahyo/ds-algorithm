/*
[ 
    [1,1,1],
    [1,1,1],
    [1,1,1]
]

Hitung jumlah isi matrix yang diagonal kanan dan kiri 
Terus yang tengah dihitung 1 kali aja

// Pseudo Code
Penjumlahan yang pertama 
- array 0 => index ke 0
- array 1 => index ke 1
- array 2 => index ke 2

Penjumlahan yang kedua 
- array 0 => index ke 2
- array 1 => index ke 1 // Ini tuh gaperlu dihitung
- array 2 => index ke 0

Notes* 
Index ke 2 tuh cuma perlu dihitung sekali
*/

function maxNumberOfMatrics(nums) {
  let result = 0;
  let length = nums.length - 1;
  //   const middle = ~~(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j || i + j === length) {
        result += nums[i][j];
      }

      //   if (i + j === length) {
      //     if (!(i === middle - 1 && j === middle - 1)) {
      //       result += nums[i][j];
      //     }
      //   }
    }
  }

  return result;
}

// Time Complexity => O(N2)
// Space Complexity => O(1)

console.log(
  maxNumberOfMatrics([
    [3, 1, 1, 4],
    [1, 4, 1, 4],
    [1, 4, 1, 4],
    [1, 4, 1, 4],
  ])
);

/**
  | Scanning 
  | BFS
  | Sliding Window
  | Two pointer
  | Montonic Stack
  | SubArray
  | DFS => Array
  4. Fast and slow => LinkedList
  5. Recursion => Enak buat Tree
  7. Back Tracking => Enak buat Tree
*/
