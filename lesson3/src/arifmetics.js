let a = 10;       // число
const b = "5";    // строка
const c = true;   // boolean  значення (true = 1, false = 0)

console.log("a + b =", a + b); // число + строка → конкатенація ("105")
console.log("a - b =", a - b); // число - строка → 5 (бо "5" перетворюється в число)
console.log("a * b =", a * b); // число * строка → 50
console.log("a / b =", a / b); // число / строка → 2
console.log("a % 3 =", a % 3); // остача від ділення 10 % 3 → 1
console.log("a ** 2 =", a ** 2); // піднесення до степеня → 100

console.log("a + c =", a + c); // 10 + true → 11
console.log("a - c =", a - c); // 10 - true → 9
console.log("a * c =", a * c); // 10 * true → 10
console.log("a / c =", a / c); // 10 / true → 10

// зміна значення a за допомогою +=, -=, *=, /=

a += 5; // a = 10 + 5 = 15
console.log("a після a += 5:", a);

a -= 2; // a = 15 - 2 = 13
console.log("a після a -= 2:", a);

a *= 2; // a = 13 * 2 = 26
console.log("a після a *= 2:", a);

a /= 2; // a = 26 / 2 = 13
console.log("a після a /= 2:", a);

a %= 5; // a = 13 % 5 = 3
console.log("a після a %= 5:", a);

a **= 3; // a = 3 ** 3 = 27
console.log("a після a **= 3:", a);
