export interface ProductRating {
  rate: number;
  count: number;
}

export interface ProductDto {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}