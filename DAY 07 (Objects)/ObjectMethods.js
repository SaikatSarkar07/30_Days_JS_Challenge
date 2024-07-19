// Task 3: Add a method to the book object that returns a string with the book's title and author.
const Books = {
    Title : "One Of Us Is Lying",
    Author: "Karen McManus",
    Year : 2017,
    getTitleAndAuthor: function (){
        return `${this.Title} by ${this.Author}`
    },
    youryear:(year)=>{
        return  `${Books.Year = year}`
    }
};
console.log(Books.getTitleAndAuthor());

// Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property
console.log(Books.youryear(2020));