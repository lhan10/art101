/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 12/1/2021
 * License: public Domain
 */


$("#activate").click(function(){

  var comicObj;

   $.ajax({
      // The URL for the request (from the api docs)
      url: "https://xkcd.com/info.0.json",
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
          comicObj = data;
          $("#output").html("<h1>"+ comicObj.num + ": "+ comicObj.title+"</h1>");
          $("#output").append("<img title='"+ comicObj.title +"'src='" + comicObj.img+"' alt='"+comicObj.alt+"'>");
          $("#output").append("<p> Alt: " + comicObj.alt + "</p>");
          console.log(data);

      },
      // What we do if the api call fails
      error: function (jqXHR, textStatus, errorThrown) {
          // do stuff
          console.log("Error:", textStatus, errorThrown);
      }
  })

})
