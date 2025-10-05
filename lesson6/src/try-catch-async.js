function throwError(resource) {
  throw new Error(`Помилка: піцерія ${resource} не відповідає`);
}

function backupPizzeria(resource) {
  return {
    resource,
    result: "Піца з якоїсь запасної піцерії",
    status: 200
  };
}

function orderPizza(useBackup = true) {
  let response;

  try {
    // тут спеціально ніби як "ламаємо" головну піцерію
    response = throwError("Main Pizzeria");
  } catch (e) {
    console.log("Сталася помилка:", e.message);

    if (useBackup) {
      // якщо дозволено → замовляємо в запасній піцерії
      response = backupPizzeria("Backup Pizzeria");
    } else {
      // інакше кидаємо помилку далі
      throw e;
    }
  }

  console.log("Результат замовлення:", response);
  return response;
}

// Тест
orderPizza(true);  // з запасною піцерією
orderPizza(false); // без запасної піцерії → помилка

