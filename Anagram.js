/**
 * anagram('finder', 'friend') === true
 */
function anagram(str1,str2){
   const sortedStr = s => s.split("").sort().join("");
   return sortedStr(str1) === sortedStr(str2);
}
/**
 * Full sanitization
 * Regex: /[^a-z/d]/g
 * [^ ] - negated set
 * a-z  - Characters (a-z)
 * \d   - Digits (0-9)
 */
function anagramSanitized(str1,str2){
   const sanitizedStr = s => s.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("");
   return sanitizedStr(str1) === sanitizedStr(str2);
}
