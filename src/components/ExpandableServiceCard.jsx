import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ExpandableServiceCard = ({ title, description, icon: Icon, path, subServices, color }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`border ${isExpanded ? 'border-yellow-400 bg-gray-900/80' : 'border-gray-800 bg-gray-900'} rounded-2xl overflow-hidden transition-all duration-300 flex flex-col`}>
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-4 focus:outline-none"
      >
        <div className="flex items-center gap-4 md:gap-6">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-yellow-400'}`}>
            <Icon className="w-7 h-7" />
          </div>
          <div>
            <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isExpanded ? 'text-yellow-400' : 'text-white'}`}>
              {title}
            </h3>
            {!isExpanded && (
              <p className="text-gray-400 text-sm md:text-base mt-2 hidden sm:block">
                {description}
              </p>
            )}
          </div>
        </div>
        <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-yellow-400' : 'text-gray-500'}`} />
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 md:pb-8 border-t border-gray-800/50 pt-6">
              <p className="text-gray-300 mb-6 leading-relaxed">
                {description}
              </p>
              <ul className="grid sm:grid-cols-1 gap-y-3 mb-8">
                {subServices.map((sub, i) => (
                  <li key={i} className="flex items-start text-gray-300">
                    <span className="text-yellow-400 mr-2 font-bold">•</span>
                    <span className="text-sm font-medium">{sub}</span>
                  </li>
                ))}
              </ul>
              <Link to={path || '/contact'}>
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-xl w-full sm:w-auto shadow-lg shadow-yellow-400/10">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExpandableServiceCard;