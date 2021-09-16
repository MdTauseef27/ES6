const funct1 = () => {
  let n = 999;
  let m;
  let sum = 0;
  while (n > 0) {
    m = n % 10;
    sum = sum + m;
    n = Math.floor(n / 10);
  }
  console.log("Sum Of Digit", parseInt(sum));
};
funct1();
