/**
 * Write a function that combines two functions into a third function
 * so that:
 * fn3 === combine(fn2,fn1)
 * fn3(x) === fn2(fn1(x))
 */
 function combine(fn2, fn1){
   return function(x){
     return fn2(fn1(x));
   }
 }
