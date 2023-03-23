const shirt1 = {
    shirtType: "crop top",
    color: "pink",
    quantity: 3,
    size: "Large",
    like: true 
}

//bracket notati
const shirtsize = shirt1 ["size"] 
const shirtQuantity = shirt1.quantity
const shirtColor = shirt1.color
const shirtLike = shirt1.like
const shirtTypeVar = shirt1.shirtType
// dot notation
console.log("size:", shirtsize)

console.log("shirt:", shirtTypeVar ) //this one

console.log("quantity:",shirtQuantity )
console.log("color", shirtColor)
console.log("like", shirtLike)
