/**Josephus Problem
 * There are n people standing in a circle waiting to be executed.
 * The counting out begins at some point in the circle and proceeds around the circle in a fixed direction.
 * In each step, a certain number of people are skipped and the next person is executed.
 * The elimination proceeds around the circle (which is becoming smaller and smaller as the executed people are removed), until only the last person remains, who is given freedom.
 * Given the total number of persons n and a number k which indicates that k-1 persons are skipped and kth person is killed in circle.
 * The task is to choose the place in the initial circle so that you are the last one remaining and so survive.
 */
 function josephus(n,k){
   if (n === 1){
     return n; //or return 1?
   }
   return (josephus(n-1,k) + k-1) % n + 1;
 }
 console.log(josephus(5,2)); //should return 3
/**
 * Breakdown:
 * josephus(n,k) = (josephus(n-1,k)+ k-1) % n + 1
 * josephus(1,k) = 1
 * After the first person (kth from beginning) is killed, n-1 persons are left. So we call josephus(n – 1, k) to get the position with n-1 persons.
 * The position retruned by josephus(n-1,k) is adjusted to consider the original position k % n + 1 as position 1.
 */
 // const variable + arrow function + ternary operator
 const josephusAlt = (n,k) => n === 1 ? 1 : (josephusAlt(n-1,k)+ k-1) % n + 1;
 console.log(josephusAlt(7,3)); //should return 4
