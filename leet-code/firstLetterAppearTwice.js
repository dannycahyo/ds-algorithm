const repeatedCharacter = function (s) {
  const hashMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      return s[i];
    } else {
      hashMap.set(s[i], true);
    }
  }
};

console.log(repeatedCharacter("abcdd"));
