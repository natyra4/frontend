let names = ["Clark","Bruce","Barry","Diana","John"];
// function printStuff (stuff){
//     console.log(stuff);
// }
const printStuff = (stuff) => console.log(stuff);

 
names.forEach(stuff=>console.log(stuff));

names.push("Snow");
console.log(names);

//store the first and second item into variable called a and b 
let [a,b] = names;
console.log(a + " has character count of "+a.length);
console.log(b + " has character count of "+b.length);

//create a new empty array with name charCountArray
// let charCountArray= [];
//go through each and every item in names array, get the character count
// for(let each of names){
    //and add it into charCountArray using push method
//     charCountArray.push(each.length);
    
// }

// let charCountArray= names.map((each)=>each.length );
// console.log(charCountArray);
// arrays map method is a method can transform each element
// so we can get new array with transformed element
// it expect you to provide a function that accept 1 parameter
// and return a new value of any kind
// easy way to provide such function is using error syntax
// each=> do Something to return a value here
// IT HAS NOTHING TO DO WITH THE MAP AS KEY VALUE PAIR
// SEE MAP METHOD AS TRANSFORMER


let upperNames = names.map(each => each.toUpperCase());
console.log(upperNames);

//filter method of array expect you to provide
// a function that accept one parrameter and return boolean value
let filteredNames = names.filter( each => each.length==4 );
console.log(filteredNames);

let scores = [56,99,65,100,45];
//create a filtered array that store numbers greater than 70
let passedScores = scores.filter(score => score>70 );
console.log(passedScores);



