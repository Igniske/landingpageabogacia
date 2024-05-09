import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Footer() {
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
      <div className='gradient-bg flex justify-center items-center h-full'>
        <div className="text-white py-36 flex flex-col text-center">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 1 }} // Animation duration
            className="text-5xl font-bold"
          >
            ALEJANDRO LOPEZ
          </motion.h2>
          <div className="w-4/5 md:w-1/2 flex pt-8 m-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }} // Initial animation state
              animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
              transition={{ duration: 1, delay: 0.5 }} // Animation duration with a delay
              className="mt-4"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi magni similique doloribus quidem in perferendis fugiat, exercitationem eveniet veritatis numquam? Quos, dolores. In repudiandae soluta quas pariatur expedita magni ad!
            </motion.p>
          </div>
        </div>
      </div>

      <div className="footer-bg w-full flex justify-center items-center">
        <p className="text-xl text-gray-400">Alejandro Lopez 2024 | Todos los derechos reservados</p>
      </div>
    </>
  );
}

export default Footer;
