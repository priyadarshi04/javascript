// const coding = ["js" ,"ruby" ,"java" ,"python" ,"cpp"]


// const values = coding.forEach ( (item) => {
//     //console.log(item);
//     return item 
// })

// console.log(values);

// const numbers = [1,2,3,4,5];
// numbers.forEach(function(number,index) {

//     console.log("The Element of index " + index +" is " 
//     + number);
// })

const myNums = [ 1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) =>{
//     return num > 5 
// })

const newNums = []

myNums.forEach( (num) => {

    if(num > 4) {
        newNums.push(num)
    }
})


console.log(newNums);