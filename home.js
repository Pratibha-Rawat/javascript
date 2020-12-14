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
/strings in javascript
let fruit = 'banana';
let moreFruits = 'banana\napple'   //new line

console.log(fruit.length); //measuring the length
console.log(fruit.indexOf('an')); //finding index of string entered
console.log(fruit.slice(2 , 6));  //slicing
console.log(fruit.replace('ban', '123')); //replace function
console.log(fruit.toUpperCase(fruit));   //Lowercase
console.log(fruit.toLowerCase(fruit));   //Uppercase
console.log(fruit.charAt(2)); //finding the character at 2 index
console.log(fruit[2]); //same functionaluty as above
console.log(fruit.split(','));  //split by a comma
console.log(fruit.split('')); 

//14 DECEMBER 2020
//Arrays in javascript

//ways to declare array
let fruits = ['banana', 'apple', 'orange','pineapples'];
fruits = new Array('banana', 'apple', 'orange','pineapples');

console.log(fruits[1]); //access values at index 1

//chnaging the values
fruits[0] = 'pear';
console.log(fruits);

for (let i =0 ; i< fruits.length ; i++)
{
    console.log(fruits[i]);
}

//array common methods
console.log(fruits.toString()); //converting to string
console.log(fruits.join('-'));  //separating by different values
console.log(fruits.pop(), fruits); //will pop the last element
console.log(fruits.push('blackberry'), fruits); //will push an element in array
console.log(fruits[4]); 
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits);
fruits.shift(); //remove first element from an array
console.log(fruits);
fruits.unshift('kiwi'); //add first element to an array
console.log(fruits);

let vegetables = ['potato', 'tomato', 'brocoli'];
//combining fruits and vegetable array together
let Groc = fruits.concat(vegetables);
console.log(Groc);
console.log(Groc.slice(1 , 4)); //slicing the array
console.log(Groc.reverse());  //reverse the array
console.log(Groc.sort());

//sorting an array
let nos = [5 , 12 , 32 , 88 , 11 , 1 , 45 , 67 ];
console.log(nos.sort(function(a, b) { return a-b})); //ascending order
console.log(nos.sort(function(a, b) { return b-a})); //descending order

