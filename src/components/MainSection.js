import React from 'react';
import './styles/MainSection.css';
import HeaderImage from './HeaderImage';
import MiddleSection from './MiddleSection';
import SalesCarousel from './SalesCarousel';


function MainSection() {
  return (
    <div className="main-section">
      <HeaderImage />
      <MiddleSection />
      <SalesCarousel />
    </div>
  );
}

export default MainSection;
