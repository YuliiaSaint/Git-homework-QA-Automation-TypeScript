// 1. Порівняння  для себе Function Expression vs Arrow Function

// Function Expression
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow Function
const calcAgeArrow = (birthYear) => 2037 - birthYear;

console.log("Function Expression:", calcAge(1991)); // 46
console.log("Arrow Function:", calcAgeArrow(1991)); // 46

// 2. Приклади з масивами (як у functions.js, але стрілкові)

// Стрілкова функція для чисел
const sumNumbers = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    sum = sum + num;
  }
  return sum;
};

// Стрілкова функція для рядків
const joinStrings = (strings) => strings.join(" | ");

// Масиви
const reps = [8, 8, 12];
const exercises = ["running", "pull-ups", "deadlift"];

// Виклик функцій
console.log("Сума повторів:", sumNumbers(reps)); 
console.log("Список вправ:", joinStrings(exercises));

//Що я бачу в консолі
//Function Expression: 46
//Arrow Function: 46
//Сума повторів: 28
//Список вправ: running | pull-ups | deadlift

