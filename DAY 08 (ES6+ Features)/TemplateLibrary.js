// Task 1: Use template literals to create a string that includes variables for a person's name and age.
const Name = "Saikat";
const age = 18;
console.log(`My name is ${Name} and my age is ${age}`);

// Create a multi-line string using templates literals.
const multiline = `This is multiline String,
Person's Name: ${Name},
Age : ${age},
We can write across multiple lines
without using escape characters.
Template literals make it easier to include expressions (like my age after two years will be ${18+2})
and variables such as my name ${Name}`
console.log(multiline);