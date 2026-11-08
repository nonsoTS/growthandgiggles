import React from 'react';
import { motion } from 'framer-motion';
import { Target, CheckCircle2 } from 'lucide-react';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import ServicePageCTA from '@/components/ServicePageCTA';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const ContentStrategyService = () => {
  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Content Strategy Services - Growth and Giggles',
    description: 'Build a comprehensive content strategy that aligns with your business goals, targets the right audience, and maximizes ROI.',
    path: '/services/content-strategy/',
    keywords: ['content strategy', 'content planning', 'buyer personas', 'content roadmap', 'marketing strategy'],
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Content Strategy', path: '/services/content-strategy/' }
  ];

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="relative py-12 lg:py-20">
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb items={breadcrumbItems} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl pt-8"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full mb-6">
                <Target className="w-4 h-4" />
                <span className="font-semibold text-sm">Content Strategy</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Direction Before <span className="text-yellow-400">Creation.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Stop guessing. We build data-driven content roadmaps that align your marketing efforts with tangible business objectives.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Strategic Alignment</h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Every piece of content should serve a purpose. We define who you're talking to, what you should say, and where you should say it to maximize impact and ROI.
                </p>
                <ul className="space-y-4">
                  {["Audience Persona Development", "Buyer Journey Mapping", "Channel Strategy & Distribution", "KPI & Measurement Frameworks"].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-gray-200 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img alt="Strategic planning and mapping" className="rounded-2xl shadow-2xl border border-gray-800 w-full" src="https://images.unsplash.com/photo-1512758117926-0e8cd58525b6" />
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/services/content-strategy/" />

        <ServicePageCTA 
          headline="Ready to build a winning content strategy?"
          subheading="Partner with us to create a data-driven roadmap that guarantees your content delivers measurable business results."
          serviceType="Content Strategy"
        />
      </div>
    </StaticPageWrapper>
  );
};

export default ContentStrategyService;