/* let bestNumber = true;
let isTrue = false;

console.log(bestNumber || isTrue);


console.log(!isTrue); */

/*let num = 11;
let string = "11";

console.log(num == string); //LOOSE EQUALITY

console.log(num === string); //STRICT EQUALITY*/

// const prim = "my string";
// const objectString = new String("my string");
//
// console.log(prim === objectString); //FALSE
// console.log(prim == objectString); //TRUE

//MODULUS
//console.log(2 % 2); = 0
//console.log(5 % 2); = 1


//MATHEMATICAL OPERATORS

//INC AND DEC
//let start = 1;

//AFTER SOME LOGIC

//start++;  //TAKES THE VALUE AND ADDS +1 TO IT
//START +1

//start--; //TAKES THE VALUE AND SUBTRACTS -1
//START -1
//console.log(start); //2


// let nonNumber = "cheese";
// console.log(parseInt(nonNumber));
//
// console.log(!isNan(nonNumber));  //CHECKING TO SEE IF OBJECT IS NOT A NUMBER

//PARSEINT
// let fifty = "50";
// console.log(parseInt(fifty));

// let nonString = 50000;
// nonString += 20; //TAKES THE VALUE AND REASSIGNS IT A NEW VALUE FOR THE REST OF THE CODE, BEGINNING ON THE NEXT LINE
//
// console.log(nonString.toString()); //TOSTRING DOES IT'S BEST TO CONVERT THE NONSTRING TO A STRING
// console.log(typeof nonString.toString()); //SHOWS IT IS A STRING, BUT REVERTS BACK TO A NUMBER ON THE FOLLOWING LINE
// console.log(nonString += 20);

//IF/ELSE

// let firstNum = 10;
// prompt(firstNum);
// prompt("+");
// let secondNum = 10;
// prompt(secondNum);
// prompt("=");
// let newValue = parseInt(alert(firstNum += secondNum));
//
// if (!isNaN(firstNum) && !isNaN(secondNum)) {
//   alert(firstNum + secondNum);
// } else if(isNaN(secondNum)) {
//   secondNum = parseInt(prompt("no, i said a number...","10"));
// }  else {
//   alert("no dummy");
// }

//SWITCH
// let greeting = prompt("tell me how to say hello", "gutentaag");
// switch(greeting.toLowerCase()) {
//     case "hello":
//       alert(`I love saying ${greeting}!`);
//       break;
//     case "wassup":
//       alert(`${greeting} is SO 90's!!!`);
//       break;
//     default:
//       alert(`i've never heard ${greeting} before!`);
//       break;
// }

//TERNARY

// let money = 10;
// let currency = confirm("In dollars or otherwise?");
// currency ? alert(`$${money}`) : alert(money); //TRUE

let isAdult = confirm("Are you over 18?");
confirm(userAge);
  if (isAdult) {
    let isUnder80 = ("Are you under 80 years old?");
    if(isUnder80) {
      let isCool =confirm("Do you like Star Wars?");
      if(!isCool) break;
    } else {
      let isElderly = confirm("Do you enjoy prunes?");
    }
  } else {
    alert("you were shot first!");
  }
