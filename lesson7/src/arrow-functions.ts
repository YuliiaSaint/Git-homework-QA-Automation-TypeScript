// Стрілкова функція для віку
export const calcAgeArrow = (birthYear: number): number => 2037 - birthYear;

// Стрілкова функція для чисел (сума)
export const sumNumbers = (numbers: number[]): number => {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  return sum;
};

// Стрілкова функція для рядків (JOIN)
export const joinStrings = (strings: string[]): string => strings.join(", ");

// Масиви
const reps: number[] = [8, 8, 12];
const exercises: string[] = ["running", "pull-ups", "deadlift"];

// Виклики
console.log("Вік (Arrow Function):", calcAgeArrow(1991)); // 46
console.log("Сума повторів:", sumNumbers(reps)); // 28
console.log("Список вправ:", joinStrings(exercises)); // running, pull-ups, deadlift

