import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  { title: 'Content Marketing', path: '/services/content-marketing/' },
  { title: 'Content Management', path: '/services/content-management/' },
  { title: 'SEO Content Writing', path: '/services/seo-content-writing/' },
  { title: 'Content Strategy', path: '/services/content-strategy/' },
  { title: 'Social Media Content', path: '/services/social-media-content/' },
];

const RelatedServices = ({ currentPath }) => {
  const filteredServices = services.filter(service => service.path !== currentPath).slice(0, 3);

  return (
    <section className="py-16 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-center">Explore Related Services</h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filteredServices.map((service, idx) => (
            <Link key={idx} to={service.path}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-black border border-gray-800 p-6 rounded-xl hover:border-yellow-400 transition-all group"
              >
                <h4 className="text-lg font-semibold mb-4 text-white group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h4>
                <div className="flex items-center text-sm text-yellow-400 font-medium">
                  Learn more <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;