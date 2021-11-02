/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 10/31/2021
 * License: public Domain
 */

// assign a element to a variable
var outputEl = document.getElementById('output');
  // print the element
  console.log(outputEl);

// create a new element and assign it to a variable
var new1El = document.createElement("p");
  // add text inside <p>
  new1El = "I hope this works:)";
  // print the element
  console.log(new1El);

var new2El = document.createElement("p");
  // add another text inside <p>
  new2El = "I hope this works again:)";
  // print the element
  console.log(new2El);

// append the first created element to output <div>
var element = document.createTextNode(new1El);
outputEl.appendChild(element);
  console.log(element);

// append the second created element to output <div>
var element2 = document.createTextNode(new2El)
outputEl.appendChild(element2);
  console.log(element2);

outputEl.style.fontSize = "20pt";
outputEl.style.color = "grey";


function changeColor(newColor) {
  var elem = document.getElementById('output');
  elem.style.color = newColor;
}
