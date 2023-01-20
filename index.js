// Code your solutions in this file

//for (let age = 30; age < 40; age++) {
 //   console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

//const gifts = ["teddy bear", "drone", "doll"];

//    for (let i = 0; i < gifts.length; i++) {
    //    console.log(`Wrapped ${gifts[i]} and added a bow!`);
   // }

   // return gifts;
//}

//wrapGifts(gifts);

const names = ["Brigette", "Reed", "Marcus", "Alice"];
const event = "Christmas"

function writeCards(names, event) {
    const card = [];
    for (let n = 0; n < names.length; n++) {
        card.push(`Thank you, ${names[n]}, for the wonderful ${event} gift!`)
    }
    return card;
}

function countDown() {
    let count = 10;
    while (count > -1) {
        console.log(count--);
    }
}