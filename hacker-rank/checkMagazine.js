/*
6 4
give me one grand today night
give one grand today

Yes

6 5
two times three is not four
two times two is four

No

Negative 
- If the word doesn't exist in other words
- If the word appears two times while in other words just one
*/

function checkMagazine(magazine, note) {
  const hashMap = new Map();

  let results = [];
  let isDouble = false;

  for (let i = 0; i < magazine.length; i++) {
    hashMap.set(magazine[i]);
  }

  for (let i = 0; i < note.length; i++) {
    if (hashMap.has(note[i])) {
      if (hashMap.get(note[i]) === "valid") {
        isDouble = true;
      }
      hashMap.set(note[i], "valid");

      results.push("YES");
    } else {
      results.push("NO");
    }
  }

  if (isDouble) return "NO";

  return results.some((value) => value === "NO") ? "NO" : "YES";
}

console.log(
  checkMagazine("ive got a lovely bunch of coconuts", "ive got some coconuts")
);

function checkMagazine2(magazine, note) {
  let result = "";

  for (let i = 0; i < note.length; i++) {
    let currentNoteWord = note[i];
    let magazineIndex = magazine.indexOf(currentNoteWord);
    magazineIndex;

    let wordCheck = magazine.includes(currentNoteWord);
    wordCheck;

    let caseCheck = currentNoteWord.localeCompare(magazine[magazineIndex], {
      sensitivity: "case",
    });

    if (wordCheck && caseCheck === 0) {
      magazine.splice(magazineIndex, 1);
      result = "Yes";
    } else {
      result = "No";
      break;
    }
  }

  console.log(result);
}

checkMagazine2(
  ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"],
  ["ive", "got", "some", "coconuts"]
);
