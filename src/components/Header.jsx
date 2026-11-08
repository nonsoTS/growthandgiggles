import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Rocket } from 'lucide-react';
import { CTAButton } from './SharedComponents';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Programs', path: '/programs' },
  { name: 'AI for Marketers', path: '/ai-for-marketers' },
  { name: 'Incubator', path: '/incubator' },
  { name: 'Community', path: '/community' },
  { name: 'For Organisations', path: '/for-organisations' },
  { name: 'About', path: '/about' },
  { name: 'Resources', path: '/resources' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "glass-effect py-4" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group relative z-50">
          <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform">
            <Rocket className="w-5 h-5" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">
            Growth <span className="text-primary">&</span> Giggles
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                location.pathname === link.path 
                  ? "text-primary bg-primary/10" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <CTAButton to="/contact" className="py-4 px-6 text-sm">
            Join the Accelerator
          </CTAButton>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-50 p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-background border-b border-border flex flex-col pt-24 px-6 pb-6 lg:hidden"
            >
              <div className="flex flex-col gap-4 overflow-y-auto">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    to={link.path}
                    className="text-2xl font-bold text-foreground py-2 border-b border-border/50"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-8">
                  <CTAButton to="/contact" className="w-full justify-center">
                    Join the Accelerator
                  </CTAButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;