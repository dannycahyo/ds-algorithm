function checkStringPanagram(s) {
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
  }

  return set.size === 26;
}

console.log(checkStringPanagram("thequickbrownfoxjumpsoverthelazydog"));
