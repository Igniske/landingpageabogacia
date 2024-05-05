function Icons(){

    document.querySelectorAll('.container').forEach(container => {
        container.addEventListener('click', function(event) {
          const toggleText = container.querySelector('.toggle-text');
          const hiddenText = container.querySelector('.hidden-text');
          if (event.target === toggleText) {
            const currentDisplay = window.getComputedStyle(hiddenText).display;
            hiddenText.style.display = currentDisplay === 'none' ? 'block' : 'none';
          }
        });
      });

    return(
        <>
            <div className="h-full bg-black flex flex-col space-y-16 py-8 md:py-16 justify-center items-center m-auto">
        
                <div className="flex flex-col justify-center items-center relative container">
                    <div className="h-24 w-24 border-white border-2"></div>
                    <h3 className="text-white hover:text-red-900 cursor-pointer my-4 text-4xl text-center toggle-text">Ciberseguridad</h3>
                    <div className="w-2/3 md:w-1/2">
                    <p className="text-white hidden-text text-lg text-justify">Los asesoramos en la prevención y gestión de brechas de seguridad de la información a fin de prevenir ataques cibernéticos mediante ransomware, malware o cualquier otro tipo de software. Analizamos el estado de situación de tu organización y realizamos la política de ciberseguridad que mejor se ajusta a tus necesidades.</p>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center relative container">
                    <div className="h-24 w-24 border-white border-2"></div>
                    <h3 className="text-white hover:text-red-900 cursor-pointer my-4 text-4xl text-center toggle-text">Proteccion y privacidad</h3>
                    <div className="w-2/3 md:w-1/2">
                    <p className="text-white hidden-text text-lg text-justify">Te ayudamos con todo lo necesario para cumplir con los estándares necesarios en la materia. Los acompañamos en el diseño de nuevos productos y servicios con la metodología de privacidad desde el diseño.</p>
                    </div>
                </div>
                <div className="w-5/6 md:w-3/5">
                    <p className="text-2xl font-bold text-white">Si quieres conocer más sobre nuestros productos y servicios, contáctanos.</p>
                </div>
        </div>
        </>
    )
}

export default Icons;