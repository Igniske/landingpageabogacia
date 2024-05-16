import React, { useState, useEffect, useRef } from 'react';
import '../src/App.css'; // Import the CSS file with animations
import Imagen2 from '../src/assets/image2.png';
import Imagen4 from '../src/assets/image4.png';
import Imagen5 from '../src/assets/image5.png';
import Imagen1 from '../src/assets/seguridad.png';
import Imagen3 from '../src/assets/image3.png';

function Icon({ image, title, description, index, visibleTextIndex, toggleTextVisibility, animationApplied }) {
  const animationClass = animationApplied ? (index % 2 === 0 ? 'animate-slide-left visible' : 'animate-slide-right visible') : '';

  return (
    <div className={`flex flex-col px-8 md:px-0 justify-center items-center relative container ${animationClass}`}>
      <img src={image} className="h-48 w-48" onClick={() => toggleTextVisibility(index)} />
      <h3
        className="text-black hover:text-red-900 cursor-pointer my-4 text-4xl text-center toggle-text"
        onClick={() => toggleTextVisibility(index)}
      >
        {title}
      </h3>
      <div className={`w-full md:w-2/3 text-black text-lg text-justify ${visibleTextIndex === index ? 'visible-text' : 'hidden-text'}`}>
        <p className="text-black text-lg md:text-justify">{description}</p>
      </div>
    </div>
  );
}


function Icons() {
  const iconsRef = useRef(null);
  const [visibleTextIndex, setVisibleTextIndex] = useState(null);
  const [animationsApplied, setAnimationsApplied] = useState(Array(5).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const elements = iconsRef.current.querySelectorAll('.container');
      elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < window.innerHeight * 0.75 && !animationsApplied[index]) {
          setAnimationsApplied((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationsApplied]);

  const toggleTextVisibility = (index) => {
    setVisibleTextIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const iconsData = [
    {
      image: Imagen2,
      title: 'Asesoría jurídica y representación legal',
      description:
        'Con más de cuarenta y cinco años de trayectoria y experiencia, nuestro equipo te brindará soluciones a conflictos complejos en materia penal, civil y ambiental, con el máximo respeto por el código de ética y secreto profesional.',
    },
    {
      image: Imagen4,
      title: 'Compliance empresarial y derecho ambiental',
      description:
        'Trabajamos en conjunto con tu organización para que alcance la mayor optimización de sus políticas en normas ambientales y estrategias de análisis de riesgos.',
    },
    {
      image: Imagen5,
      title: 'Derecho de propiedad intelectual',
      description:
        'En el marco del crecimiento del e-commerce que asume nuevas competencias en el marco de derechos de autor, te brindamos la protección jurídica necesaria.',
    },
    {
      image: Imagen1,
      title: 'Ciberdelincuencia',
      description:
        'Contamos con profesionales experimentados en la materia, proporcionando capacitaciones con herramientas específicas sobre los riesgos inherentes a las tecnologías de información, para que tu equipo pueda desempeñar sus actividades de modo seguro.',
    },
    {
      image: Imagen3,
      title: 'Adecuación a normativas',
      description:
        'La importancia de la adaptación de las empresas a las nuevas e incipientes normativas en el mundo digital, evita conflictos legales y potencia el crecimiento tanto de la organización como de sus integrantes. Por eso orientamos con estrategias legales de cumplimiento a las exigencias que se imponen.',
    },
  ];

  return (
    <>
      <div ref={iconsRef} className="h-full bg-white flex flex-col space-y-16 py-8 md:py-16 justify-center items-center m-auto">
        {iconsData.map((icon, index) => (
          <Icon
            key={index}
            index={index}
            image={icon.image}
            title={icon.title}
            description={icon.description}
            visibleTextIndex={visibleTextIndex}
            toggleTextVisibility={toggleTextVisibility}
            animationApplied={animationsApplied[index]}
          />
        ))}
      </div>
    </>
  );
}

export default Icons;