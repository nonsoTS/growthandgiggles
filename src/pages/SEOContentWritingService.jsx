import React from 'react';
import { motion } from 'framer-motion';
import { Search, CheckCircle2 } from 'lucide-react';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const SEOContentWritingService = () => {
  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'SEO Content Writing Services - Growth and Giggles',
    description: 'Data-backed SEO content writing that ranks in search engines and answers your audience\'s burning questions.',
    path: '/services/seo-content-writing/',
    keywords: ['SEO writing', 'search engine optimization', 'blog writing', 'SEO strategy', 'organic traffic'],
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'SEO Content Writing', path: '/services/seo-content-writing/' }
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
                <Search className="w-4 h-4" />
                <span className="font-semibold text-sm">SEO Content Writing</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Rank Higher. <span className="text-yellow-400">Convert Better.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                We combine technical SEO expertise with engaging copywriting to create content that search engines love and humans want to read.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img alt="SEO research and content optimization" className="rounded-2xl shadow-2xl border border-gray-800 w-full" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Content Built for Search Intent</h2>
                <p className="text-gray-300 mb-6 text-lg">
                  Ranking on page one isn't an accident. We conduct deep keyword research and craft authoritative content that comprehensively answers user intent.
                </p>
                <ul className="space-y-4">
                  {["Keyword Research & Mapping", "On-page Optimization", "Pillar Pages & Topic Clusters", "Competitor Content Gap Analysis"].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-gray-200 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/services/seo-content-writing/" />
      </div>
    </StaticPageWrapper>
  );
};

export default SEOContentWritingService;