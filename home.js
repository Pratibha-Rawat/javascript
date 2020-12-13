console.log('hello...I am Pratibha Rawat');
//alert('how you doin?');
//How to write an inline comment

//Variables
var b = 'smoothie';
console.log(b);

var no = 25;
console.log(no);

//document.getElementById('random').innerHTML = 'Hey There';
//prompt will take input from the user
//var age = prompt('what is your age?');
//document.getElementById('random').innerHTML = age;

//number in javascript
var num1 = 12;
num1 = num1 + 5;
console.log(num1);

//functions in javascript
/* 1. create the function
2. call the function
*/
function fun() {
    console.log('This is a function');
}
//call
fun();

//func that takes and the name and then returns hello followed by the name you entered
/*function greeting() {
    var name  = prompt('What is your name?');
    var result = 'hello ' + name;  //string concatenation
    console.log(result);
}
//greeting();


//arguments in functions
//how to add two numbers together in a function

function add(a , b)
{
    var result = a + b;
    console.log(result);
}

add('Hello ' , 'Pratibha');
add(10, 10);
*/
function greeting(Name)
{
    var result = 'Hello' + ' ' + Name;
    console.log(result);
}
//var yo = prompt('What is your name ? ');
//greeting(yo);

//while loops
/*var num = 0 ;
while (num < 100)
{
    num += 1;
    console.log(num);
}
*/

//For loop
for(let num = 0 ; num < 100 ; num++)
{
    console.log(num);
}

// Data types
let yourAge = 18 ; //number
let name = 'Pratibha' ; //string
let nomo = {first: 'Pratibha', last: 'Rawat'}; //object
let truth = false ; //boolean
let groceries = ['apple', 'banana', 'oranges']; //array
let random ; //undefined
let nothing = null; //value null
