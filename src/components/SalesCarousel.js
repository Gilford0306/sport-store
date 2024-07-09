import React from 'react';
import './styles/SalesCarousel.css';

// Пример данных для товаров
const products = [
  { id: 1, image: 'path/to/image1.jpg', name: 'Product 1' },
  { id: 2, image: 'path/to/image2.jpg', name: 'Product 2' },
  { id: 3, image: 'path/to/image3.jpg', name: 'Product 3' },
  { id: 4, image: 'path/to/image4.jpg', name: 'Product 4' },
  { id: 5, image: 'path/to/image5.jpg', name: 'Product 5' },
];

const SalesCarousel = () => {
  return (
    <div className="hit-prodagy">
      <h1>Хит продажу</h1>
      <div className="product-container">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="product-card">
            <a href="#"><button className="shop-button">Магазин</button></a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SalesCarousel;
