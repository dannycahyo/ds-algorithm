/*



You are given a string s consisting only of letters 'a' and 'b'. 
In a single step you can remove one palindromic subsequence from s.



A string is a subsequence of a given string if it is generated 
by deleting some characters of a given string without changing 
its order. Note that a subsequence does not necessarily need to be contiguous.

A string is called palindrome if is one that reads 
the same backward as well as forward.

PALINDROME EXAMPLES
“civic” ==> "civic"
“madam”  => "madam"
“radar” => "radar"


Return the minimum number of steps to make 
the given string empty.

Cara untuk membuat string nya jadi empty
Kita perlu cek apakah sebuah string atau substring itu palindrome

You are given a string s consisting only of 
letters 'a' and 'b'. 

EXAMPLE =>
Input: s = "ababa"
 => s = ""
Output: 1
Explanation: s is already a palindrome, 
so its entirety can be removed in a single step.

Input: s = "abb"
Output: 2
Explanation: "abb" -> "bb" -> "". 
Remove palindromic subsequence "a" then "bb".

Input: s = "baabb"
Output: 2
Explanation: "baabb" -> "b" -> "". 
Remove palindromic subsequence "baab" then "b".

*/

function removePalindromicSubSequence(s: string): number {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return 2;
    }
  }

  return 1;
}

console.log(removePalindromicSubSequence("ababa"));
