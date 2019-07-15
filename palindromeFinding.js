/*
 Write a program to check if a given string or a sentence is a palindrome.
 Consider handling special characters appropriately.
 Develop tests for positive, negative and edge case inputs and display your results.

 Ex:
 A Man, A Plan, A Canal-Panama!
 Madam In Eden, I’m Adam
 Do Geese See God?
 $racecaR
 A nut for a jar of tuna.
 Hello World!
*/

const test = 'hgshadfblkjsnlkjfanslkjnMadamInEdenImAdamasdSDAadASAdracecar';

const palindrome = str => str === str.split('').reverse().join('');//assumes lowercase

const getP = str => {
  str = str.toLowerCase();
  let longestPal = 1;
  let longestPalStr;

  for(let i=0; i < str.length; i++){
    for(let j=1; j <= str.length-i; j++){
      let subStr = str.substr(i,j);
      if(palindrome(subStr) && subStr.length > longestPal){
        longestPal = subStr.length;
        longestPalStr = subStr;
      }
    }
  }
  return longestPalStr;
}


//alternate version
const altGetP = str => {
  str = str.toLowerCase();
  let longestPal = 1;
  let longestPalStr;

  for(let i=0; i < str.length; i++){
    let next = 0;
    let match = 0;

    //repeating chars -> 'aaaaaa'
    while(str[i] === str[i + match + 1]){
      match++;
    }
    //expand
    while(true){
      //beforeStr matches previous character
      let beforeStr = str[i - next - 1];
      //afterStr matches next character
      let afterStr = str[i + match + next + 1];
      if (beforeStr !== void 0 && beforeStr === afterStr){
        next++;
      } else {
        break;
      }
    }
    if (next > 0 || match > 0){
      if(match + 2*next + 1 > longestPal){
        longestPal = match + 2*next + 1;
        longestPalStr = str.substr(i - next, match + 2*next + 1);
      }
    }
  }
  return longestPalStr;
}
console.log(getP(test));
console.log(altGetP(test));
