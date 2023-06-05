// Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.

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
let lastMassage;

if (sum % 2 === 0) {
  firstMassage = "Сума чисел є парною";
} else {
  firstMassage = "Сума чисел є не парною";
}

if (sum % 5 === 0) {
  secondMassage = "Сума чисел є кратною 5";
} else {
  secondMassage = "Сума чисел є не кратною 5";
}

if (mul > 100) {
  lastMassage = "Добуток чисел більший за 100";
} else {
  lastMassage = "Добуток чисел менший за 100";
}

alert(`${firstMassage}\n${secondMassage}\n${lastMassage}`);
