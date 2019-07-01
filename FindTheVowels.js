// findVowels("Hello") === 2
function findVowels(s){
  const vowels = ["a","e","i","o","u"];
  let count = 0;
  for(let char of s.toLowerCase()){
    if(vowels.includes(char)){
      count++;
    }
  }
  return count;
}
/**
 * Alternate
 * Find Vowels with Regex
 * Regex -> /[aeiou]/gi
 * i -> case insensitive
 */
 function findVowelsRegex(s){
   const matched = s.match(/[aeiou]/gi);
   return matched ? matched.length : 0;
   //if '.match()' finds no matches, it returns null, so we have to account for that and return zero instead
 }
