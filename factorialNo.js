const factorialNo = () => {
  let fact = 1;
  let number = 4;
  //   let i;
  for (let i = 1; i <= number; i++) {
    fact = fact * i;
  }
  console.log("Factorial Number=", fact);
};
factorialNo();
