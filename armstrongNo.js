const func = () => {
  let n = 153;
  let r;
  let sum = 0;
  let temp = n;
  console.log("Number Is", temp);
  while (n > 0) {
    r = n % 10;
    sum = sum + r * r * r;
    n = n / 10;
  }

  if (temp == sum) {
    console.log("The Number Is Armstrong Number");
  } else {
    console.log("The Number Is Not An Armstrong Number");
  }
};
func();
