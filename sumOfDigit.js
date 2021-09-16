const funct1 = () => {
  let n = parseInt(111);
  let m;
  let sum = 0;
  while (n > 0) {
    m = n % 10;
    sum = sum + m;
    n = n / 10;
  }
  console.log("Sum Of Digit", sum);
};
funct1();
