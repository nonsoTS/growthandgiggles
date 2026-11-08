import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

const CaseStudyRiskgratis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Case Studies', path: '/#case-studies' },
    { label: 'Riskgratis', path: '/case-study/riskgratis' }
  ];

  return (
    <StaticPageWrapper 
      title="Riskgratis Case Study | Growth and Giggles" 
      description="Read how Growth and Giggles partnered with fintech startup Riskgratis to increase user signups by 150% and generate 5000+ qualified leads."
    >
      <div className="pt-32 pb-24 min-h-screen bg-black text-white">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                Fintech / SaaS
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                Riskgratis <span className="text-yellow-400">Case Study</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 font-medium text-balance">
                Establishing brand authority and driving aggressive user acquisition for an innovative fintech risk management platform.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 mb-16"
            >
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
                <p className="text-gray-400 leading-relaxed">
                  Riskgratis is a fintech platform offering innovative risk management solutions. Growth and Giggles partnered to establish their brand and drive user acquisition in a highly competitive sector.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
                <p className="text-gray-400 leading-relaxed">
                  Riskgratis faced challenges in brand awareness, user acquisition, and market positioning. As a new entrant in the fintech space, they needed to build credibility and differentiate from established competitors.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-yellow-400 pl-4">Strategy & Execution</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We developed a comprehensive brand identity, created thought leadership content, implemented a multi-channel digital marketing strategy, built an engaging high-converting website, and executed targeted advertising campaigns.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Brand Identity Development', 'Website Design & Dev', 'Content Strategy', 'Thought Leadership', 'Digital Advertising', 'Analytics & Reporting'].map((item, i) => (
                  <span key={i} className="bg-gray-800 text-gray-200 px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="w-4 h-4 text-yellow-400" /> {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="mb-20">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Results & Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { value: "150%", label: "User Signups" },
                  { value: "200%", label: "Brand Awareness" },
                  { value: "5000+", label: "Qualified Leads" },
                  { value: "4.2x", label: "ROAS on Ads" }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-24 rounded-2xl overflow-hidden border border-gray-800">
              <img 
                src="https://images.unsplash.com/photo-1578401057158-0e58789f5947" 
                alt="Riskgratis fintech platform dashboard and analytics presentation" 
                className="w-full h-auto object-cover"
              />
            </motion.div>

            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to achieve similar results?</h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Let's discuss how our strategic digital growth services can transform your brand and accelerate your revenue.</p>
              <Link to="/contact">
                <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-6 rounded-xl shadow-xl shadow-yellow-400/20 transition-all hover:scale-105">
                  Start a Project <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </StaticPageWrapper>
  );
};

export default CaseStudyRiskgratis;