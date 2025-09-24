let age = 20;
const hasID = true;

if (age >= 18 && hasID) {
  console.log("Вхід дозволено: повнолітній та є документ (&&).");
} else {
  console.log("Вхід заборонено: фбо не повнолітній, або немає документа.");
}

let weather = "rain"; // "sunny" | "rain" | "snow"
let temp = 3;

if (weather === "rain" || weather === "snow") {
  console.log("Погана погода: дощ абл сніг (||).");
} else {
  console.log("Погода нормальна.");
}

// Комбінована умова з &&, || та !
// Якщо (дощ і без парасолі) або (температура нижче 0) — краще не виходити
const hasUmbrella = false;

if ((weather === "rain" && !hasUmbrella) || temp < 0) {
  console.log("Краще залишитися вдома (rain && !umbrella) || temp < 0.");
} else {
  console.log("можна виходити.");
}

//Вихідний чи ні: OR
const day = "Sun"; // "Mon".."Sun"
if (day === "Sat" || day === "Sun") {
  console.log("Вихідний день (||).");
} else {
  console.log("Робочий день.");
}

let score = 75;
if (score >= 90) {
  console.log("Оцінка: A");
} else if (score >= 75) {
  console.log("Оцінка: B");
} else if (score >= 60) {
  console.log("Оцінка: C");
} else {
  console.log("Оцінка: D");
}
