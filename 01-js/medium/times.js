/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n){
  var total = 0
  const start = Date.now()
  for(i = 1; i<= n; i++){
    total += i
  }
  const end = Date.now() - start
  console.log(`Seconds Taken:${Math.floor(end/1000)}sec`)
  
}
calculateTime(100)
