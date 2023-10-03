import analyzer from './analyzer.js';

//Buscar y seleccionar para asignarlo a cada variable

const boton = document.getElementById("reset-button")
const cajadetexto = document.querySelector("textarea");
const caracteres = document.querySelector('[data-testid="character-count"]');
const palabras = document.querySelector('[data-testid="word-count"]');
const sinEspacios = document.querySelector('[data-testid="character-no-spaces-count"]');
const numeros = document.querySelector('[data-testid="number-count"]');
const sumanumeros = document.querySelector('[data-testid="number-sum"]');
const longitud = document.querySelector('[data-testid="word-length-average"]');


cajadetexto.addEventListener("input", e =>{
  const text = e.target.value
  longitud.innerHTML = "Longitud: " + analyzer.getAverageWordLength(text);
  caracteres.innerHTML ="Caracteres: " + analyzer.getCharacterCount(text);
  palabras.innerHTML = "Palabras: " + analyzer.getWordCount(text);
  sinEspacios.innerHTML = "Caracteres sin espacios: " + analyzer.getCharacterCountExcludingSpaces(text);
  numeros.innerHTML = "Números: " + analyzer.getNumberCount(text);
  sumanumeros.innerHTML ="Suma de números: " + analyzer.getNumberSum(text);
  longitud.innerHTML = "Longitud: " + analyzer.getAverageWordLength(text);
  //utilizo en addEventListener para que cada vez que ingrese algo en la caja de texto(textarea) se actualize el elemto(e) y  llame a la funcion Analyzer, para que calcule y actualize el resultado de caracteres, palabras, numeros, etc

})

boton.addEventListener("click", function(){
  cajadetexto.value=""
  longitud.innerHTML = "Longitud: 0"
  palabras.innerHTML = "Palabras: 0"
  caracteres.innerHTML= "Caracteres: 0"
  sinEspacios.innerHTML = "Caracteres sin espacios: 0"
  numeros.innerHTML = "Números: 0"
  sumanumeros.innerHTML ="Suma de números: 0"
  longitud.innerHTML = "Longitud: 0"

})

