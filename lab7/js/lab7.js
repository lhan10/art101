/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 10/24/2021
 * License: public Domain
 */

// sortUserName - a function that takes user input and sorts the letters of
// their names

var userName = window.prompt("Hi! Please tell me your name so I can fix it.");

function sortUsername() {
  console.log("userName =", userName);
  // sort user's name
  var userNameArray = userName.split('');
  var nameSorted = userNameArray.sort().join('');
  return nameSorted;
}

// output
document.writeln("Here is your fixed name: ", "</br>");
document.writeln(sortUsername());
