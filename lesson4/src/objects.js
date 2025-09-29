// === замовлення клієнта ===
const order = {
  id: 101,
  customer: {
    name: "Іван",
    address: "Київ, вул. Хрещатик, 1"
  },
  items: [
    { name: "Ноутбук", price: 20000 },
    { name: "Мишка", price: 500 }
  ],
  getTotal: function () {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  },
  printInfo: function () {
    console.log(`Замовлення №${this.id} (клієнт: ${this.customer.name})`);
    console.log("Товари:");
    this.items.forEach(i => console.log(` - ${i.name}: ${i.price} грн`));
    console.log("Загальна сума:", this.getTotal(), "грн");
  }
};

order.printInfo();
