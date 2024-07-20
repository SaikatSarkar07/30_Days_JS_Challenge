// Task 3: Use array destructing to extract the first and second elements from an arrayof numbers.
let arr = [1,2,3,4,5,6,7,8]
let [first, second] = arr;
console.log(first);
console.log(second);

// Task 4: Use Object destructing to extract the title and author from the book object.
const Book = {
    title : "Harry Potter",
    author: "J.K. Rowling"
}
const {title: t, author: a} = Book;
console.log(`${t} by ${a}`);
