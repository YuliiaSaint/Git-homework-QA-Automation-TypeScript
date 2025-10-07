// спортсмен
const athlete = {
  _name: "Mike",
  _weight: 80, // кг

  performance: {
    _bestSquat: 120, // кг
    _bestBench: 90,  // кг

    // геттер
    get bestSquat() {
      return this._bestSquat + " кг";
    },

    // сеттер
    set bestSquat(value) {
      this._bestSquat = value;
    }
  },

  // getter для імені
  get name() {
    return this._name.toUpperCase();
  },

  // setter для імені
  set name(value) {
    this._name = value.trim();
  },

  // getter для ваги у фунтах
  get weightInPounds() {
    return this._weight * 2.2;
  }
};

// Використання
console.log("Ім'я:", athlete.name);
console.log("Вага у кг:", athlete._weight);
console.log("Вага у фунтах:", athlete.weightInPounds);
console.log("Найкращий присід:", athlete.performance.bestSquat);

athlete.name = "  John  ";
athlete.performance.bestSquat = 130;

console.log("Після зміни імені:", athlete.name);
console.log("Оновлений присід:", athlete.performance.bestSquat);
//В консолі буде
//Ім'я: MIKE
//Вага у кг: 80
//Вага у фунтах: 176
//Найкращий присід: 120 кг
//Після зміни імені: JOHN
//Оновлений присід: 130 кг
