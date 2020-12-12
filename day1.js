function candies(children, candy) {
  //  write code here.
  if (children > candy) {
    return 0;
  } else if (children === 0 || candy === 0) {
    return 0;
  }

  const candiesCanEat = Math.floor(candy / children);

  return candiesCanEat * children;
}
