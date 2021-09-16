const factorialNo = () => {
  let fact = 1;
  let number = 5;
  let i;
  for (i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log("Factorial Number=", fact);
};
factorialNo();
