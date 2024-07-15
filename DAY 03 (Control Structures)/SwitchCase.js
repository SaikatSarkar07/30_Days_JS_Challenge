//Task 4: Determine the day of the week based on a number (1-7)
let n = 4;
switch(n){
    case 1: console.log("Sunday");
            break;
    case 2: console.log("Monday");
            break;
    case 3: console.log("Tuesday");
            break;
    case 4: console.log("Wednesday");
            break;
    case 5: console.log("Thursday");
            break;
    case 6: console.log("Friday");
            break;
    case 7: console.log("Saturday");
            break;
    default:
            console.log("Invalid Input. Please enter a number between 1 to 7.");
}

//Task 5: Assign the grades ('A','B','C','D','F') based on their score
let marks = 96;
switch(true){
    case(marks>=90): console.log("A");
                    break;
    case(marks>=80): console.log("B");
                    break;
    case(marks>=70): console.log("C");
                    break;
    case(marks>=60): console.log("D");
                    break;
    case(marks>=40): console.log("F");
                    break;
    default: console.log("Failed to assign the Grade.");
}