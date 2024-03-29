const myNums = [1 , 2 ,3]

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc ,curr) => acc+curr, 0)

console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js cource",
        price:2999
    },
    {
        itemName: "python cource",
        price:3999
    },
    {
        itemName: "data science cource",
        price:5999
    },
    {
        itemName: "web development cource",
        price:9999
    },
]


const priceToPay = shoppingCard.reduce( (acc ,item) => acc +item.price, 0)
console.log(priceToPay);

