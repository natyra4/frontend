const firstName = "Kanymgul";
const lastName  = "K";
const age = 18;

//print out first name and last name 
console.log("First name is :" + firstName);
//`backstick symbol for template string 
console.log(`firstName is ${firstName}`);
//print out full name is firstName and lastName and she is __ age years old
console.log(`full name is ${firstName}  ${lastName} and she is ${age} years old `);

const multiline = `this is line 1 
                   this is line 2
                   this is line 3 ` ;
                // console.log(multiline);
 console.log(`uppercase version is : ${multiline.toUpperCase()}`);               

const num1 = 10;
const num2 = 20;
console.log(`the result to adding ${num1} to ${num2} is ${num1+num2}`);
