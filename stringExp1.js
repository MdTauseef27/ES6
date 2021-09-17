const stringExp = () => {
  let str = "Apple,Banana,Kiwi";
  let strname = "Please Visit Microsoft";
  let str1 = str.slice(6, 12); // this method extacts the part of sting and return the extracted part in string
  let str2 = str.substring(13, 17); //same as slice but not accept negative values
  let str3 = strname.replace("Microsoft", "Google"); //it will replace microsoft to google
  console.log(str1);
  console.log(str2);
  console.log(str3);
};
stringExp();
