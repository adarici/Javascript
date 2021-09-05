/*

FUNCTIONS:
We can use a function and then declare the function
*/
console.clear();

//calling the function
add(2,5);//7

//declaring function
function add(x,y){
  console.log(x+y);
}
//calling the function
add(4,6);//10


//function = keyword, add = name of the function
//anonymous function = function with no name
//we can declare anonymous function and put in a variable
var sum = function (x,y){
  console.log(x+y);
}

//calling the function
sum();//NaN
sum(7,8)

//create anonymous function with 3 params
//then put result in a variable named total
//call the fucntiomn to print the result




