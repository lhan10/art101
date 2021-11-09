/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 11/8/2021
 * License: public Domain
 */


// make a button
var b1 = $("#button1");
// insert it into the challenges part
$("#Challenges").append(b1);
// give a text label to the button
b1.html("Click to see the answer");
// write the function
b1.click(function(){
  $("#Challenges").append("We spent some time figuring out how to use jQuery.");
  $("#Challenges").toggleClass("special");
});


var b2 = $("#button2");
// insert it into the problems part
$("#Problems").append(b2);
// give a text label to the button
b2.html("Click to see the answer");
// write the function
b2.click(function(){
   $("#Problems").append("We didn't encounter any major problems.");
   $("#Problems").toggleClass("special");
});

var b3 = $("#button3");
// insert it into the results part
$("#Results").append(b3);
// give a text label to the button
b3.html("Click to see the answer");
// write the function
b3.click(function(){
  $("#Results").append("We compeleted this assignment.");
  $("#Results").toggleClass("special");
});


// task X

var b4 = $("#button4")
$("#button4").append(b4);
b4.html("red");
b4.click(function(){
  $("#Challenges").css('color', 'red');
  $("#Problems").css('color', 'red');
  $("#Results").css('color', 'red');
});

var b5 = $("#button5")
$("#button5").append(b5);
b5.html("green");
b5.click(function(){
  $("#Challenges").css('color', 'green');
  $("#Problems").css('color', 'green');
  $("#Results").css('color', 'green');
});

var b6 = $("#button6")
$("#button6").append(b6);
b6.html("yellow");
b6.click(function(){
  $("#Challenges").css('color', 'yellow');
  $("#Problems").css('color', 'yellow');
  $("#Results").css('color', 'yellow');
});
