//let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toJSON());
//console.log(myDate.toTimeString());
//console.log(myDate.toISOString());
//console.log(myDate.toUTCString());
//console.log(myDate.toLocaleString());

//let myCreatedDate =new Date(2024,2,29)
//let myCreatedDate = new Data(2024,0,29,5,3)

let myCreatedDate =new Date("2024-02-29")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()*1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());

newDate.toLocaleString('default', {
    weekday : "long",
})
