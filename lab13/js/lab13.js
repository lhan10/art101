/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 11/20/2021
 * License: public Domain
 */


 function FizzBuzzBoomBang(max,numList,wordList){
  var outputSTR = "";
  for (var i=0; i<=max; i++){
    var word = "";
    for (var j=0; j<numList.length; j++){
      if (i % numList[j] ==0){
        word += wordList[j];
        description = true;
      }
    }
    if (description) {
      outputSTR = outputSTR + i + " - " + word + "!<br>";
      description = false;
  }
    else {
      outputSTR = outputSTR + i + "<br>";
    }
  }
  return outputSTR;
}

$("#button").click(function (){
  var numList = [];
  var wordList = [];

  numList[0] = $("#n1").val();
  numList[1] = $("#n2").val();
  numList[2] = $("#n3").val();
  numList[3] = $("#n4").val();
  numList[4] = $("#n5").val();

  wordList[0] = $("#w1").val();
  wordList[1] = $("#w2").val();
  wordList[2] = $("#w3").val();
  wordList[3] = $("#w4").val();
  wordList[4] = $("#w5").val();

  maxNum = $("#max").val();

  $("#output").html(FizzBuzzBoomBang(maxNum,numList,wordList));
})
