import React from 'react';
import IMG1 from '../../assets/creditCard.png';
import IMG2 from '../../assets/dataLovers.png';
import IMG3 from '../../assets/redSocial.png';
import IMG4 from '../../assets/burguerQ.png';


// import IMG5 from '../../assets/news.png';


import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Credit card: Dejando huellas',
      img: IMG1,
      description:
        'Página web diseñada para poder realizar donaciones de manera segura teniendo acceso a un campo donde al ingresar la tarjeta permite al usuario corroborar si su tarjeta es valida o no.',
      technologies: ' HTML | CSS | JavaScript.',
      link: 'https://gabrielatornel.github.io/LIM017-card-validation/',
      github: 'https://github.com/GabrielaTornel/LIM017-card-validation',
    },
    {
      id: 2,
      title: 'Data Lovers: Studio Ghibli and its magic',
      img: IMG2,
      description:
        'A partir de una extensa data de referencia pudimos extraer información para construir una interfaz amigable y entendible por el usuario, en la cual de manera sencilla podía filtrar, ordenar  toda la información de la pagina web',
      technologies: ' HTML | CSS | JavaScript.',
      link: 'https://gabrielatornel.github.io/LIM017-data-lovers/',
      github: 'https://github.com/GabrielaTornel/LIM017-data-lovers',
    },
    {
      id: 3,
      title: 'Red social : Cuy viajero',
      img: IMG3,
      description:
        'Creación de red social que permite  a cualquier usuario crear una cuenta de acceso y loguearse en ella, que al tener el acceso este pueda  crear, editar, borrar y  publicaciones.  ',
      technologies: 'JavaScript | CSS | Firebase  | SPA .',
      link: 'https://cuy-viajero-1jnq895qi-gabrielatornel.vercel.app/',
      github: 'https://github.com/GabrielaTornel/LIM017-social-network',
    },
    {
      id: 4,
      title: 'World News',
      img: IMG4,
      description:
        'El objetivo principal de este proyecto fue construir una interfaz web usando el React. La interfaz debe mostrar el menú (desayuno y resto del día), cada uno con todos sus productos. Donde el usuario debía poder ir eligiendo qué productos agregar y la interfaz debe ir mostrando el resumen del pedido con el costo total',
      technologies: ' React  | CSS  | JavaScript | Firebase.',
      link: 'https://burger-queen-change-gaby-5zpdttkbi-gabrielatornel.vercel.app/',
      github: 'https://github.com/GabrielaTornel/LIM017-burger-queen/tree/change-gaby',
    },
    // {
    //   id: 5,
    //   title: 'Math Resource',
    //   img: IMG5,
    //   description:
    //     'Real-world group project which is still in progress and will provide educational platform for future young developers',
    //   technologies: 'JavaScript | Scss | Python',
    //   link: 'https://lukinoo.github.io/math-resource/',
    //   github: 'https://github.com/lukinoo/math-resource',
    // },
  ];

  return (
    <section id="portfolio">
      <h5>Mis proyectos recientes</h5>
      <h2>Portafolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
