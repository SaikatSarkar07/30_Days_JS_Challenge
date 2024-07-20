// Task 8: Use enhanced object literals to create an object with methods and properties.
const User = {
    Name : "User1",
    Gender : "Male",
    Age : "30",
    email : "user1@chaiaurcode.com",
    isloggedin : true,
    getuserNameAndEmail(){
        return `Name: ${this.Name}
Email: ${this.email} `
    },
    getAgeAndGender(){
        return `Age: ${this.Age}
Gender: ${this.Gender}`
    }
};
console.log(User.getAgeAndGender());
console.log(User.getuserNameAndEmail());

// Task 9: Create an Object with computed property names based on variables and log the object.
const key1 = "Name";
const value1 = "Saikat";
const key2 = "Age";
const value2 = "18";
const User1 = {
    [key1]: value1,
    [key2]: value2
}
console.log(User1);
