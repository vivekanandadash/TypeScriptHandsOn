var num1 = 10;
var num2 = 20;
var num3 = 30;
var total = num1 + num2 + num3;
console.log(total);
//to use octal ,hexadecimal and binary value we use 0o,0h,0b respectevily
var oct = 32769;
var hexa = 0x001;
var binary = 0x00001;
console.log(oct + binary);
//  converting from string to number 
//way1
var item1 = 80;
var item2 = "40";
console.log(item1 + item2); //8040 (here confusion occur)
var item2ConvertedToString = Number(item2); //here use Number() function for converting
console.log(item1 + item2ConvertedToString); //120
//  way2
var item2ConvertedToStrings = +item2; // Unary + operator says "convert whatever comes after me into a number." So +"40" becomes 40
console.log(item1 + item2ConvertedToStrings);
//way3
console.log(item1 + +item2); //here same type converted item2 string to number
//inference
var data = 40;
data = 20;
// data="vivek" //as wen store number before so it says you cant add string
// here we use pipeline two give specific datatype mean we can give  number and string in num varriable 
var num = 20;
num = "vivek";
console.log(num);
//decimal with number data typr
var dig = 20.42;
var dig1 = 29.42;
var sum = dig + dig1;
console.log(sum);
