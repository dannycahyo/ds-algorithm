const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const hashMap = new Map();

  for (const char of s) {
    if (hashMap.get(char)) {
      hashMap.set(char, hashMap.get(char) + 1);
    } else {
      hashMap.set(char, 1);
    }
  }

  for (const char of t) {
    if (hashMap.get(char)) {
      hashMap.set(char, hashMap.get(char) - 1);
    } else {
      return false;
    }
  }

  return true;
};

console.log(validAnagram("anagram", "nagaram"));
