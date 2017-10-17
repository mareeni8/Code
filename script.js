"use strict";

// alert("Hello, world!");

var myVariable;
myVariable = 10;
console.log( myVariable );

var myString = "Hello, world!";

console.log( myString );

var myBoolian = false;
console.log( myBoolian );

var myNull = null;
console.log( myNull);

var myUndefind = undefined;
console.log( myUndefind );
// if -else//
var season = "spring";
if (season === "autumn") {
  console.log("Hey yey yey, thats autumn!");
}
else{
  console.log("hmm, no, not autumn");
}
//loop "for"
var number;
for(number = 0; number < 10; number++){
  console.log("Lets count it from 0 to 9: " + number);
}
//function
function multiply(number1, number2, number3){
  var result = number1 * number2 * number3;
  return result;
}
console.log( multiply(1, 2, 3));
console.log (multiply(22, 17, 3));

// DOM
var myArticle = document.getElementById('article_1');
myArticle.classList.add('myClass');

var showMe = document.getElementById('showMe');
showMe.onclick=function() {
  alert('Here I am!');
}
// лучше использовать этот тип //
var eventListener = document.getElementById('eventListener');
eventListener.addEventListener("click",function(){
  this.classList.toggle('toggled');
});
