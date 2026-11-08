import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';
import YouTubeSection from '@/components/YouTubeSection'

const CaseStudyLevah = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Case Studies', path: '/#case-studies' },
    { label: 'Levah.co', path: '/case-study/levah' }
  ];

  return (
    <StaticPageWrapper 
      title="Levah.co Case Study | Growth and Giggles" 
      description="Discover how Growth and Giggles helped sustainable fashion brand Levah.co increase website traffic by 40% and boost conversion rates through strategic website redesign and content strategy."
    >
      <div className="pt-32 pb-24 min-h-screen bg-black text-white">
        <div className="container mx-auto px-4">
          <Breadcrumb items={breadcrumbItems} />
          
          <div className="max-w-4xl mx-auto mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
                E-Commerce / Fashion
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight">
                Levah.co <span className="text-yellow-400">Case Study</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-12 font-medium text-balance">
                Elevating a sustainable fashion brand's digital presence to drive sales growth and user engagement.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 mb-16"
            >
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">Project Overview</h3>
                <p className="text-gray-400 leading-relaxed">
                  Levah.co is a modern e-commerce platform specializing in sustainable fashion. Growth and Giggles partnered with them to elevate their digital presence and drive sales growth.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-white">The Challenge</h3>
                <p className="text-gray-400 leading-relaxed">
                  Levah.co faced declining website traffic, poor user engagement, and low conversion rates. Their existing website lacked modern design, had slow load times, and didn't effectively showcase their product quality.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-white border-l-4 border-yellow-400 pl-4">Strategy & Execution</h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                We conducted comprehensive UX research, redesigned the entire website with modern aesthetics, optimized for mobile-first experience, implemented advanced product filtering, and integrated a streamlined checkout process. We also created compelling product photography and lifestyle content.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['Website Redesign', 'E-commerce Optimization', 'Product Photography', 'Content Strategy', 'Performance Optimization', 'SEO Implementation'].map((item, i) => (
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
                  { value: "40%", label: "Traffic Increase" },
                  { value: "35%", label: "Conversion Rate" },
                  { value: "50%", label: "Bounce Rate Reduced" },
                  { value: "25%", label: "Avg. Order Value" }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center flex flex-col justify-center">
                    <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">{stat.value}</div>
                    <div className="text-gray-400 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-24 rounded-2xl overflow-hidden border border-gray-800">
              <YouTubeSection
                videoId={"z_mtxERR-Eg"}
                videoTitle={"The Founder Introducing Levah"}
                videoAlt={"Video thumbnail showing The Founder Introducing Levah"}
                videoMetaTitle={"Growth & Giggles Case Study"}
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

export default CaseStudyLevah;