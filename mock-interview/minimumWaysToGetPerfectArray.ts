/*


[1,2,2,3,3,3] << Ini array yang harus di hasilkan (array sempurna), jadi setiap element di dalam array harus sejumlah dengan angkanya.

Misalkan 1 jumlahnya cuman 1, 2 jumlahnya cuman 2.

Kemudian diberikan array misalkan :

[1,2,2,3,3]

Agar array yang diberikan bisa jadi array sempurna itu antara 2:
Hapus angka 3 nya (2x langkah)
Atau
Tambah angka 3 (1 langkah)

Berapa langkah minimum untuk bisa mengubah ke array sempurna ? 

Gitu ya 
*/

function minimumToGetPerfectArray(nums: number[]): number {
  const dicts: Map<number, number> = new Map();

  nums.forEach((num) => {
    dicts.set(num, (dicts.get(num) ?? 0) + 1);
  });

  const minimumWays = Array.from(dicts).map(([value, count]) => {
    const res = Math.min(count, Math.abs(value - count) || value);
    return res === value ? 0 : res;
  });

  return minimumWays.reduce((total, value) => total + value, 0);
}

console.log(minimumToGetPerfectArray([1, 2, 2, 3, 3]));

function minimumToGetPerfectArray2(arr: number[]) {
  let ans = 0;
  let moved_num = 1;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      if (moved_num != arr[i]) {
        const remainder = Math.abs(arr[i] - moved_num);
        ans += moved_num < remainder ? moved_num : remainder;
      }
      moved_num = 1;
    } else {
      moved_num += 1;
    }
  }
  return ans;
}

console.log(minimumToGetPerfectArray([1, 2, 2, 3, 3])); //
