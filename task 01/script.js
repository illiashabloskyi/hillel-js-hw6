// Дано два різні числа. Визначити, яке з них більше, а яке менше.

let a = parseInt(prompt("Введіть перше число:"));
let b = parseInt(prompt("Введіть друге число:"));


if (isNaN(a) || a === "" || a === null || isNaN(b) || b === "" || b === null) {
  alert("Щось пішло не так");
} else if (a > b) {
  alert("Перше число більше другого\nДруге число менше першого");
} else if (b > a) {
  alert("Друге число більше першого\nПерше число менше другого");
} else {
  alert("Числа рівні");
}
