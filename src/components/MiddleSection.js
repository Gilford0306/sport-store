import React from 'react';
import './styles/MiddleSection.css';
import clothingImage from '../assets/Clothing.jpg'; // путь к изображению одежды
import footwearImage from '../assets/Footwear.jpg'; // путь к изображению обуви
import accessoriesImage from '../assets/Accessories.jpg'; // путь к изображению аксессуаров
import magazine from '../assets/magazine.jpg'; 

function MiddleSection() {
  return (
    <div className="middle-section">
      <h2>РУХАЙСЯ</h2>
      <p>до мети з комфортом!</p>
      <div className="images-container">
        <div className="image-box">
          <img src={clothingImage} alt="Clothing" />
          <p className='image-with-text'>ОДЯГ</p>
            <a href="#"><button className="shop-button-middle">Магазин</button></a> 
        </div>
        <div className="image-box">
          <img src={footwearImage} alt="Footwear" />
          <p>ВЗУТТЯ</p>
            <a href="#"><button className="shop-button-middle">Магазин</button></a> 
        </div>
        <div className="image-box">
          <img src={accessoriesImage} alt="Accessories" />
          <p>АКСЕСУАРИ</p>
            <a href="#"><button className="shop-button-middle">Магазин</button></a> 
        </div>
      </div>
    </div>
  );
}
export default MiddleSection;
