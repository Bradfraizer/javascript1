//ALWAYS START A LOOP AT 0
//BASIC LOOP
//  for (let i = 0; i < 11; i++) {
//   console.log(`The number is ${i * 10}`);
// }

// INFINITE LOOP !DO NOT USE!
// for (let i = 0; i >= 5; i++) {
//  console.log('Hi');
// }

// const colors = ['blue' , 'purple' , 'red' , 'aquamarine', 'chartreuse' , 'orange'];
// console.log(color[0]);
// console.log(color[1]);
// console.log(color[2]);
// for ( let index = 0; index < colors.length; index++) {
//   console.log(colors[index]);
//   continue;
//   console.log('why cant you see me?');
// }
// // BREAK / breaks the loop prematurely
//CONTINUE / end that line of code being run, but doesn't break the loop / haults everything below it
// let counter = 0;
// while (counter < 10) {
//   console.log(`before ${counter}`);
//   counter++;
//   console.log(`after ${counter}`);
// }

//FOR EACH - easily get the index
// const captains = ['Kirk' , 'Picard' , 'Sisko' , 'Janeway' , 'Lorca'];
// captains.forEach( (captain, index) => {
//   console.log(captain, index);
// } )

//FOR...OF - fanicer than FOR FOR EACH - for ARRAYS
// const captains = ['Kirk' , 'Picard' , 'Sisko' , 'Janeway' , 'Lorca']
// for (let captain of captains) { //First can be named anyting you want, but contains the value of each one.  Second MUST be the name of the ARRAY
//   console.log(`Hello Captain ${captains}`);
//   captains.indexOf(captain);
// }

//FOR... IN - is for OBJECTS - with OBJECTS declare each line with a "," instead of ";"
// const me = {
//   firstName : 'Brad',
//   lastName : 'Fraizer',
//   age: 27
// }
//
// for (let property in me) {
//   console.log(me[property]);
// }

let favoriteMovies = [];
favoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite, fourthFavorite, fifthFavorite);
let firstFavorite = ['Jknews', 'Joe Jitsukawa'];
let secondFavorite = ['Powerfuljre', 'Joe Rogan'];
let thirdFavorite = ['Game Grumps', 'Dan Abodan'];
let fourthFavorite = ['Game Theorist', 'Matt Patt'];
let fifthFavorite = ['Deadpool', 'Ryan Reynolds'];

for (let i = 0; i < favoriteMovies.length; i++) {
  if(favoriteMovies === favoriteMovies[i][0])
  alert(`${favoriteMovies[i][0]} , ${favoriteMovies[i][1]}`)
}
