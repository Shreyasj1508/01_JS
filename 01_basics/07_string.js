const namee = "shreyas"
const score = 50

//console.log(name +  score  + " value");
// not preferable
//
//console.log(`hello my name is ${namee} and score is ${score}`);
// string interpolation
//
//
// another way of string declaration !!!!
let s = new String('shreyas')
//console.log(s);
// console.log(s[3]);
// console.log(s.__proto__);
//
//
//
name = "shreyasNaman"
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name);
//
//
// console.log(name.charAt(6));
// console.log(name.charAt(5));
// find char at particular index//
//
// console.log(name.indexOf('r'));
// index of char
//
//
//
//console.log(name);
// const newString = name.substring(0,7)
// console.log(newString);
//
// slice
// const anotherString = name.slice(-4,-1)
// console.log(anotherString);
//
//
// trim -> remove extra spaces , only for white spaces !!
const string2 = "        NAMAN     "
console.log(string2);
console.log(string2.trim());
//
//
///
// replace
const url = "Shreyasnaman/shre/shreyas@@jaiswal"
console.log(url.replace('@','-'))
//  includes ->return true or false
//
// console.log(url.includes('shreyas'))
// 
//
//
// name2 = "Narendra Damodar Das Modi Ji"
// console.log(name2.split(' '));
//
//
//
//
 // MDN
function splitString(stringToSplit, separator) {
    const arrayOfStrings = stringToSplit.split(separator);
  
    console.log("The original string is:", stringToSplit);
    console.log("The separator is:", separator);
    console.log(
      "The array has",
      arrayOfStrings.length,
      "elements:",
      arrayOfStrings.join(" / "),
    );
  }
  
  const tempestString = "Oh brave new world that has such people in it.";
  const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
  
  const space = " ";
  const comma = ",";
  
  splitString(tempestString, space);
  splitString(tempestString);
  splitString(monthString, comma);
  