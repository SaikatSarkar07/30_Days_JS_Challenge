// Task 8: Use a 'for...in' loop to iterate over the properties of the book object.
const Books = {
    Title : "One Of Us Is Lying",
    Author: "Karen McManus",
    Year : 2017
};

for (const iteration in Books) {
    console.log(Books[iteration]);
}

// Task 9: Use 'Object.keys' and 'Object.values' methods to log all keys and values.
console.log(Object.keys(Books));
console.log(Object.values(Books));