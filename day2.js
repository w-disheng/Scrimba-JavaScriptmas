function depositProfit(deposit, rate, threshold) {
  //  write code here.
  let totalDeposit = deposit;
  let result = 0;

  while (totalDeposit < threshold) {
    result++;
    console.log(result);
    totalDeposit += totalDeposit * (rate / 100);
  }
  return result;
}
