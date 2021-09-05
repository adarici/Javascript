
console.clear(); 
/*
Get one side of the square from the user 
and print the area of the square on the console
   _
  |_|
  
*/

function squareArea(a){
  return(a**2);
}

console.log("The area of the square is: "+squareArea(2));


/*
. Get both sides of the rectangle form the user
and print the perimeter of the rectangle on the console

   __
  |__|
  
*/


function periRect(length,breath){
  
  return(2*(length+breath));

}

console.log("Perimeter of the rectangle is "+periRect(2,4));

/*
Get the radius of the circle from user 
and print the area of the circle on the console
()
  
*/


//function areaCircle(radius){
  //const pi = 3.14;
  return(pi*(radius**2));
//}


//let radius = prompt('Please enter the radius of hte circle');

//console.log('Area of the circle is '+areaCircle(radius));

//4.

/*
Take height and weight from user and give 
the body mass index rounded to the closest whole number

bmi = weight/(height*height)
  
*/

function bmiCalculator(height,weight){
  return(Math.round(weight/(height**2)));
}

let bmi = bmiCalculator(50,200000);
  
console.log(`The bmi value is ${bmi}`);

//5. Leap Year
/*

Write a program to determine if the give year is a leap year.

Write a function : isLeap,
-> divisible by 4;
-> but not divisible by 100
->unless divisible by 400

eg: 
2016-> leap
1900-> not leap

*/

function isLeap(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return ("Leap");
            }
            else {
                return ("Not Leap");
            }
        }
        else {
            return ('Leap Year');
        }
    }
    else {
        return ('Not Leap Year');
    }
}


 console.log(isLeap(2016));

// With Ternary


function isLeap(year) {
    
  return (year%4==0?(year%100==0?( year%400==0?'Leap Year':'Not Leap' ):'Leap Year' ):'Not Leap');
}


console.log(isLeap(1900));

// 6. Who will pay the Bill?

/*

Write a function whoPays(){}

This functions selects a random person from names array and returns that person

Make sure your code for works different array sizes.
Eg:
var names =["Sam","Tom",Cindy","Cole","Jim"];
Use Math.random() to get a random number
Use that number as index of array to get random name

*/

function whoPays(names){

  var numOfPeople = names.length;
  var randomNumber=Math.floor(Math.random()*numOfPeople);
  var randomName = names[randomNumber];
  return`${randomName} pays the bill`;

}

var names = ['Sam','Tom','Cindy','Jim'];

console.log(whoPays(names));

//7. 


/*

Create a function which returns the number of true values there are in an array

countTrue([true,false,true,true]) -> 3

countTrue([true,false]) -> 1

*/

function countTrue(arr){
  var count = 0;
  for(var i=0;i<arr.length;i++){
    if(arr[i]===true){
      count++;
    }
  }
  return count;
}

arr = [true,false,true,true];

console.log("The count of true is : "+countTrue(arr));

/*8.
A repdigit is a positive number composed out of the same digit. 
Create a function that takes an integer and returns whether it's a repdigit or not. 
isRepdigit(66) ➞ true 
isRepdigit(6666) ➞ true 
isRepdigit(0) ➞ true 
isRepdigit(01) ➞ false
isRepdigit(-11) ➞ false
*/

function isRepDigit(num){
  
  num +="";
  
  for(i=0;i<num.length;i++){
    
    if(num[i]!=num[0])
      {
        return false;
      }
  }
  return true;
}

console.log(isRepDigit(2221));


//9. 
/*

3.Create a function that counts the integer's number of digits.

count(318) -> 3
count(-1232) -> 4
count(46666) -> 5
-1232 -> 1232 -> 4

*/

function count(n){
  
  if(n<0){
    return (-n).toString().length;
  }
  else
    {
      return n.toString().length;
    }
 
}

console.log(count(-11000));
// 2 Way

function count(n){
    return Math.abs(n).toString().length;
}

console.log(count(11000));

//10.
/* 
Create a function to return 
the second largest number from an array
Sort the array in descending order -> Take the 2 value 
*/

function secondLargest(arr){
 arr = arr.sort(function(a,b){
   return b-a;
 });
  return arr[1];
}

let arr = [100,5,2,10];

console.log("The second largest value is "+secondLargest(arr));

console.clear();
// 11. 

/* 
Get both sides of the triangle and print 
the hypothenuse of the triangle. 
Round your answer to the nearist whole number.

h = sqrootof(base^2+alt)

Math.sqrt(9);
*/

function calHyp(base,altitude){
   return (Math.round(Math.sqrt(base**2+altitude**2)));
}

var base = prompt('Enter the base');

var altitude = prompt('Enter the altitude');

var hype = calHyp(base,altitude);

console.log(`The hypotenus value for Base=${base} and Altitude= ${altitude} is ${hype}`);


//12

/* 

Create a function customerInfo

it taks 2 parameters;Name and cardNum,

Returns the info as following

Customer first Letter in Caps and rest is masked(not visible)
Customer card number first 12 digits is masked(not visible) and the last 4 digits is visible


Name = Fowad Hamza
cardNum = 1234 6573 9393 2993

F********* ************2993

1) Take first Letter -> Move it to UpperCase
2) Take the rest -> replace it with *
3) Print 12 '*' 
4) Print the last 4 digits of the credit card.
*/


function customerInfo(name,cardNum){
  
   var firstLetter = name.slice(0,1).toUpperCase();
   var restOfName = name.slice(1).replaceAll(/[a-zA-Z]/gi,'*');
  var specialChars = '\n************';
  var last4Digits = cardNum.slice(12,16);
  
  return ( firstLetter + restOfName + specialChars + last4Digits);
  
}

console.log(customerInfo('FowadHamza','1234567890123456'));

