/*
 * Author: Ligen Han, Wanqi Yan
 * Created: 10/19/2021
 * License: public Domain
 */

 var myTransport = ["bike", "bus", "taxi", "my car", "airplane"];

 var myMainRide = {
    make: "Farrari",
    model: 458,
    color: "red",
    year: 2021
};

document.writeln("Kinds of transportation that I use: " , myTransport, "<br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
