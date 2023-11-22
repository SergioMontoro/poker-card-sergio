/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // Arrays con los valores de las cartas y los palos
  let card = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "&#9813;",
    "&#9818;"
  ];
  let suit = [
    ["hearts", "♥"],
    ["diamonds", "♦"],
    ["clubs", "♣"],
    ["spades", "♠"]
  ];

  // Elección aleatoria de cartas y palos
  let randomSuit = Math.floor(Math.random() * 3);
  let randomCard = Math.floor(Math.random() * 13);

  // Inyección de los datos en el HTML
  document.getElementById("card-body-number").innerHTML = card[randomCard];
  document.getElementById("card-top-suit").innerHTML = suit[randomSuit][1];
  document.getElementById("card-bottom-suit").innerHTML = suit[randomSuit][1];

  // Inyección del palo en la clase de la carta
  let cardClass = document.getElementById("card");
  cardClass.className = "card " + suit[randomSuit][0] + " px-3";

  //Elección dinámica del tamaño de la carta
  const heightInput = document.getElementById("height-input");

  heightInput.addEventListener("change", function() {
    let height = document.getElementById("height-input").value;
    if (height < 250 || height > 800) {
      return false;
    } else {
      let width = height * 0.75;
      document.getElementById("card").style.height = height + "px";
      document.getElementById("card").style.width = width + "px";
    }
  });

  setTimeout(() => {
    document.location.reload();
  }, 30000);
};
