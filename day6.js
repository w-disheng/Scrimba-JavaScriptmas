function countVowelConsonant(str) {
  // write code here
  if (str.length === 0) {
    return 0;
  }
  let vowel = 1;
  let vowels = ["a", "e", "i", "o", "u"];
  let consonant = 2;
  let sum = 0;
  let strArr = str.split("");
  const strArrNum = strArr.map((a) => {
    if (vowels.includes(a)) {
      return vowel;
    } else {
      return consonant;
    }
  });

  sum = strArrNum.reduce((a, b) => {
    return a + b;
  }, sum);

  return sum;
}
