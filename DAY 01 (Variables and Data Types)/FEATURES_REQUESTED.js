// FIRST FEATURE: Variable Types Console Log
let n = 5;
let s = "'I will do my best to finish this Challege'";
let b = false;
let arr = [5,7,9,6,4];
let USER = {
    Name: "Saikat",
    age: 21,
    country: "India",
    Gender: "Male"
};

console.log(n + " is a " + typeof(n) + " data type");
console.log(s + " is a " + typeof(s) + " data type");
console.log(b + " is a " + typeof(b) + " data type");
if(Array.isArray(arr)){
    console.log(arr + " is an array data type");
}else{
    console.log(arr + " is a " + typeof(arr) + " data type");
}
if(USER instanceof Object){
    console.log(USER.Name+" "+USER.age+" "+USER.country+" "+USER.Gender+ " is an Object Data Type");
}else{
    console.log(USER[key] + " is a " + typeof(USER) + " data type");
}

//SECOND FEATURE: Reassignment Demo

let temp = 35;
console.log(temp);

temp = 41;
console.log(temp);

const toggle = 45;
console.log(toggle);

toggle = 46; //TypeError: Assignment to constant variable is not Possible
console.log(toggle); 
