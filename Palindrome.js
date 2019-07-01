function palindrome(s){
  let reverse = s.split("").reverse().join("");
  if(s === reverse){
    return true;
  }
}
