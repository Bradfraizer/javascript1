//FUNCTIONS
//ANONYMOUS and NAMED - ANON can't refer to itself
//FUNCTION DEFINITION
//function(string) { //PARAMATER goes inside the ()
  //return string.toUpperCase();  //Data transformation and RETURN
//}(); // END OF FUNCTION - () at the end immediately calls it, but is BAD PRACTICE

//NAMED FUNCTIONS
//FUNCTION DEFINITION
// function addTwo(num) {
//   return num + 2;
// }

//CALL the FUNCTION
// console.log(addTwo(1)); //Call site
//
// let myNewNumber = addTwo(34);

// function logMyString(string) {
//   console.log(string);
// }

//logMyString('JR is the best EVVAAARRR!');
//FUNCTION DECLARATION - is hoisted
// function alertAd() {
//   alert('Hey! You want some candy?');
// };
//
// alertAd();
//
// let confirmStuff = function(someString) {
//   let newVar = 'cheese';
//   confirm(someString);
// }
// console.log(newVar); //throws an error
//confirmStuff('Do you want to build a snowman?');

//RECURSIVE FUNCTIONS -RECURSION
// let i = 0;
// function iCallMyself() {
//   console.log(i);
//   i++;
//   if (i < 10) iCallMyself();
// }
//
// iCallMyself();

//ARROW FUNCTIONS
//BASIC IMPPLEMENATION
// (logFunction, alertFunction) => { //No FUNCTION KEYWORD
//   logFunction('hello world');
//   alertFunction('Goodbye, fiends!');
// };
//
// //Only ONE PARAMETER/ARGUMENT
// string => { //() ARE OPTIONAL
//   console.log(string);
// }
//
// let logString = string => {
//   console.log(string);
// }
// // logString('Hello, cats!')
//
// //IMPLICIT RETURN
// string => (string.toUpperCase());
// string => string.toUpperCase();  //Also IMPLICIT RETURN
