/*
ARRAYS:
Arrays are special type of objects
We use index to get teh values in array
We use [] to create arrays
*/

console.clear();

//Waw 1 Declaring Array:
//                 0,    1,    2,     3.    4.    5.    6.    7='rahul'
var friendList = ['sam','tom','tim','john','bob']
console.log(friendList)
console.log(typeof(friendList));//"object"
//Way 2 Declaring Array:
var myFriendList = new Array('sam','tom','tim','john','bob')
console.log(myFriendList)

//getting teh values from the array
console.log(friendList[3]);//"john"

//when index is out of bound
console.log(friendList[5]);//undefined

//Editting array
//Change 'John' as Marry
friendList[3]='Marry';
console.log(friendList);//["sam", "tom", "tim", "Marry", "bob"]



//ADDING DATA :
//                 0,    1,    2,     3.    4.    5.=alex    6.    7='rahul'
//Adding data in the index of 5 as alex
friendList[5]='alex';
console.log(friendList);//["sam", "tom", "tim", "Marry", "bob", "alex"]

//Adding data in the index of as rahul
friendList[7]='rahul'
console.log(friendList);//["sam", "tom", "tim", "Marry", "bob", "alex", undefined, "rahul"]

//NOTE: When working arrays
//1. if there is already data in that index, then previous data will be overridden
//This means we are changing data in that index
//Example: Change 'John' as Marry
//friendList[3]='Marry';

//2. if there is no data in that index, then the new data will be inserted in that index
//This means we are adding a data in that index
//Note that if there is a GAP beetween the last index and inserted index,
//then the gap indexes will be undefined
//Example: Adding data in the index of as rahul
// friendList[7]='rahul'. There is no data in index 6, so it will be undefined
// console.log(friendList);//["sam", "tom", "tim", "Marry", "bob", "alex", undefined, "rahul"]

