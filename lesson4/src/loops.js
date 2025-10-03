// 0 → 9 (виводимо наш індекс на кожній ітерації)
for (let i = 0; i <= 9; i++) {
  console.log("i =", i);
}

console.log("---------------");

// 10 → 0 (крок -1, теж виводимо індекс)
for (let i = 10; i >= 0; i--) {
  console.log("i =", i);
}

// ==="підйом ваги в залі" ===

// 1) for: 10 повторень
console.log("Тренування: підйоми штанги");
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Підіймаємо вагу — повторення ${rep}`);
}

// 2) while: працюємо доки є сила
console.log("while: доти, доки не втомилися");
let energy = 5;
while (energy > 0) {
  console.log(`Ще один підхід бо Енергія: ${energy}`);
  energy--;
}

// 3) do...while: хоча б одна спроба ше буде
console.log("do...while: хоча б один підхід");
let tries = 0;
do {
  tries++;
  console.log(`Пробуємо важчу вагу. Спроба ${tries}`);
} while (tries < 3);

// 4) for...of + continue/break: пропускаємо й зупиняємось
console.log("for...of + continue/break");
const targetReps = [1,2,3,4,5,6,7,8,9,10];
for (const rep of targetReps) {
  if (rep === 3) {
    console.log("Розминка — пропускаємо це повторення (continue)");
    continue; // пропускаємо виходить 3
  }
  if (rep === 8) {
    console.log("Відчули біль — зупиняємось (break)");
    break; // зупинились на 7
  }
  console.log(`Підіймаємо: повторення ${rep}`);
}

// 5) Вкладені цикли + break з міткою ( по слайді)
console.log("Вкладені цикли + break із міткою");
outer: for (let set = 1; set <= 3; set++) {
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Сет ${set}, повторення ${rep}`);
    if (set === 2 && rep === 5) {
      console.log("Стоп: розтягнули мяз — перериваємо весь тренінг");
      break outer; // перериває обидва цикли
    }
  }
}
// === Кур’єр доставляє посилки ===

// 1) for: кур’єр має список з 10 адрес
console.log("for: кур’єр відвозить 10 посилок");
for (let stop = 1; stop <= 10; stop++) {
  console.log(`Адреса №${stop}: доставлено`);
}

// 2) while: кур’єр їде, поки є пальне
console.log("while: їдемо, поки є пальне");
let fuel = 5;
while (fuel > 0) {
  console.log(`Їдемо далі. Пальне залишилось: ${fuel}`);
  fuel--;
}
console.log("Пальне закінчилось — повертаємось.");

// 3) do...while: хоча б одну посилку він обов’язково спробує вручити
console.log("do...while: мінімум одна спроба доставки");
let attempts = 0;
do {
  attempts++;
  console.log(`Пробуємо вручити посилку. Спроба ${attempts}`);
} while (attempts < 3);

// 4) continue: якщо вдома нікого нема — пропускаємо цю адресу
console.log("continue: пропускаємо порожній будинок");
const addresses = [1, 2, 3, 4, 5];
for (const a of addresses) {
  if (a === 3) {
    console.log(`Адреса ${a}: нікого нема — continue`);
    continue;
  }
  console.log(`Адреса ${a}: доставлено`);
}

// 5) break: якщо поломка транспорту — маршрут перервано
console.log("break: поломка транспорту");
for (const a of [1, 2, 3, 4, 5]) {
  if (a === 4) {
    console.log("Поломка! Далі не веземо (break).");
    break;
  }
  console.log(`Адреса ${a}: доставлено`);
}

// 6) вкладені цикли + мітка: райони і вулиці
console.log("Вкладені цикли + break із міткою");
outer: for (let district = 1; district <= 3; district++) {
  for (let street = 1; street <= 5; street++) {
    console.log(`Район ${district}, вулиця ${street}: доставляємо`);
    if (district === 2 && street === 3) {
      console.log("ДТП — припиняємо все (break outer).");
      break outer;
    }
  }
}

// 7) for...of: перебираємо конкретні адреси зі списку
console.log("for...of: перебір готового маршруту");
const route = ["Вишнева, 10", "Соборна, 3", "Шевченка, 25"];
for (const address of route) {
  console.log(`Доставляємо на: ${address}`);
}

