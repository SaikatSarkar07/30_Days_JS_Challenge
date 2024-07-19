// Task 07: Use the map method to create a new array where each number is doubled.
const arr=[1,2,3,4,5,6];
console.log(arr);
const map1 = arr.map((x) => x*2);
console.log(map1);

// // Task 08: Use the filter method to create a new array with only even number.
let result = arr.filter(arr => arr %2===0)
console.log(result);

// Task 09: Use the reduce method to calculate the sum of all the numbers in the array.
const myarr=[1,2,3,4,5]
let totalnum = myarr.reduce( (acc ,curr) => acc+curr,0);
console.log(totalnum);