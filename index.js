let age = 10;
console.log(typeof age); //number
age = 10.5;
console.log(typeof age); //number
let name = "Lin";
name = undefined;
console.log(typeof name); //undefined
name = null;
console.log(typeof name); //object
console.log(name); //null

// Java Object
let person = {
    name: "a68lin", //notice the ":" and "," syntax
    age: 10
}

//Static access
console.log(person.name);

//Dynamic access
let selection = undefined;
selection = 'name'; //notice it has to be string
console.log(typeof selection);
console.log(person[selection]);

//Array
let array1 = []; // initialize empty array
let array2 = [1, 2]; // initialize by listing
console.log(typeof array1); // array is an object
console.log(array1); 
console.log(array2);
console.log(array1[0]); 
array1[2] = 1; // can add beyond the last index
console.log(array1);

//function
function print(first, second) {
    console.log("Zero " + first + " " + second);
}

function square(num) {
    return num * num;
}

function nothing() {
    return;
}

print("first"); //Can work even if without giving all arguments required
console.log(square(2));
console.log(nothing()); //return undefined

// check if contributed
