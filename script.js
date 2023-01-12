/**
 * Users
 *
 * 
*/
console.log("----------------------");
console.log("Welcome to Blackjack");

function randomNumber(min,max) {
    let randNum = Math.floor(Math.random(min,max)*22);
    return randNum;
}
let total = [];

var playerCards = [];
var dealerCards = [];
var systemCards = [];
var playerTotal = 0;
var dealerTotal = 0;
console.log("Here is your card Deck");
// function deck(){
//     let b =22;
//     for (let i = 1; i<b;i++ ){
//         console.log(i);
//     }
// }
// let decks = deck();
// systemCards = systemCards.push(randomNumber(3,21));
// console.log(systemCards);
var a = 0;//used to initialze while loop
while(a === 0){
    playerCards = randomNumber(4,22);
    console.log("Current Player Cards: ",playerCards);
    console.log(playerCards);
    playerTotal = playerCards[0];
    console.log("Your Total is: ",playerTotal);
    a === 1;
    break;
}
//     if(playerTotal > 3 &&playerTotal < 22){
//         let playerChoice = prompt("Do you want to pick a card or stay with current card? (y) or (n)");
//         if(playerChoice ==='y'.toUpperCase){

//         }
//     }else if{

//     }

//     break;
// }