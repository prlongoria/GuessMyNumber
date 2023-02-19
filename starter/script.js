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

//Voy a hacer que al clic en el botón Check ocurra lo que quiero:
//cojo el botón check, y le digo con el eventListener que cuando le haga clic, ocurra
//lo que dice la función que he desarrollado:
document.querySelector('.check').addEventListener('click', function () {
  //addEventListener('evento que desencadena todo'(hacer clic), lo que quiero que pase cuando ese evento (clic) ocurra)
  const guess = Number(document.querySelector('.guess').value); //que coja el valor que meten en guess al hacer clic en Check / y que lo convierta a Number para poder compararlo con el que escoge aleatoriamente

  if (!guess) {
    //si no hay nada en guess(en el recuadro)
    document.querySelector('.message').textContent = '⛔No number!';
  }

  //document.querySelector('.message').textContent = '🎉 Correct Number!'; //aquí cambio el texto del message cuando el número sea el correcto
});

//addEventListener es como un trigger, o eso entendí yo)
