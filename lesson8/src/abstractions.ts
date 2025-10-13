export abstract class ProductBase {
  id: number;
  title: string;
  price: number;

  constructor(id: number, title: string, price: number) {
    this.id = id;
    this.title = title;
    this.price = price;
  }

  abstract getInfo(): string;
}

// Наслідування
export class ExtendedProduct extends ProductBase {
  category: string;

  constructor(id: number, title: string, price: number, category: string) {
    super(id, title, price);//тут наслідуємо базові поля
    this.category = category;
  }

  getInfo(): string {
    return `${this.title} (${this.category}) - ${this.price}$`;
  }
}
