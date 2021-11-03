/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 11/2/2021
 * License: public Domain
 */


 function sortUsername(userName) {
   // sort user's name
  var nameSorted = userName.split('').sort().join('');
  return nameSorted;
 }

 var button = document.getElementById('my-button');
 button.addEventListener('click', function() {
  var inputValue = document.getElementById('my-input').value;
  var outputValue = document.getElementById('output');
  var newEl = document.createElement("p");
  newEl.innerHTML = "Sorted Name: " + sortUsername(inputValue);
  outputValue.appendChild(newEl);
})


function changeColor(newColor) {
  var elem = document.getElementById('output');
  elem.style.color = newColor;
}
