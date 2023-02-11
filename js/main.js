'use strict';

//TODO:==============================
// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі, якщо є - виводить повідомлення "Доступ дозволено"

// const res = prompt("Input your name");
// const str = ["Peter", "John", "Igor", "Sasha"];

//TODO:==============================
// Напишіть функцію min(a,b), яка повертає менше із чисел a і b.

//TODO:==============================
// // Що виведе наступний код?
// let fruits = ['Яблука', 'Груша', 'Апельсин'];
// // Додаємо нове значення в "копію"
// let shoppingCart = fruits;
// shoppingCart.push('Банан');
// // що у fruits?
// console.log(fruits.length);

//TODO:===========================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте «Рок-н-рол» в кінець.
// Замініть значення «Блюз» на «Класика».
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.
// const styles = ['jazz', 'blues'];
// styles.push('rock-n-roll');
// console.log(styles.indexOf('blues'));
// styles.splice(1, 1, 'classic');
// console.log(styles.shift());
// console.log(styles);
// styles.unshift('rap', 'reggie');
// console.log(styles);

//TODO:==========================
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

//TODO:==============================
// Напишіть функцію pow(x,n), яка повертає x до ступеня n.
// Інакше висловлюючись, множить x він n разів і повертає результат.
// function pow(x, n) {
//   let total = 1;
//   for (let i = 0; i < n; i += 1) {
//     total *= x;
//   }
//   return total;
// }
// console.log(pow(2, 8));

//TODO:==============================
// Напишіть функцію яка сумуватиме сусідні числа і пушитиме їх в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

//TODO:==========================
//Напишіть функцію logItems(array), яка приймає
//масив та використовує цикл for, який для кожного
//елемента масиву виводитиме повідомлення у форматі
//<номер елемента> - <значення елемента>
//Нумерація елементів має починатися з першого.
//['Джаз', 'Блюз', 'Рок-н-рол', 'Реггі', 'Реп']
//[{name: 'Джаз', engl: "jazz", number: 1}, {name: 'Блюз', engl: "blues", number: 2}, {name: 'Рок-н-рол', engl: "rock 'n' roll", number: 3}, {name: 'Реггі', engl: "reggae", number: 4}, {name: 'Реп', engl: "rap", number: 5} ]

//TODO:==========================
//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив
// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

//TODO:==============================
// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.

// formatMessage("Curabitur ligula sapien", 16); //Повертає 'Curabitur ligula...'.
// formatMessage("Curabitur ligula sapien", 23); //Повертає 'Curabitur ligula sapien'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15); //Повертає 'Nunc sed turpis...'.
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41); //Повертає 'Nunc sed turpis a felis in nunc fringilla'.

//TODO:==========================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function calculateAverage() {
//   const args = arguments;
//   let sum = 0;
//   let totalCount = 0;
//   for (const arg of args) {
//     if (typeof arg !== "number") {
//       continue;
//     }
//     sum += arg;
//     totalCount += 1;
//   }
//   return sum / totalCount;
// }

//TODO:==========================
//Напиши функцію findLongestWord(string)
//яка приймає довільний рядок
//що складається лише з розділених слів
//пробілом (параметр string)
//і повертає найдовше слово у цьому рядку

//TODO:==========================
// Напишіть функції для роботи з масивом
// add(name) додає курс до кінця колекції
// removeCourse(name) видаляє курс із колекції
// updateCourse(oldName, newName) змінює ім'я на нове

//TODO:==========================
// Напишіть код для пошуку пароля в масиві
// Через include і тернарний оператор
// const passwords = ['ajax123', 'polly456', 'mango789', 'semiBold'];
// const password = 'semiBold';

//TODO:==========================
// Напишіть скрипт, який замінює регістр кожного символу
// у рядку на протилежний
// Наприклад 'JavaScript' повинен повернути 'jAVAsCRIPT'

//TODO:============================
//Напишіть функцію unique(arr), яка повертає масив, який
//містить лише унікальні елементи arr.
//const words = ["HTML","CSS", "JS", "React", "JS", "CSS", "JS",
// "Node.js", "JS", "React", "CSS", "React", "HTML", "Node.js"];

//TODO:==============================
// Привести масив до одного рівня
// const arr = [
// [23, 11, ["hello", "world", "Vasya"]]

//TODO:==============================
/*
 * Працюємо з колекцією товарів у кошику:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */
