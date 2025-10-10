import { add, multiply, subtract, average } from './mathOperations';

// Підрахунок повторів у залі
const repsDay1: number = 10;
const repsDay2: number = 12;
const repsDay3: number = 15;

// Використання функцій
console.log("День 1 + День 2 =", add(repsDay1, repsDay2));           // 22
console.log("День 2 * День 3 =", multiply(repsDay2, repsDay3));      // 180
console.log("День 3 - День 1 =", subtract(repsDay3, repsDay1));      // 5

// Масив повторів за 3 дні
const repsAllDays: number[] = [repsDay1, repsDay2, repsDay3];
console.log("Середнє значення повторів:", average(repsAllDays));     // 12.33
