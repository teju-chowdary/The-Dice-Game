// Inside index.js, create a new variable called randomNumber1 then set the value of this variable to a random number between 1 and 6. Test it out in the console to make sure it works as expected.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNumber = "dice" + randomNumber1;
var path1 = "./images/" + diceNumber+".png";
document.getElementsByClassName("img1")[0].setAttribute("src" , path1);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceNumber = "dice" + randomNumber2;
var path2 = "./images/" + diceNumber+".png";
document.getElementsByClassName("img1")[0].setAttribute("src" , path2);
var text = "";

if(randomNumber1 > randomNumber2){
    text = "Player 1 Wins";
}else if(randomNumber2 > randomNumber1){
    text = "Player 2 wins";
}else{
    text = "It's a draw";
}
document.querySelector("h1").innerHTML = text;

