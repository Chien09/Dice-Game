//random numbers from 1 - 6 of dice 
var randomNumber1 = Math.floor((Math.random() * 6)) + 1;  //player 1
var randomNumber2 = Math.floor((Math.random() * 6)) + 1;  //player 2 

//select image
var imageString1 = `images/dice${randomNumber1}.png`;
var imageString2 = `images/dice${randomNumber2}.png`;

//DOM query to set the correct dice images according to random numbers 
document.querySelectorAll("img")[0].setAttribute("src", imageString1); 
document.querySelectorAll("img")[1].setAttribute("src", imageString2); 

//Set which player wins and display in h1 
if(randomNumber1 > randomNumber2){ //player 1 wins
    document.querySelector("h1").textContent = "⭐️ Player 1 Wins!"; 
}
else if(randomNumber1 < randomNumber2){ //player 2 wins
    document.querySelector("h1").textContent = "⭐️ Player 2 Wins!"; 
}
else { //tie
    document.querySelector("h1").textContent = "Draw!"; 
}