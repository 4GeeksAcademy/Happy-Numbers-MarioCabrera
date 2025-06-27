import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");
};
document.getElementById("start").addEventListener("click", () => {
  const numero = prompt("¿Es tu número feliz?");
  let result = ""
  const historial = new Set();
let registro = []

function esFeliz(n) {
  let num = parseInt(n);

  while (num !== 1 && !historial.has(num)) {
    historial.add(num);
    registro.push(num)
    num = sumaCuadrados(num);
  }

  return num === 1;
}

function sumaCuadrados(num) {
  return num
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, digit) => acc + digit * digit, 0);
}
  if (esFeliz(numero)) {
    result = "Happy! 🎉"
  } else {
    result = "Unhappy 😢"
  }
  document.getElementById("myNumber").innerText = numero
  document.getElementById("result").innerText = result
  document.getElementById("historial").innerHTML = registro
  
})



// var digits = numbers.toString().split('');
// var realDigits = digits.map(Number)
// console.log(realDigits);