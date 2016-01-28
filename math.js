// * How many hours are in a year
var second = 1;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 24;
var year = day * 365;

var age = prompt("How old are you?");
var oldYet = 32;

// how many hours in a year
document.write( "<div class='math'>There are "+ (year / 60 / 60)+ " hours in a year.</div>" );

// * How many minutes are in a decade
document.write( "<div class='math'>There are "+ ((year * 10) / 60 )+ " minutes in a decade.</div>" );

// * How many seconds old they are
document.write( "<div class='math'>You are "+ ( age * year )+ " seconds old.</div>" );

// * If they are older than some arbitrary number, alert "I'm old", else "I'm young"
if ( age > oldYet ) {
  document.write("<div class='math'>You're kinda old, just saying.</div>")
} else {
  document.write("<div class='math'>You're not very old, so maybe none of this seems important yet.</div>")
}

document.write("<div class='math'><a href=saturn/saturn.html>BUT WHAT IF I LIVED ON SATURN?</a></div>")

document.write("<div class='math'><a href=http://www.math.com>Want to learn more about numbers? Click here and you can learn it all!</a></div>")
