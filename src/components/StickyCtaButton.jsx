import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const StickyCtaButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 scroll-reveal-cta">
      <Link to="/contact/" aria-label="Get a Free Content Audit">
        <Button 
          className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-base px-6 py-6 rounded-full shadow-2xl shadow-yellow-400/20 hover:scale-105 transition-transform flex items-center gap-2"
        >
          <BarChart2 className="w-5 h-5" />
          Get a Free Content Audit
        </Button>
      </Link>
    </div>
  );
};

export default StickyCtaButton;