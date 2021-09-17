const stringExp = () => {
  let str = "Apple,Banana,Kiwi";
  let str1 = str.slice(6, 12); // this method extacts the part of sting and return the extracted part in string
  let str2 = str.substring(13, 17); //same as slice but not accept negative values
  console.log(str1);
  console.log(str2);
};
stringExp();
