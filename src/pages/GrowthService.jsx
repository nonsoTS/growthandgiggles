import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart2, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const GrowthService = () => {
  const handleConsultation = () => {
    const ctaSection = document.querySelector('section.py-24.bg-black.relative.overflow-hidden');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Growth & Marketing Strategy Services',
    description: 'Data-driven growth strategies that accelerate your business. Expert SEO, lead generation, analytics, and marketing consulting services.',
    path: '/services/growth-marketing',
    keywords: ['growth marketing', 'marketing strategy', 'SEO services', 'lead generation', 'analytics consulting'],
    schemaData: {
      name: 'Growth & Marketing Strategy Services',
      description: 'Accelerate your business with data-driven growth strategies, SEO optimization, and performance marketing.',
      url: 'https://growthandgiggles.com/services/growth-marketing',
      serviceType: 'Marketing Strategy'
    }
  });

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="relative py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold text-sm">Growth & Marketing Strategy</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Data-Driven <span className="text-yellow-400">Growth.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Accelerate your business with strategies that are measurable, scalable, and tailored to your unique market position.
              </p>
              <Button onClick={handleConsultation} className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-lg px-8 py-6">
                Get Your Growth Plan
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Search, title: "SEO & Discoverability", desc: "Dominate search rankings with technical SEO and content optimization." },
                { icon: Target, title: "Lead Generation", desc: "Targeted campaigns that bring high-quality prospects to your funnel." },
                { icon: BarChart2, title: "Analytics & Insights", desc: "Deep dive analysis to understand user behavior and optimize conversions." }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-black border border-gray-800 p-8 rounded-2xl hover:border-yellow-400 transition-colors"
                >
                  <item.icon className="w-10 h-10 text-yellow-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-3xl p-12 text-black text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Scale?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Stop guessing and start growing. Our proven frameworks remove the uncertainty from your marketing efforts.</p>
            <Button onClick={handleConsultation} className="bg-black text-yellow-400 hover:bg-gray-800 font-bold text-lg px-8 py-6">
              Book a Strategy Call
            </Button>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default GrowthService;