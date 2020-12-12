function chunkyMonkey(values, size) {
  //  write code here.
  if (size > values.length) {
    return values;
  } else if (size <= 0) {
    return values;
  }

  let firstArr = values.slice(0, size);
  let secondArr = values.slice(size);

  let returnArr = [];
  returnArr.push(firstArr);
  returnArr.push(secondArr);

  return returnArr;
}
