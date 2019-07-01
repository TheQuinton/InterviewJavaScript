/**
 * Given two arrays, return an array with the matching values with no duplicates
 * arr1 = [1,2,3,4,5,5,5,6,6,6,7,7,7,8]
 * arr2 = [3,3,4,4,5]
 */
 function matchArray(arr1, arr2){
   const arr = arr1.filter(item => arr2.includes(item));
   return [...new Set(arr)];
 }
