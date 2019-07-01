/**
* Sum Array of numbers
* [1,2,3,4,5] -> 15
*/
/**
 * Note:
 * a = accumulator
 * b = current value
 * the zero at the end is the initial value
 */
const arrSum = arr => arr.reduce((a,b) => a + b, 0);
//expanded
arrSum = function(arr){
  return arr.reduce(function(a,b){
    return a+b;
  },0);
};
