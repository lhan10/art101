/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 10/27/2021
 * License: public Domain
 */

// define an array of numbers
var array = [9, 6, 2, 4, 5, 1];

// define a function
function sqr(x){
  return x*x;
}

// test the defined function by using the array
var result = array.map(sqr);
console.log("the square value of each number is: ", result);

// test an anonymous function by using the array
var result = array.map(function(x){
  return x*x*x;
})
console.log("the cubed value of each number is: ", result);


function changeColor(newColor) {
  var elem = document.getElementById('button');
  elem.style.color = newColor;
}
