import React from 'react';
import ProductCard from './ProductCard';
import './ProductsPage.css';

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, image: 'aloe-vera.jpg' },
  { id: 2, name: 'Cactus', price: 15, image: 'cactus.jpg' },
  { id: 3, name: 'Fern', price: 20, image: 'fern.jpg' },
  { id: 4, name: 'Spider Plant', price: 12, image: 'spider-plant.jpg' },
  { id: 5, name: 'Snake Plant', price: 18, image: 'snake-plant.jpg' },
  { id: 6, name: 'ZZ Plant', price: 25, image: 'zz-plant.jpg' },
];

const ProductsPage = () => {
  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Our Plants</h1>
      </header>
      <main>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductsPage;
