const p1 = {
    firstName : "Elif",
    lastName  : "K",
    gender    : "Female"
};
// console.log(p1.firstName);
// //let firstName = p1.firstName;

// //store firstName and lastName into fName , lName variables
// //use destructing syntax

// let {firstName,lastName, gender} = p1;

//you create 2 variables and extracted the field of p1 object and assign the value

// console.log(firstName);
// console.log(lastName);
// console.log(gender);

//create a function to expect Person object 
// print out firstName,lastName field

// function printPerson (thePerson){
//     console.log(thePerson.firstName);
//     console.log(thePerson.lastName);
// }

function printPerson ({firstName,lastName}){
    console.log(thePerson.firstName);
    console.log(thePerson.lastName);
}

printPerson(p1);
let p2 = {
    firstName:"Ali",
    lastName:"K",
    age:18
}
printPerson(p2);