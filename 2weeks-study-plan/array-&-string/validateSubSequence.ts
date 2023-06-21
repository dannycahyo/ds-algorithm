/*

  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers 

  Array
   = [5, 1, 22, 25, 6, -1, 8, 10]
  
  Sequence 
   = [1, 6, -1, 10]
*/

function validateSubSequence(nums: number[], sequence: number[]): boolean {
  let seqIdx = 0;

  for (const num of nums) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === num) {
      seqIdx++;
    }
  }

  return seqIdx === sequence.length;
}

function validateSubSequence2(nums: number[], sequence: number[]): boolean {
  let seqIdx = 0;
  let numsIdx = 0;

  while (numsIdx < nums.length && seqIdx < sequence.length) {
    if (nums[numsIdx] === sequence[seqIdx]) {
      seqIdx++;
    }
    numsIdx++;
  }

  return seqIdx === sequence.length;
}

console.log(validateSubSequence2([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
