import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Palette, Image as ImageIcon, Zap, MonitorSmartphone, LayoutTemplate, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';

const GraphicDesignService = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <StaticPageWrapper 
      title="Graphic Design | Growth and Giggles" 
      description="Visually stunning, conversion-focused graphic design that drives engagement and business results."
    >
      <div className="pt-24 pb-24 bg-black min-h-screen text-white">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Graphic Design', path: '/services/graphic-design' }]} />
          
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Creative & Media Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Design That Converts, <span className="text-yellow-400">Not Just Impresses</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We craft visually stunning brand identities and marketing collateral that capture attention, inspire action, and drive measurable business results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-xl text-lg">
                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" className="border-2 border-gray-700 hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-6 rounded-xl text-lg">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1495224814653-94f36c0a31ea" alt="Creative design workspace" className="rounded-2xl shadow-2xl border border-gray-800" />
            </motion.div>
          </div>

          {/* Service Overview */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Strategic Visual Communication</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our graphic design focuses on brand identity, marketing creatives, and social media assets. We understand that design isn't just about aesthetics; it's a strategic tool engineered to increase user engagement, build trust, and drastically improve conversion rates.
            </p>
          </div>

          {/* What You Get & Who This Is For */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="text-3xl font-bold mb-8">What You Get</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {['Brand Identity Systems', 'Marketing Collateral', 'Social Media Templates', 'High-Converting Ad Creatives', 'Packaging Design', 'Unlimited Revisions'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-900 p-4 rounded-xl border border-gray-800">
                    <CheckCircle2 className="text-yellow-400 w-5 h-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-8">Who This Is For</h3>
              <div className="space-y-6">
                <div className="bg-black border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2"><Palette className="w-5 h-5"/> Visionary Brands</h4>
                  <p className="text-gray-400">E-commerce brands, SaaS companies, agencies, and startups looking to build a premium, unforgettable presence.</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-xl">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Zap className="w-5 h-5"/> Curing Creative Fatigue</h4>
                  <p className="text-gray-400">Perfect if you're battling generic designs that blend in, suffering from low ad engagement, or dealing with inconsistent brand messaging.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process & Results */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Design Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: 'Discovery', desc: 'Brand alignment' },
                { title: 'Concepts', desc: 'Initial ideation' },
                { title: 'Creation', desc: 'Design execution' },
                { title: 'Refinement', desc: 'Feedback loops' },
                { title: 'Delivery', desc: 'Final assets & guides' }
              ].map((step, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center relative">
                  <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{i + 1}</div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900 rounded-3xl overflow-hidden mb-24 border border-gray-800">
            <div className="p-10 lg:p-16">
              <h3 className="text-3xl font-bold mb-6">The Value Proposition</h3>
              <ul className="space-y-6">
                <li className="flex gap-4"><Sparkles className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Dramatically increased brand recognition and premium perception</span></li>
                <li className="flex gap-4"><LayoutTemplate className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Higher engagement rates across social channels and ad campaigns</span></li>
                <li className="flex gap-4"><MonitorSmartphone className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Improved conversion rates via psychology-driven visual hierarchy</span></li>
              </ul>
            </div>
            <div className="h-full min-h-[300px] bg-[url('https://images.unsplash.com/photo-1561070791-2526d30994b5')] bg-cover bg-center"></div>
          </div>

          {/* CTA */}
          <div className="text-center bg-yellow-400 text-black rounded-3xl p-12 md:p-20 shadow-2xl shadow-yellow-400/20">
            <h2 className="text-4xl font-bold mb-6">Ready to Elevate Your Brand?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">Design with strategy. Fast turnaround. Premium quality. Let's make your brand impossible to ignore.</p>
            <Link to="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 font-bold px-10 py-7 rounded-xl text-lg transition-transform hover:scale-105">
                Start Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </StaticPageWrapper>
  );
};

export default GraphicDesignService;