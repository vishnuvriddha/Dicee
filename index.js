var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomDiceImage = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomDiceImage);

var r = Math.floor(Math.random()*6) +1;

document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + r + ".png")

if(randomNumber1 > r){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
} else if (randomNumber1<r) {
  document.querySelector("h1").innerHTML = "Player 2 Wins";
}else{
  document.querySelector("h1").innerHTML = "It's a Draw";
}
