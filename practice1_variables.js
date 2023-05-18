//this is how we comment in one line
/**this is how we comment in multiple lines
 * 
 */
console.log('hello world');
console.log("hello world in double quote");

//three ways we can define variable
//1.var, let
//2.const if the variable value is fixed and can not be changed

 //JavaScript is not a strongly typed language 
 //Its a case sensitive language

let message = "Hello to javascript";
console.log(message);
//re-assignin value
message = "Javascript is fun"
console.log(message);

var num = 10;
console.log(num);
let price = 1399.99;
console.log("Iphone price is " + price);
let hired = true;
console.log("is Marina hired ? " + hired);
let coffee;
console.log(coffee);
let negativity = null;
console.log(negativity);
//creating a value that cannot change
//const-> short for constant, a value that does not change
const name= "John";
// name="something else"; this will give us an error, can not reassign the varible constant
console.log(name);

