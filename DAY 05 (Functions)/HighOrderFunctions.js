// Task 9: Make a High Order function that takes a function and number and calls the function that many times.
function repeat(fn , times){
    for(let i=0;i<times;i++){
        fn();
    }
}
function greeting(){
    console.log("Chai Aur Code");
}
repeat(greeting,5);

// Task 10: Make a High Order function that takes two functions and a value applies the first function to the value, and then applies the second function to the result.
function apply_function(fn1, fn2, value){
    const result1 = fn1(value);
    const result2 = fn2(result1);
}
function multiply_Two(a){
    return a*2;
}
function add_six(a){
    return a+6;
}
console.log(apply_function(multiply_Two,add_six,));