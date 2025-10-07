function orderPizza() {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
      console.log("Дзвінок у піцерію:", response.status);

      if (!response.ok) {
        throw new Error(`Ніхто не відповіВ. Статус: ${response.status}`);
      }

      return response.json();
    })
    .then(pizza => {
      console.log("Замовлення прийнято:", pizza);
      return pizza;
    })
    .catch(err => {
      console.log("Якась роблема з замовленням:", err.message);
    });
}

orderPizza();

