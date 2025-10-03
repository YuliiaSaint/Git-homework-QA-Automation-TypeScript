//console.log(fruits[0]); // яблуко
//console.log(fruits[1]); // апельсин

//fruits.push("груша");      // додає в кінець
//fruits.pop();              // забирає останнє
//fruits.unshift("персик");  // додає на початок
//fruits.shift();            // забирає перший


// Створення масиву
const fruits = ["яблуко", "апельсин", "слива"];
console.log("Початковий список:", fruits);

// Доступ по індексу
console.log("Перший фрукт:", fruits[0]);
console.log("Другий фрукт:", fruits[1]);

// Додавання і видалення
fruits.push("груша");      // додає в кінець
console.log("Після push:", fruits);

fruits.pop();              // видаляє останнє
console.log("Після pop:", fruits);

fruits.unshift("персик");  // додає на початок
console.log("Після unshift:", fruits);

fruits.shift();            // видаляє перший
console.log("Після shift:", fruits);

// filter: залишаємо тільки строки
const mixed = ["яблуко", 25, "апельсин", true];
const onlyStrings = mixed.filter(item => typeof item === "string");
console.log("Тільки строки:", onlyStrings);

// find: знайти перший рядок
const found = mixed.find(item => typeof item === "string");
console.log("Перший знайдений рядок:", found);

// sort: сортування чисел
const numbers = [3, 1, 7, 2];
numbers.sort((a, b) => a - b);
console.log("Відсортовані числа:", numbers);

// forEach: проходимо по масиву
fruits.forEach((fruit, i) => {
  console.log(`${i + 1}. ${fruit}`);
});

// map: робимо новий масив
const upper = fruits.map(fruit => fruit.toUpperCase());
console.log("Великі літери:", upper);
