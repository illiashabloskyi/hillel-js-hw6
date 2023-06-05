// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

let a = parseFloat(prompt("Введіть відстань у кілометрах:"));
let b = parseFloat(prompt("Введіть відстань у футах:"));

kmOnM = a * 1000;
fOnM = b * 0.305;

if (isNaN(a) || a === "" || a === null || isNaN(b) || b === "" || b === null) {
  alert("Щось пішло не так");
} else if (kmOnM < fOnM) {
  alert(`Відстань у км менше ніж футах`);
} else if (fOnM < kmOnM) {
  alert(`Відстань у футах менше ніж км`);
} else {
  alert("Відстані рівні");
}
