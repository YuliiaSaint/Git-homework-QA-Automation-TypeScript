// ====== Порівняння з приведенням типів ======
let a = 7;
let b = "10";
let c = false;

console.log("=== Порівняння з приведенням типів ===");
console.log("a == b:", a == b);   // false (7 != 10)
console.log("a === b:", a === b); // false (число vs string)
console.log("a != b:", a != b);   // true
console.log("a !== b:", a !== b); // true
console.log("a == c:", a == c);   // false (7 != false)
console.log("a === c:", a === c); // false (число vs boolean)
console.log("b == c:", b == c);   // false ("10" != false)
console.log("b === c:", b === c); // false

// ====== Порівняння рядків ======
a = "apple";
b = "banana";

console.log("=== Порівняння рядків ===");
console.log("a > b:", a > b);   // false ("apple" < "banana")
console.log("a < b:", a < b);   // true
console.log("a == b:", a == b); // false
console.log("a != b:", a != b); // true

// ====== Логічні оператори ======
a = 12;
b = 20;

console.log("=== Логічні оператори ===");
console.log("a > 10 && b < 30:", a > 10 && b < 30);  // true && true = true
console.log("a < 10 || b == 20:", a < 10 || b == 20); // false || true = true
console.log("!(a > 5):", !(a > 5));            // !(true) = false

// ====== Приклади з null / undefined ======
let f = null;
const g = f ?? "значення за замовчуванням";  // оператор null-об’єднання
console.log("=== Nullish coalescing (??) ===");
console.log("f:", f);  
console.log("f ?? 'значення за замовчуванням':", g);  

