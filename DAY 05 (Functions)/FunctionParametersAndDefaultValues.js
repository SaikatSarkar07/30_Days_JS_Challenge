// Task 7: Take two parameters and return their product. Provide a default value for the second parameter.
function product_of_two_numbers(a,b=2){
    return a*b;
}
console.log(product_of_two_numbers(5,8)); //40
console.log(product_of_two_numbers(7)); //14

// Task 8: Take a person's name and age and return a greeting message. Provide the default value for age.
function greeting_message(name, age=16){
    return "Congratulation "+name+" on becoming "+age+" years of age. You are now one step closer to your death.";
}
console.log(greeting_message("TOM",25));
console.log(greeting_message("PAUL"));