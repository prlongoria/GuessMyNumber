'use strict';
/*
//para seleccionar la clase de html que me interesa, por eso un . si fuera un id sería un #
console.log(document.querySelector('.message').textContent); //selecciono el elemento con querySelector y luego leo lo de ese elemento con la
//propiedad textContent(lee lo que tengo puesto en el HTML)

//DOM(árbol): punto de conexión entre documentos HTML y código Javascript (el navegador lo crea automáticamente cuando se carga la página HTML)


console.log(document.querySelector('.message').textContent); //selecciono el elemento con querySelector y luego leo lo de ese elemento con la

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//console.log(document.querySelector('.guess').value);
//document.querySelector('.guess').value = 27;*/

//Voy a hacer que escoja un número ramdom entre 1 y 20:
//const number = Math.random();  //random escoge un número aleatorio entre 0 y 1, sin llegar a 1
//así que debo multiplicarlo por 20 y para ello debo hacer lo siguiente:
//const number = Math.trunc(Math.random()*20);
//pero esto me da un número entre 0 y 20 pero con decimales y sin llegar a 20, así que debo sumarle 1 para que el número sea entre 1 y 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber; //si pongo esto aparecerá en la página el número ramdom, es sólo para probar que funciona bien
let score = 20; //para que aparezca una puntuación inicial de 20 y esta irá aumentando o disminuyendo a medida que jugamos

//Voy a hacer que al clic en el botón Check ocurra lo que quiero:
//cojo el botón check, y le digo con el eventListener que cuando le haga clic, ocurra
//lo que dice la función que he desarrollado:
document.querySelector('.check').addEventListener('click', function () {
  //addEventListener('evento que desencadena todo'(hacer clic), lo que quiero que pase cuando ese evento (clic) ocurra)
  const guess = Number(document.querySelector('.guess').value); //que coja el valor que meten en guess al hacer clic en Check / y que lo convierta a Number para poder compararlo con el que escoge aleatoriamente

  //When there is no input:
  if (!guess) {
    //si no hay nada en guess(en el recuadro)
    document.querySelector('.message').textContent = '⛔No number!';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!'; //aquí cambio el texto del message cuando el número sea el correcto
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //When guess is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🖲️ Too high!';
      score--; //es lo mismo que: score = score -1; para que disminuya la puntuación por haber perdido
      document.querySelector('.score').textContent = score;

      if (score <= 0) {
        document.querySelector('.message').textContent =
          '🧨 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }

    //When guess is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🪫 Too low!';
      score--; //es lo mismo que: score = score -1; para que disminuya la puntuación por haber perdido
      document.querySelector('.score').textContent = score;
    }
    if (score <= 0) {
      document.querySelector('.message').textContent = '🧨 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//addEventListener es como un trigger, o eso entendí yo
