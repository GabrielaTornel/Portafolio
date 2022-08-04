import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.jpg";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
        <h2>Sobre mí</h2>
        <p>
            Soy Front-End developer , me apasiona expandir mis conocimientos con
            gran entusiasmo y soy capaz de poder transmitirlos los demás . A
            partir de mi formación como developer en Laboratoria he podido
            desarrollar páginas interactivas que resuelvan problemas reales. Soy
            comprometida con un alto nivel de adaptabilidad y me gusta trabajar
            en equipo. Busco desarrollarme y crecer profesionalmente en el mundo
            de la tecnología aportando soluciones digitales que impacten
            positivamente , creando nuevas experiencias para los usuarios,
            obteniendo gran receptividad y resultados novedosos .
          </p>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>6 Meses</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>4 proyectos completados</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
