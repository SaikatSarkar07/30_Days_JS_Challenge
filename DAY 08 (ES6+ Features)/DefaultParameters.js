// Task 7: Write a function that takes two parameters and return their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function product(nums1,nums2=1){
    return nums1 * nums2;
}
console.log(product(4,5));
console.log(product(6));