// Функцію мені скорегували
function sumElements(arr: number[] | string[]): number | string {
  return arr.reduce(
    (sum, item) =>
      typeof item === "number"
        ? (sum as number) + item
        : (sum as string) + item,
    typeof arr[0] === "string" ? "" : 0
  );
}

//Тестові дані
const reps: number[] = [10, 12, 15];
const exercises: string[] = ["squats", "push-ups", "plank"];

//Виклики функції
console.log("Сума чисел:", sumElements(reps)); // 37
console.log("Об’єднані рядки:", sumElements(exercises)); // "squatspush-upsplank"