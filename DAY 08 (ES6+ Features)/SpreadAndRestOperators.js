// Task 5: Use the spread operator to create a  new array that includes all elements of an existing array plus additional element, sum them.
const a = [1,2,3,4,5,6,7,8];
console.log("Original Array: ",a);
const arr = [...a,9,10];
console.log("New Array: ",arr);
console.log(arr.reduce((acc, currentvalue) => acc+currentvalue,0));

// Task 6: Use the rest operator in a function to accept any arbitary number of arguments and sum them.
function add(...nums){
    return nums.reduce((accumuator, currentvalue) => accumuator+currentvalue,0);
}
console.log(add(10,20,30,40));