// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?
let a = parseInt(prompt("Введіть тризначне число:"));

if (isNaN(a) || a === "" || a === null) {
  alert("Щось пішло не так");
}

let firstNumber = Math.floor(a / 100);
let secondNumber = Math.floor((a / 10) % 10);
let lastNumber = a % 10;

let sum = firstNumber + secondNumber + lastNumber;
let mul = firstNumber * secondNumber * lastNumber;

let firstMassage;
let secondMassage;