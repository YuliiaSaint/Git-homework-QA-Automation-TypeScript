import type { ProductDto } from './models/product.dto';
import { Product } from './models/product.model';
import { ExtendedProduct } from './abstractions';

//Функція для запиту + повернення типізованого DTO
async function getProductsData(): Promise<ProductDto[]> {
  const response = await fetch('https://fakestoreapi.com/products');
  const json = await response.json();
  return json as ProductDto[];
}

// Виклик основної логіки
(async () => {
    const products = await getProductsData();

  //Перетворюю тепер DTO → клас Product (нові об'єкти)
  const productModels = products.map(p => new Product(p));

  //Вивід короткої інформації по кожному мому товару
  productModels.forEach(p => {
 console.log(p.getShortInfo());
    console.log(p.getRatingInfo());
  });

  //Фільтр дешевих товарів (ціна < 50)
  const cheapProducts = productModels.filter(p => p.price < 50);
  console.log('Cheap products:', cheapProducts);

  //Використання абстракції та наслідування
  const demoProduct = new ExtendedProduct(
    productModels[0].id,
    productModels[0].title,
    productModels[0].price,
    productModels[0].category
  );
  console.log('Extended product example:', demoProduct.getInfo());
})();