import React, { useEffect, useRef } from 'react';
import '../src/App.css'; // Import the CSS file with animations

function Icons() {
    const iconsRef = useRef(null);
  
    useEffect(() => {
      const handleScroll = () => {
        const elements = iconsRef.current.querySelectorAll('.container');
        elements.forEach((element, index) => {
          const elementTop = element.getBoundingClientRect().top;
          if (elementTop < window.innerHeight * 0.75) {
            element.classList.remove('hide');
            element.classList.add(index % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right');
          }
        });
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
      <>
        <div ref={iconsRef} className="h-full bg-black flex flex-col space-y-16 py-8 md:py-16 justify-center items-center m-auto">
  
          <div className="flex flex-col justify-center items-center relative container hide">
            <div className="h-24 w-24 border-white border-2"></div>
            <h3 className="text-white hover:text-red-900 cursor-pointer my-4 text-4xl text-center toggle-text">Ciberseguridad</h3>
            <div className="w-2/3 md:w-1/2">
              <p className="text-white hidden-text text-lg text-justify">Los asesoramos en la prevención y gestión de brechas de seguridad de la información a fin de prevenir ataques cibernéticos mediante ransomware, malware o cualquier otro tipo de software. Analizamos el estado de situación de tu organización y realizamos la política de ciberseguridad que mejor se ajusta a tus necesidades.</p>
            </div>
          </div>
  
          <div className="flex flex-col justify-center items-center relative container hide">
            <div className="h-24 w-24 border-white border-2"></div>
            <h3 className="text-white hover:text-red-900 cursor-pointer my-4 text-4xl text-center toggle-text">Proteccion y privacidad</h3>
            <div className="w-2/3 md:w-1/2">
              <p className="text-white hidden-text text-lg text-justify">Te ayudamos con todo lo necesario para cumplir con los estándares necesarios en la materia. Los acompañamos en el diseño de nuevos productos y servicios con la metodología de privacidad desde el diseño.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Icons;