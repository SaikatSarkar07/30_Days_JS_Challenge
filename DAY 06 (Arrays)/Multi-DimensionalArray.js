// Task 12: Create a two-dimensional array (matrix)
const arr = [[1,2,3,],[4,5,6]];
for (let index = 0; index < arr.length; index++){
    console.log(arr[index]);
}

// Task 13: Access and log specific element from the two dimensional array
const myarr = [[1,2,3],[4,5,6],[7,8,9]];
for(let i=0;i<myarr.length;i++){
    for(let j=0;j<myarr.length;j++){
        if(myarr[i][j]%2===0){
            console.log(myarr[i][j]);
        }
    }
}