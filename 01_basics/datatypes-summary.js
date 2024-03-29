// Primitive

// 7 types : String, Number,Boolearn,null , undefined,Symbol,BigInt
    
const score =100
const scoreValue =100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 323423556624n


// Reference (Non Primitive)

//Array , Object, Functions

const heros = ["shaktiman" ,"naagraj","doga"];
let myObj = {
    name : "rajeev",
    age : 20,
}

const myFunction = function(){
    console.log("Hello world");

}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);
console.log(typeof anotherId);

// http://262.ecma-international.org/5.1/#sec-11.4.3


//---------------------------------------------------------------

//Stack (Primitive),Heap(Non-Primitive)

let myYoutubename = "priyadarshirajeev"

let anothername = myYoutubename
anothername = "mystriouspodcast"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
   email : "user123@gmail.com",
    upi: "user@paytm"
}

let userTwo = userOne

userTwo.email = "rajeev.11aug@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);