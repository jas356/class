// funtion decloration
// function message(firstName) {
//     console.log("hello" + firstName);
// }


// function getMeow() {
//     console.log("Meow")
// }


// message("Jarvis")


// function makePie(quantity) {
//  const pie = "🍰".repeat(quantity);
//  console.log(pie);
// }
// // invoke the function 
// makePie(4000);

// function makeAnimals(animal, quantity) {
//     const happyresult = animal.repeat(quantity);
//     return happyresult;
// }

function generateLoudSpeaker(text) {
    const nextText = "🔊 " + text.toUpperCase();
    return nextText;
}


// invoke the function
// // const renderResult = makeAnimals("🐼", 953);
// console.log(renderResult);

// const renderResult = makeAnimals("❤️", 12);
// console.log(renderResult)

const computer = generateLoudSpeaker("whisper wh is per");
//const computer = (return mextReturn)

console.log(computer)