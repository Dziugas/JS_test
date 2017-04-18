/**
 * Created by User on 2017-03-29.
 */
//the first alert
//alert("Hello, World!");
//the second alert
//alert("Hello Again!");

/*    if - else if

var myAge = 39;
if (myAge > 30){
    document.writeln("you're over 30");
}
else if (myAge > 20){
    document.writeln("you're over 20");
}
else if(myAge > 10){
    document.writeln("you're over 10");
}
else {
    document.writeln("fuk off, you're under 100");
}*/

/* Logical Operators

var myAge = 28;
if (myAge < 18 || myAge > 65 || myAge ===48) {
    document.writeln("ne ne ne, tu arba pensas, arba nepilnametis!");
}
else {

    document.writeln("Tu pilnametis, bet dar ne pensininkas!");
}
*/


/* While Loops

var myAge = 3;
while(myAge<11){
    console.log("we're less than 11");
    myAge++;
}
document.writeln("we're equal or over 11");
*/

/* For Loops

var links =document.getElementsByTagName("a");

for (i=1; i<=links.length; i++){
    console.log("this is link number "+i);
}
*/

/*
for (i=0; i<10; i++){

    if (i===2 || i===3){
        continue;
    }
    console.log("line "+i);

    if (i===7){
        break;
    }
}
console.log("we broke out of the loop");
*/

/*
function color () {
    var links = document.getElementsByTagName("a");

    for(i=0; i<links.length; i++)
    {
        links[i].className="link-0"+(i+1);
    }
}


function color1 () {
    var links = document.getElementsByTagName("a");

    for(i=0; i<links.length; i++)
    {
        links[i].className="link-"+(i+1);
    }
}
*/

/*
function average(a, b) {

    var average = (a + b) / 2;
    return average;
}

var result = average(8,18);
document.writeln("vidurkis yra: " + result);
*/


var z = false;
var link = document.getElementById("link1");

var color = function () {
    z = !z;
    if (z) {
        this.className = "link-1";

    }
    else{
        this.className = "l";

    }
}

link.onmouseover = color;
link.onmouseout = color;

/*

var alertas = document.getElementsByTagName("h1")[0];
alertas.onmouseover = function(){
    alert("kusskusas");
};
*/
var content = document.getElementById("tekstas1");
var button = document.getElementById("button");

    button.onclick = function() {
        if(content.className == "open")    {
            content.className = "";
            button.innerHTML = "Show More";
        }
        else{
            content.className = "open";
            button.innerHTML = "Show less";
        }
    };


var colourChanger = document.getElementById("postas3");
var colours = ["rebeccapurple", "lightgreen", "lightgrey"];
var counter = 0;

function changeColour(){
    if (counter>=colours.length){
        counter=0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
};

setInterval(changeColour, 2000);

