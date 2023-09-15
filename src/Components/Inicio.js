import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'; 
import Imagen1 from '../img/Proyecto1.png'; 
import Imagen2 from '../img/Proyecto2.jpg'; 
import Imagen3 from '../img/Proyecto3.jpg';

const Navbar = () => {
  return (
    <div className='container'>
      <div className='content'>
        <Carousel showArrows={true} showThumbs={false}>
          {/* Agrega  imágenes aquí */}
          <div>
            <img src={Imagen1} alt="Proyecto 1" className="carousel-image" />
          </div>
          <div>
            <img src={Imagen2} alt="Proyecto 2" className="carousel-image" />
          </div>
          <div>
            <img src={Imagen3} alt="Proyecto 3" className="carousel-image" />
          </div>
        </Carousel>
        <div>
          <h1 className='titulo'>Bienvenido al portafolio de Owenn Higuita</h1>
          <h2 className='Contenido'>
              <p>¡Saludos! Mi nombre es Owenn Higuita, y estoy emocionado de compartir mi viaje en el aprendizaje de la programación a través de este portafolio. Aunque soy un principiante en este emocionante campo, he dado mis primeros pasos con determinación y entusiasmo. En este portafolio, encontrarás ejemplos de los proyectos que he emprendido como parte de mi proceso de aprendizaje. Son proyectos simples pero significativos para mí, ya que representan mi dedicación para entender los conceptos fundamentales de la programación y aplicarlos en la práctica. </p> 
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Navbar;



