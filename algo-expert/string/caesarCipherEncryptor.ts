/*
Caesar Cipher Encryptor
Given a non-empty string of lowercase letters and a non-negative integer representing a key, 
write a function that returns a new string obtained by shifting every letter in the input string by k positions in the alphabet, where k is the key.

Note that letters should "wrap" around the alphabet; in other words, the letter z shifted by one returns the letter a.

Sample Input
string = "xyz"
key = 2

Sample Output
"zab"
*/

function caesarCipherEncryptor(string: string, key: number) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const results: string[] = [];

  for (const char of string) {
    const charIdx = alphabet.indexOf(char);
    const newCharIdx = (charIdx + key) % 26;
    results.push(alphabet[newCharIdx]);
  }

  return results.join("");
}

console.log(caesarCipherEncryptor("xyz", 2));
