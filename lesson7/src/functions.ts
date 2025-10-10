// Універсальна функція для масивів чисел або рядків
export function sumElements(arr: (number | string)[]): number | string {
  return arr.reduce(
    (sum, item) =>
      typeof item === "number"
        ? (sum as number) + item
        : (sum as string) + item,
    typeof arr[0] === 'string' ? "" : 0
  );
}

// Масив чисел
const reps: number[] = [10, 12, 15];

// Масив рядків
const exercises: string[] = ["squats", "push-ups", "plank"];

console.log("Сума чисел:", sumElements(reps)); // 37
console.log("Об'єднані рядки:", sumElements(exercises)); // "squatspush-upsplank"
