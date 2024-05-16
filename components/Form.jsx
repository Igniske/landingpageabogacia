import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Form() {
  const [isInView, setIsInView] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  return (
    <>
      <div className="form-bg py-16">
        <div className="w-5/6 md:w-4/5 m-auto">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 1 }} // Animation duration
            className="text-3xl font-bold text-white text-center"
          >
            Si quieres conocer más sobre nuestros productos y servicios, contáctanos.
          </motion.p>
        </div>
        <div className="flex justify-center">
          <form className=" w-4/5 md:w-full max-w-lg mt-8">
            <div className="mb-6">
              <label htmlFor="nombre" className="block text-lg font-medium text-white mb-2">
                Nombre y apellido <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="telefono" className="block text-lg font-medium text-white mb-2">
                Teléfono <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="telefono"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="comentario" className="block text-lg font-medium text-white mb-2">
                Comentario <span className="text-red-600">*</span>
              </label>
              <textarea
                id="comentario"
                className="w-full px-4 py-2 border rounded-lg h-32 resize-none focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-1/4 px-4 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
