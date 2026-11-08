import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users } from 'lucide-react';

const ServicePageCTA = ({ headline, subheading, serviceType = "our services" }) => {
  return (
    <section className="py-24 relative bg-yellow-400 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl mix-blend-multiply"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 max-w-4xl mx-auto leading-tight">
          {headline}
        </h2>
        <p className="text-xl text-black/80 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          {subheading}
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <Link to="/contact/" className="w-full sm:w-auto">
            <Button className="w-full bg-black text-yellow-400 hover:bg-gray-900 font-bold text-lg px-10 py-7 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 flex items-center justify-center">
              Schedule a Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link to="/case-studies/" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full border-2 border-black bg-transparent text-black hover:bg-black hover:text-yellow-400 font-bold text-lg px-10 py-7 rounded-xl transition-colors duration-300">
              View Case Studies
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-black/80 font-bold text-sm uppercase tracking-wider">
          <Users className="w-5 h-5" />
          <span>Join 50+ Nigerian businesses growing with us</span>
        </div>
      </div>
    </section>
  );
};

export default ServicePageCTA;