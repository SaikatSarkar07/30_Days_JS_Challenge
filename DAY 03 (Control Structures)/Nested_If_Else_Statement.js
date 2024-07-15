//Task 3: Find the largest of threee numbers using the nested if else
let first = 78;
let second = 99;
let third = 123;

if(first > second){
    if(first > third){
        console.log(first + " is the Largest number");
    }else{
        console.log(third + " is the Largest number");
    }
}else{
    if(second > third){
        console.log(second + " is the Largest number");
    }else{
        console.log(third + " is the Largest number");
    }
}