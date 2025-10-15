import type { ProductDto } from './product.dto';

export class Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };

  constructor(product: ProductDto) {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.description = product.description;
    this.category = product.category;
    this.image = product.image;
    this.rating = product.rating;
  }

  getShortInfo(): string {
    return `${this.title} - ${this.price}€ (${this.category})`;
  }

  getRatingInfo(): string {
    return `Rate: ${this.rating.rate}, Votes: ${this.rating.count}`;
  }
}