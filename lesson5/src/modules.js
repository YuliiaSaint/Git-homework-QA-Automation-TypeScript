// modules.js
import { add, multiply, subtract, average } from "./mathOperations.js";

// Підрахунок повторів у залі
const repsDay1 = 10;
const repsDay2 = 12;
const repsDay3 = 15;

// Використання функцій
console.log("День 1 + День 2 =", add(repsDay1, repsDay2));       // 22
console.log("День 2 × День 3 =", multiply(repsDay2, repsDay3));  // 180
console.log("День 3 - День 1 =", subtract(repsDay3, repsDay1));  // 5

// Масив повторів за 3 дні
const repsAllDays = [repsDay1, repsDay2, repsDay3];
console.log("Середнє значення повторів:", average(repsAllDays)); // 12.33

//У консолі:
//День 1 + День 2 = 22
//День 2 × День 3 = 180
//День 3 - День 1 = 5
//Середнє значення повторів: 12.33
