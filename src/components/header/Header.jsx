import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Gabriela tornel</h1>
        <h5 className="text-light">Front-End Developer Jr.</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Bajar
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
