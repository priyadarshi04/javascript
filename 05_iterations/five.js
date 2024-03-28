const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach( (item) => {
//     console.log(item);
// }
// )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach ( (item,index ,arr) => {
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName : "javascript",
        langauageFileName: "js"
    },
    {
        languageName : "C++",
        langauageFileName: "cpp"
    },
    {
        languageName : "Python",
        langauageFileName: "py"
    },
    {
        languageName : "Java",
        langauageFileName: "java"
    },
]

myCoding.forEach( (item) => {

    console.log(item.languageName);
})