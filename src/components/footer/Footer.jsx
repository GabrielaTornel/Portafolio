import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Gabriela Tornel</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">Sobre mí</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/gabriela-tornel-0a6a09128/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/GabrielaTornel" target="_blank" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer