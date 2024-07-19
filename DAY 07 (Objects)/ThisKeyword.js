// Task 7: Add a method to the book object that uses 'this' keyword to return a string with the book's title and year
const Books = {
    Title : "One Of Us Is Lying",
    Author: "Karen McManus",
    Year : 2017,
    getdata:function(){
        return `${this.Title} published on ${this.Year}`
    }
};
console.log(Books.getdata());