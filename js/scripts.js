// let myArray = []; //MOST BASIC FORM OF ARRAYS
// let favoriteFoods = ["pizza", "hamburgers", "french fries"];
// let allTheThings = ["string", 23, ["stuff"], {}, false];
//
// //console.log(favoriteFoods[1]);
//
// alert(favoriteFoods.length); //GIVE YOU HOW MANY MEMBERS

//TRY OUT #1
 // var tryIt = ["Pacific Rim" , "23" , "false" , "2008"];
// console.log(tryIt , tryIt.length);

//CHECK IF THIS IS AN ARRAY
//alert(Array.isArray(tryIt) , typeof myFavs);
// console.log(tryIt);

//PUSH
// tryIt.push("Bart Kwon");
// console.log(tryIt);

//UNSHIFT
// tryIt.unshift("Joe Rogan");
// console.log(tryIt);

//POP
// let lastMember = tryIt.pop();
// console.log(lastMember);

//SHIFT
// tryIt.shift();

//SPLICE
// let removed = tryIt.splice(2);
// console.log(tryIt, removed);
// console.log(tryIt, 'BEFORE');
// tryIt.splice(1 , 2);  // 2 ARGUMENTS
// console.log(tryIt, 'AFTER');
// console.log(tryIt, 'BEFORE');
// tryIt.splice(3 , 1["I got added!"]); // 3 ARGUMENTS / REMOVE 3, ADD 1 IN THEIR PLACE
// console.log(tryIt, 'AFTER');

// console.log(tryIt, 'BEFORE');
// tryIt.splice(3 , (tryIt.length - 4) ["I got added!"]); //CHECKING TO SEE HOW MANY OBJECTS ARE IN THE ARRAY
// console.log(tryIt, 'AFTER');

// console.log(tryIt, 'BEFORE');
// tryIt.splice(-2 , 1, (tryIt.length - 4) ["I got added!"]); //IF A NEGATIVE NUMBER IS THE 1ST ARGUMENT, STARTS AT THE END OF THE ARRAY AND COUNTS BACK TO THAT SPOT.
// console.log(tryIt, 'AFTER');

//SLICE
// let copy = tryIt.slice(1); // 1 ARGUMENT
// console.log(copy);
//
// let copy = tryIt.slice(1, 4); // 2 ARGUMENTS , SECOND ARGUMENT IS ALSO A STARTING INDEX.  COPIES ALL IN BETWEEN THOSE INDICES.
// console.log(copy);


//INDEXOF
// let removeIndex = tryIt.indexOf(23);
// console.log(removeIndex); //
// tryIt.splice(removeIndex, 1);


//REVERSE
// let myNums = [1 , 2, 3, 4, 5];
// console.log(myNums.reverse()); //FROM THIS POINT ON THE ARRAY IS REVERSED

// console.log(tryIt);
// tryIt.sort();
// console.log(tryIt);


//NESTED ARRAYS / MULTIDIMENSIONAL ARRAYS
// let multiDimensional = [['hello', 1['goodbye'0]];
// console.log(multiDimensional[0][0], multiDimensional[1][0]);

let favoriteMovies = (firstFavorite, secondFavorite, thirdFavorite, fourthFavorite, fifthFavorite);
favoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite, fourthFavorite, fifthFavorite);
let firstFavorite = ['Jknews', 'Joe Jitsukawa'];
let secondFavorite = ['powerfuljre', 'joe rogan'];
let thirdFavorite = ['game grumps', 'dan abodan'];
let fourthFavorite = ['game theorist', 'matt patt'];
let fifthFavorite = ['deadpool', 'ryan reynolds'];

let titles = [];
titles.push(favoriteMovies[0][0], favoriteMovies[0][1], favoriteMovies[0][2], favoriteMovies[0][3], favoriteMovies[0][4]);
alert(titles);

let favAndLeast = [];
favAndLeast.push(favoriteMovies[0], favoriteMovies[4]);
console.log(favAndLeast);
