import React from 'react';
import './styles/HeaderImage.css';
import cyclistImage from '../assets/cyclist.png'; // путь к изображению велосипедиста
import vectorImage from '../assets/Vector 1.png';  // путь к векторному изображению
import magtop from '../assets/magtop.png';


function HeaderImage() {
  return (
      
      <div className="header-image-container">  
      <div className="buttons">
        <button>Войти</button>
        <button>Зарегистрироваться</button>
      </div>
      <div className="text-overlay"></div>
      <img src={cyclistImage} alt="Cyclist" className="cyclist-image" />
      <img src={vectorImage} alt="Vector Overlay" className="vector-image" />
      <div className="text-overlay">
        <h1>Твоя перемога ближче, ніж здається!</h1>
        <p>Знижка до 70% на весь асортимент спортивних товарів!</p>
      </div>
      <a href="#"><img src={magtop} alt="magtop" className="magtop1" /></a>
      <a href="#"><img src={magtop} alt="magtop" className="magtop2" /> </a>      
       <a href="#"><img src={magtop} alt="magtop" className="magtop3" /></a>
    </div>
  );
}

export default HeaderImage;
