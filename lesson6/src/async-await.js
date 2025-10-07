async function orderPizza() {
  try {
    console.log("Очікуємо підтвердження замовлення...");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error(`Піцерія не відповіла. Статус: ${response.status}`);
    }

    const pizza = await response.json();
    console.log("Замовлення готове:", pizza);
    return pizza;
  } catch (err) {
    console.log("Проблема з замовленням:", err.message);
  }
}

(async () => {
  console.log("Before start");
  const result = await orderPizza();
  console.log("Result:", result);
  console.log("After start");
})();
