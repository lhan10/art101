/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 11/14/2021
 * License: public Domain
 */

 function sortingHat(str) {
   var len = str.length;
   mod = len % 4;
   // bonus task
   var description = ["which values bravery, helping others, and chivalry.",
   "which values intelligence, knowledge, planning ahead, and wit.",
   "which values ambition, cunningness, heritage, and resourcefulness.",
   "which values Hard work, patience, loyalty, and fair play."]
   if (mod == 0){
     return "Gryffindo" + "," + description[mod];
   }
   else if (mod == 1){
     return "Ravenclaw"+ "," + description[mod];
   }
   else if (mod == 2){
     return "Slytherin"+ "," + description[mod];
   }
   else if (mod == 3){
     return "Hufflepuff"+ "," + description[mod];
   }
}

 var myButton = document.getElementById("button");

 myButton.addEventListener('click', function() {
   var name =  document.getElementById("input").value;
   var house = sortingHat(name);
   var newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
   document.getElementById("output").innerHTML = newText;
})
