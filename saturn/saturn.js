// * How many hours are in a year
var second = 1;
var minute = second * 60;
var hour = minute * 60;
var day = hour * 10.65;
var year = day * 365 * 29;

var age = prompt("How old are you?");
var oldYet = 32;

// how many hours in a year
document.write( "<div class='math'>ON SATURN There are "+ (year / 60 / 60)+ " hours in a year.</div>" );

// * How many minutes are in a decade
document.write( "<div class='math'>ON SATURN There are "+ ((year * 10) / 60 )+ " minutes in a decade.</div>" );

// * How many seconds old they are
document.write( "<div class='math'>ON SATURN You are "+ ( age * year )+ " seconds old.</div>" );

document.write( "<div class='math'><a href=../index.html>wait I live on earth can we go back</a></div>")