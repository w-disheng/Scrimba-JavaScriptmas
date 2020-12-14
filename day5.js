function reverseAString(str) {
  //  write code here.
  let strArr = [];
  let length = str.length - 1;
  for (let i = length; i >= 0; i--) {
    strArr.push(str[i]);
  }
  return strArr.join("");
}
