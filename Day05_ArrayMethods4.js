/*
  ARRAYS:
*/
console.clear();

// 8. concat()
var drinks = ['water', 'coke', 'fanta','tea']
var snacks = ['sunchips', 'gold fish', 'nuts', 'popcorn']
const favFoods =drinks.concat(snacks);
console.log(favFoods); // ["water", "coke", "fanta", "tea", "sunchips", "gold fish", "nuts", "popcorn"]

// 9. slice(startIndex(included), endIndex(excluded)) 
// -> returns the piece in between the start and end index
// cut the slice (similar to substring in String)
const myFoods= favFoods.slice(1,5);
console.log(myFoods); // ["coke", "fanta", "tea", "sunchips"]

const favSnacks = snacks.slice(2); // returns from index 2 till endIndex
console.log(favSnacks); // ["nuts", "popcorn"]

// negative index means start from the end
const sliceDrinks = drinks.slice(-1); // start from last index till the end
console.log(sliceDrinks); // ["tea"]

//10. join -> returns a string. we can combine the items of the array using special character
//water - coke - fanta - tea
//drink array : ['water', 'coke', 'fanta','tea']
const joinedItems=drinks.join(' - ')
console.log(typeof(joinedItems));//string"
console.log(joinedItems);//"water - coke - fanta - tea"

const joinedItems1=drinks.join('')
console.log(joinedItems1);//"watercokefantatea"

const joinedItems2=drinks.join(',')
console.log(joinedItems2);//"water,coke,fanta,tea"
