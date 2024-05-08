import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="h-600px md:h-screen">
        <div
          style={{
            backgroundImage:
              "url('https://i.ibb.co/c63LNmX/abogacia.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-full"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial animation state
            animate={{ opacity: 1, y: 0 }} // Animation when component mounts
            transition={{ duration: 1 }} // Animation duration
            className="absolute inset-x-0 mt-32 flex justify-center items-center"
          >
            <div className="max-w-md md:mx-auto mt-16 mx-8 md:ml-72 rounded-lg z-20">
              <h2 className="text-3xl mx-4 md:text-5xl text-white font-bold leading-tight">
                ABOGACIA, SEGURIDAD Y OTRAS
              </h2>
              <p className="md:text-xl mx-4 text-white font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Commodi magni similique doloribus quidem in perferendis fugiat,
                exercitationem eveniet veritatis numquam? Quos, dolores. In
                repudiandae soluta quas pariatur expedita magni ad!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Home;
