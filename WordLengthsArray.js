/**
 * Convert array of strings to an array of string lengths
 * ["the","quick","brown","fox"] -> [3,5,5,3]
 */
 function wordLengths(arr){
   return arr.map(word => word.length);
 }
 //Alt
 const wordLength = arr => arr.map(word => word.length);
 console.log(wordLength(words));
 
