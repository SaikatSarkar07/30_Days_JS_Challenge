//Task 6: Use a Ternary Operator to check if a number is Even or Odd
let number = 41;
console.log((number%2===0) ? "Even Number" : "Odd Number");

//Task 7: Check whether a year is Leap year or not
let year = 2020;
if(year%4 === 0 && year%100 !== 0 || year%400 === 0){
    console.log(year + " is a Leap Year");
}else{
    console.log(year + " is not a Leap Year");
}
// Completed Day 3