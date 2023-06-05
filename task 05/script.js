// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
let a = parseInt(prompt("Введіть число:"));
let firstNumber = Math.floor(a / 10);
let lastNumber = a % 10;

if (isNaN(a) || a === "" || a === null) {
  alert("Щось пішло не так");
} else if (firstNumber > lastNumber) {
  alert(`Цифра ${firstNumber} більша за цифру ${lastNumber}`);
} else if (lastNumber > firstNumber) {
  alert(`Цифра ${lastNumber} більша за цифру ${firstNumber}`);
} else {
  alert(`Цифри рівні`);
}
