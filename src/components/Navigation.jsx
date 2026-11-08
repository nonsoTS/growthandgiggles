import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path) => {
    if (path) {
       navigate(path);
       window.scrollTo(0,0);
    }
    setIsMobileMenuOpen(false);
    setIsCaseStudiesOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-black/95 backdrop-blur-lg shadow-lg border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleNavClick('/')}
          >
            <img
              src="https://horizons-cdn.hostinger.com/04da2f14-0b56-4dcb-870b-6b8da8ae4d66/ca71b80e8045d662a86cf3cd892b5be5.png"
              alt="Growth and Giggles Logo"
              className="h-10 w-auto"
            />
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleNavClick('/')} className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">Home</button>
            
            <div className="relative group" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button onClick={() => handleNavClick('/services')} className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-gray-900 border border-gray-800 rounded-xl shadow-xl overflow-hidden py-2"
                  >
                    <button onClick={() => handleNavClick('/services/training-consultation')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Training & Consultation</button>
                    <button onClick={() => handleNavClick('/services/graphic-design')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Graphic Design</button>
                    <button onClick={() => handleNavClick('/services/content-marketing')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Content Marketing</button>
                    <button onClick={() => handleNavClick('/services/digital-marketing')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Digital Marketing</button>
                    <button onClick={() => handleNavClick('/services/social-media-marketing')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Social Media Marketing</button>
                    <button onClick={() => handleNavClick('/services/web-design-development')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Web Design & Dev</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative group" onMouseEnter={() => setIsCaseStudiesOpen(true)} onMouseLeave={() => setIsCaseStudiesOpen(false)}>
              <button className="flex items-center gap-1 text-gray-300 hover:text-yellow-400 transition-colors font-medium py-2">
                Case Studies <ChevronDown className="w-4 h-4" />
              </button>
              <AnimatePresence>
                {isCaseStudiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-48 bg-gray-900 border border-gray-800 rounded-xl shadow-xl overflow-hidden py-2"
                  >
                    <button onClick={() => handleNavClick('/case-study/levah')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Levah.co</button>
                    <button onClick={() => handleNavClick('/case-study/watercress')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Watercress Hotel</button>
                    <button onClick={() => handleNavClick('/case-study/riskgratis')} className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-yellow-400 transition-colors">Riskgratis</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button onClick={() => handleNavClick('/about/')} className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">About</button>
            <button onClick={() => handleNavClick('/contact/')} className="text-gray-300 hover:text-yellow-400 transition-colors font-medium">Contact</button>
            
            <Button
              onClick={() => handleNavClick('/contact/')}
              className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
            >
              Get Started
            </Button>
          </div>

          <button
            className="md:hidden text-yellow-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/98 backdrop-blur-lg border-t border-gray-800 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              <button onClick={() => handleNavClick('/')} className="text-gray-300 hover:text-yellow-400 text-left py-2 text-lg font-medium">Home</button>
              
              <div className="pl-4 border-l border-gray-800 flex flex-col gap-2">
                <button onClick={() => handleNavClick('/services')} className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1 text-left">Services</button>
                <button onClick={() => handleNavClick('/services/training-consultation')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Training & Consultation</button>
                <button onClick={() => handleNavClick('/services/graphic-design')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Graphic Design</button>
                <button onClick={() => handleNavClick('/services/content-marketing')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Content Marketing</button>
                <button onClick={() => handleNavClick('/services/digital-marketing')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Digital Marketing</button>
                <button onClick={() => handleNavClick('/services/social-media-marketing')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Social Media Marketing</button>
                <button onClick={() => handleNavClick('/services/web-design-development')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Web Design & Dev</button>
              </div>
              
              <div className="pl-4 border-l border-gray-800 flex flex-col gap-2">
                <span className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-1">Case Studies</span>
                <button onClick={() => handleNavClick('/case-study/levah')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Levah.co</button>
                <button onClick={() => handleNavClick('/case-study/watercress')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Watercress Hotel</button>
                <button onClick={() => handleNavClick('/case-study/riskgratis')} className="text-gray-400 hover:text-yellow-400 text-left py-1">Riskgratis</button>
              </div>

              <button onClick={() => handleNavClick('/about/')} className="text-gray-300 hover:text-yellow-400 text-left py-2 text-lg font-medium">About</button>
              <button onClick={() => handleNavClick('/contact/')} className="text-gray-300 hover:text-yellow-400 text-left py-2 text-lg font-medium">Contact</button>
              
              <Button
                onClick={() => handleNavClick('/contact/')}
                className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold w-full mt-4 text-lg py-6 rounded-xl"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;