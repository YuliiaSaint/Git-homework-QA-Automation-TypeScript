//Функція для масиву чисел
export function sumNumbers(arr: number[]): number {
  return arr.reduce((sum, num) => sum + num, 0);
}

//Функція для масиву рядків
export function joinStrings(arr: string[]): string {
  return arr.join("");
}

//Масив чисел
const reps: number[] = [10, 12, 15];

//Масив рядків
const exercises: string[] = ["squats", "push-ups", "plank"];

//Виклики функцій
console.log("Сума чисел:", sumNumbers(reps)); // 37
console.log("Об'єднані рядки:", joinStrings(exercises)); // "squatspush-upsplank"