// рахує суму чисел у масиві
function sumNumbers(numbers) {
  let sum = 0; // початкове значення
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i]; // додаємо кожен елемент
  }
  return sum; // повертаємо результат
}

// об’єднує всі елементи масиву рядків
function joinStrings(strings) {
  return strings.join(" "); // об’єднання через пробіл
}

// універсальна функція для чисел і рядків (через reduce)
function sumElements(arr) {
  return arr.reduce(
    (sum, num) => sum + num,
    typeof arr[0] === "string" ? "" : 0
  );
}

// Масив чисел (повтори в залі)
const reps = [10, 12, 15];

// Масив рядків (вправи у тренуванні)
const exercises = ["squats", "push-ups", "plank"];

// Виклик функцій
console.log("Загальна кількість повторів:", sumNumbers(reps));
console.log("Список вправ:", joinStrings(exercises));

// Виклик універсальної функції
console.log("Універсальна функція (числа):", sumElements(reps));
console.log("Універсальна функція (рядки):", sumElements(exercises));
