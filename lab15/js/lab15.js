/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 11/20/2021
 * License: public Domain
 */


 $("#activate").click(function(){
   // Using the core $.ajax() method
   var word = $("#input").val();

     $.ajax({
       // The URL for the request (from the api docs)
       url: "https://en.wikipedia.org/api/rest_v1/page/summary/" + word.replace(" ","_") + "?redirect=true",
       // The data to send (will be converted to a query string)
       data: {},
       // Whether this is a POST or GET request
       type: "GET",
       // The type of data we expect back
       dataType : "json",
       // What do we do when the api call is successful
       //   all the action goes in here
       success: function(data) {
           // do stuff
           if (data.extract_html) {
             $("#output").html(data.extract_html);
             if ($("#check").prop("checked")) {
               $("#output").html(data.extract_html + "<img src='" + data.thumbnail.source+"'>");
             }
           }else{$("#output").html("<p>Sorry, we cannot find <b>" + word + "</b>.");}
       },
       // What we do if the api call fails
       error: function (jqXHR, textStatus, errorThrown) {
           // do stuff
           $("#output").html("<p>Sorry, we cannot find <b>" + word + "</b>, please try another word.");
           console.log("Error:", textStatus, errorThrown);
       }
   })

 })
