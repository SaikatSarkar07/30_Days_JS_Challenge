// Task 5: Create a nested Object representing a library with properties like name and books(an array of book objects).
const Library = {
    Names: "Saikat",
    names: {
        Title: ["Book1","Book2","book3","Book4"],
        Author: ["author1","author2","author3","author4"],
        year : 2022
    }
}
// console.log(Library);

// Task 6: Access and log the name of the library and the title of all the books in the library.
console.log(Library.Names, Library.names.Title);