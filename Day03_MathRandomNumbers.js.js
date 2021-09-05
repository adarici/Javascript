/*

Get 2 names from user and store variables:name1, name2. 
Create a variable loveScore and store the random number. 
loveScore should be a random whole number between 1-100(inclusive) percent. 
Calculate the chance of a successful relationship. The closer to 100% the stronger

Task 1: Print ‘name1 and name2 ’s love score is loveScore’
//Try using if and ternary
Task 2: Print ‘You love each other’ if loveScore is greater or equal to 80 %. 
TASK 3: Print ‘Modorate relationship’  if loveScore is between is in between 50% and 80%
TASK 4: Print ‘Not a strong relationship’ otherwise

https://www.lovecalculator.com/ 


*/
console.clear();

//Step 1: getting names from user
var name1 = prompt('Enter your name')
var name2 = prompt("Enter your Crush's name")

//Step2: get ranrom number
var loveScore = Math.random()*100

console.log(loveScore);//0-99.9999999

//Step3: get numbers from 1-100 as whole numbers
loveScore=Math.ceil(loveScore)

console.log(`${name1} and ${name2} has a love score of ${loveScore} %`)
//Step4: complete the if statements

if (loveScore>=80){
  console.log('You love each other')
} else if(loveScore>=50 && loveScore <= 80){
  console.log('Moderate Love')
} else{
    console.log('Not a strong relationship')
}



