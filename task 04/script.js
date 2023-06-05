// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
a = parseInt(prompt("Введіть число:"));
lastNumber = a % 10;

if (isNaN(a) || a === "" || a === null) {
  alert("Щось пішло не так");
} else if (lastNumber % 2 === 0) {
  alert(`Остання цифра ${lastNumber} є парним`);
} else {
  alert(`Остання цифра ${lastNumber} є непарним`);
}
