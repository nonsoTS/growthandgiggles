import React from 'react';
import { motion } from 'framer-motion';

const TrustBanner = () => {
  const clients = [
    { name: "Levah.co", id: 1 },
    { name: "Watercress Hotel", id: 2 },
    { name: "Riskgratis", id: 3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 bg-gray-900 border-y border-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-yellow-400 uppercase tracking-widest">
            Trusted by Africa's boldest startups
          </p>
        </div>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-12 md:gap-24"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {clients.map((client) => (
            <motion.div 
              key={client.id} 
              variants={itemVariants}
              className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer"
            >
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                {client.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBanner;