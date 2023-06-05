// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
let a = parseInt(prompt("Введіть шестизначне число:"));

let oneNumber = Math.floor(a / 100000);
let twoNumber = Math.floor((a / 10000) % 10);
let threeNumber = Math.floor((a / 1000) % 10);
let fourNumber = Math.floor((a / 100) % 10);
let fiveNumber = Math.floor((a / 10) % 10);
let sixNumber = a % 10;

let massage;

if (
  oneNumber === sixNumber &&
  twoNumber === fiveNumber &&
  threeNumber === fourNumber
) {
  massage = `Число ${a} дзеркальне`;
} else {
  massage = `Число ${a} не дзеркальне`;
}

if (isNaN(a) || a === "" || a === null) {
  alert("Щось пішло не так");
} else if (a < 100000 || a > 999999) {
  alert("Ви ввели не шестизначне число");
} else {
  alert(`${massage}`);
}
