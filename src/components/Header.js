import React from 'react';
import './styles/Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Замените на путь к вашему логотипу

const Header = () => {
  return (
    <div className="panel">
      <img src="logo.png" alt="Логотип" className="logo" />
      <ul className="menu">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/products">Товары</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
      </ul>
      <div className="buttons">
        <button><Link to="/login">Войти</Link></button>
        <button><Link to="/register">Зарегистрироваться</Link></button>
      </div>
    </div>
  );
};

export default Header;
