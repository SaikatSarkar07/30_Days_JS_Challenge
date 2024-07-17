// Task 3: Find the maximum of two numbers
function maximum_number(a,b){
    if(a>b){
        return a;
    }else if(a===b){
        return "Both are same number";
    }else{
        return b;
    }
}
console.log(maximum_number(7,9));
console.log(maximum_number(8,5));
console.log(maximum_number(4,4));


// Task 4: Concatenate two strings and return the result
function conatenation(s1 , s2){
    return s1 + s2;
}
console.log(conatenation("Chai","Code"));