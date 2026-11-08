import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Share2, TrendingUp, FileText, Palette, BookOpen, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import { Button } from '@/components/ui/button';

export const ServicesHub = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      title: "Web Design, Development and Maintenance",
      icon: Code,
      desc: "Robust, high-performance websites and portals engineered to convert visitors into loyal customers.",
      path: "/services/web-design-development",
      subServices: [
        "Website Design & Website Redesign",
        "Custom Website Development",
        "E-commerce Web Development",
        "CMS and Portal Development",
        "Website Optimization & Website Security",
        "Website Maintenance and Support",
        "Website Hosting and Domain Setup"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      desc: "Strategic social media management that builds community, drives engagement, and amplifies brand voice.",
      path: "/services/social-media-marketing",
      subServices: [
        "Social Media Strategy Development",
        "Content Creation and Curation",
        "Social Media Campaigns",
        "Community Management",
        "Influencer Marketing",
        "Social Media Account Management",
        "Social Media Analytics and Reporting"
      ]
    },
    {
      title: "Digital Marketing Services",
      icon: TrendingUp,
      desc: "Data-driven performance marketing campaigns designed to maximize ROI and aggressive market expansion.",
      path: "/services/digital-marketing",
      subServices: [
        "Keyword Research & Ads Creation",
        "Google Ads Management",
        "Facebook & Instagram Ads Management",
        "Retargeting Campaigns",
        "Ad Performance Analytics & Reporting",
        "Competitor Analysis",
        "Content Optimization"
      ]
    },
    {
      title: "Content Marketing",
      icon: FileText,
      desc: "Compelling storytelling and authoritative content that establishes your brand as an undisputed industry leader.",
      path: "/services/content-marketing",
      subServices: [
        "Article Writing",
        "Copywriting",
        "E-books and Whitepapers",
        "Short Video Content Creation",
        "Infographic Design"
      ]
    },
    {
      title: "Graphic Design",
      icon: Palette,
      desc: "Visually stunning brand identities and marketing collateral that captures attention and inspires action.",
      path: "/services/graphic-design",
      subServices: [
        "Corporate Branding",
        "Logo Design / Business Cards / Letterhead",
        "Company Profile Design",
        "Posters / Banners / Flyers / Brochures",
        "Infographics and Digital Art"
      ]
    },
    {
      title: "Training & Consultation",
      icon: BookOpen,
      desc: "Empower your internal teams with cutting-edge digital skills through our expert-led workshops and training modules.",
      path: "/services/training-consultation",
      subServices: [
        "Web Design Training",
        "Digital Marketing Training (Full Suite)",
        "SEO Training",
        "Social Media Marketing Training",
        "Graphic Design Training",
        "PPC Advertising Training",
        "Content Strategy Training",
        "Analytics Training"
      ]
    }
  ];

  return (
    <StaticPageWrapper 
      title="Our Services | Growth and Giggles" 
      description="Explore our comprehensive suite of digital marketing, content, web development, and design services built to scale ambitious brands."
    >
      <div className="pt-32 pb-24 min-h-screen bg-black text-white relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-400/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }]} />
          
          <div className="max-w-3xl mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our <span className="text-yellow-400">Services</span></h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              We provide a complete ecosystem of digital growth solutions. Whether you need a high-converting website, aggressive performance marketing, or authoritative content, we have the expertise to deliver measurable results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-24">
            {services.map((service, index) => {
              const isExpanded = expandedIndex === index;
              const Icon = service.icon;

              return (
                <div 
                  key={index} 
                  className={`border ${isExpanded ? 'border-yellow-400 bg-gray-900/80' : 'border-gray-800 bg-gray-900'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button 
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-yellow-400'}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isExpanded ? 'text-yellow-400' : 'text-white'}`}>
                          {service.title}
                        </h3>
                        {!isExpanded && (
                          <p className="text-gray-400 text-sm md:text-base mt-2 hidden sm:block">
                            {service.desc}
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
                            {service.desc}
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                            {service.subServices.map((sub, i) => (
                              <li key={i} className="flex items-start text-gray-300">
                                <span className="text-yellow-400 mr-2 font-bold">•</span>
                                <span className="text-sm font-medium">{sub}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex gap-4 flex-wrap">
                            <Link to={service.path}>
                              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-xl shadow-lg shadow-yellow-400/10">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to grow your business?</h2>
            <p className="text-xl text-gray-400 mb-10">Let's talk about which services are right for you and build a custom roadmap to scale your revenue.</p>
            <Link to="/contact">
              <Button className="bg-white text-black hover:bg-gray-200 font-bold text-lg px-12 py-7 rounded-xl shadow-xl transition-all hover:scale-105">
                Contact Our Team
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </StaticPageWrapper>
  );
};

export default ServicesHub;