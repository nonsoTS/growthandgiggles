import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesPreview = () => {
  const cases = [
    {
      title: "Levah.co",
      category: "E-Commerce",
      metrics: "40% Increase in Traffic",
      image: `https://img.youtube.com/vi/z_mtxERR-Eg/hqdefault.jpg`,
      path: "/case-study/levah"
    },
    {
      title: "Watercress Hotel",
      category: "Hospitality",
      metrics: "60% Direct Bookings",
      image: `https://img.youtube.com/vi/oxmDksyWRfs/hqdefault.jpg`,
      path: "/case-study/watercress"
    },
    {
      title: "Riskgratis",
      category: "Fintech",
      metrics: "150% User Signups",
      image: "https://images.unsplash.com/photo-1578401057158-0e58789f5947",
      path: "/case-study/riskgratis"
    }
  ];

  return (
    <section id="caseStudies" className="py-24 bg-black border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Work</h2>
            <p className="text-xl text-gray-400">
              Discover how we've helped ambitious brands scale their revenue and dominate their markets through strategic digital growth.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <Link key={index} to={item.path} className="group block h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-yellow-400 transition-all duration-300 h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={`${item.title} case study showcase`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute top-4 left-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {item.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 mb-6 flex-grow">{item.metrics}</p>
                  <div className="flex items-center text-yellow-400 font-semibold mt-auto">
                    Read Case Study <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;