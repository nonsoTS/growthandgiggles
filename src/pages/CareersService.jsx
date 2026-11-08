import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, UserCheck, Search, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const CareersService = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector('section.py-24.bg-black.relative.overflow-hidden');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Careers & Employer Branding Services',
    description: 'Attract top talent with compelling employer branding. Expert recruitment marketing and talent acquisition strategy services.',
    path: '/services/careers',
    keywords: ['employer branding', 'recruitment marketing', 'talent acquisition', 'careers strategy', 'hiring'],
    schemaData: {
      name: 'Careers & Employer Branding Services',
      description: 'Professional employer branding and recruitment marketing services to attract top talent.',
      url: 'https://growthandgiggles.com/services/careers',
      serviceType: 'Employer Branding'
    }
  });

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="relative py-20">
          <div className="absolute inset-0 opacity-20">
            <img alt="Modern office with diverse team collaborating" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
            <div className="absolute inset-0 bg-black mix-blend-multiply"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4" />
                <span className="font-semibold text-sm">Employer Branding & Careers</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Attract the <span className="text-yellow-400">Best Talent.</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                We help you build a compelling employer brand that resonates with top-tier candidates and transforms your recruitment strategy.
              </p>
              <Button onClick={handleScrollToContact} className="bg-white text-black hover:bg-gray-200 font-semibold text-lg px-8 py-6">
                Build Your Team
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center group p-6 rounded-xl hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Search className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Talent Strategy</h3>
                <p className="text-gray-400">Define your employee value proposition and identify the channels where your ideal candidates live.</p>
              </div>
              <div className="text-center group p-6 rounded-xl hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <UserCheck className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Recruitment Marketing</h3>
                <p className="text-gray-400">Create targeted campaigns that showcase your culture and convert passive candidates into applicants.</p>
              </div>
              <div className="text-center group p-6 rounded-xl hover:bg-black/50 transition-colors">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Employer Branding</h3>
                <p className="text-gray-400">Tell your company's story authentically through career sites, social media, and employee advocacy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Employer Branding Matters?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                In today's competitive market, top talent has options. Your employer brand is the deciding factor. A strong brand reduces cost-per-hire, improves retention, and attracts better qualified candidates.
              </p>
              <ul className="space-y-4 mt-8">
                {['50% more qualified applicants', '2x faster time-to-hire', '28% reduction in turnover'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <span className="text-xl font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img alt="Happy employees working together" className="rounded-2xl shadow-2xl border border-gray-800" src="https://images.unsplash.com/photo-1580894899378-92e56886cd4d" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full z-[-1]"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-yellow-400 rounded-full z-[-1]"></div>
            </div>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default CareersService;