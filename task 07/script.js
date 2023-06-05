// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?
let a = parseInt(prompt("Введіть тризначне число:"));

let firstNumber = Math.floor(a / 100);
let secondNumber = Math.floor((a / 10) % 10);
let lastNumber = a % 10;

let firstMassage;
let lastMassage;

if (firstNumber === secondNumber && firstNumber === lastNumber){
  firstMassage = "Всі цифри однакові"
}else{
  firstMassage = "Не всі цифри однакові"
}

if (firstNumber === secondNumber || firstNumber === lastNumber || lastNumber === secondNumber){
  lastMassage = "Є однакові цифри"
}else{
  lastMassage = "Однакових цифр немає"
}

if (isNaN(a) || a === "" || a === null) {
  alert("Щось пішло не так");
}else if (a < 100 || a > 1000){
  alert("Ви ввели не тризначне число");
}
else{
  alert(`${firstMassage}\n${lastMassage}`)
}

