//const tinderUser =new Object()
const tinderUser ={}
tinderUser.id = "123abs "
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "soniya@gmail.com",
    fullname : {
        userfullname: {
            firstname: "Rajeev",
            lastname : "poddar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3: "a",4: "b"}
const obj4 = {5 : "a", 6: "b"}

//const obj3 = { obj1 ,obj2}
//const obj3 = object.assign({} ,obj1 ,obj2, obj4);

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users = [
    {
        id :1,
        email : "rajeeb@.com"
    },
    {
        id : 21,
        email : "hmavmdctkvmh.om"
    },

]   
users[1].email   
console.log(tinderUser); 

console.log (objects.keys(tinderUser));
console.log(objects.values(tinderUser));
console.log(objects.entries(tinderUser));
console.log(objects)

console.log(tinderUser.hasOwnProperty('isLogged'));
