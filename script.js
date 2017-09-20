//strings
var var1 = "school";
var var2 = "huis";
var var3 = "nederland";
var var4 = "kut weer";
var var5 = "je moeder";

//intergers
var nummer1 = 1;
var nummer2 = 2;
var nummer3 = 3;
var nummer4 = 4;
var nummer5 = 5;

//booleans
var boolean1 = true;
var boolean2 = false;
var boolean3 = false;
var boolean4 = true;
var boolean5 = false;

console.log("nummer1"+typeof( nummer1));
console.log("var1"+typeof( var1));
console.log("boolean1"+typeof( boolean1));

console.log(nummer4+nummer2);
console.log(nummer4+var1);
console.log(var1+nummer4);
console.log(nummer5+boolean3);
console.log(var4  +var1);
console.log(nummer3+nummer2);
console.log(var2  + nummer1);



function multiply() {
  console.log(boolean3 * nummer2);
}

multiply();

var voornaam =  "reinier ";
var tussenstuk = " van der ";
var achternaam = " velden "
var leeftijd = "17"

function helenaam() {

console.log(voornaam + tussenstuk + achternaam + "ik ben " + leeftijd + " jaar oud");

}
helenaam();


var expression1 = function() {
  console.log("hallo expression1")
}

var expression2 = function() {
  console.log("hallo expression2")
}

expression1();
expression2();
