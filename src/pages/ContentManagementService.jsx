import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle2 } from 'lucide-react';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const ContentManagementService = () => {
  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Content Management Services - Growth and Giggles',
    description: 'Streamline your digital assets with our professional content management services, ensuring your content stays organized, updated, and impactful.',
    path: '/services/content-management/',
    keywords: ['content management', 'CMS strategy', 'content operations', 'digital asset management'],
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Content Management', path: '/services/content-management/' }
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
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold text-sm">Content Management</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Organize for <span className="text-yellow-400">Impact.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Take control of your content ecosystem. We help structure, optimize, and manage your assets to ensure consistent messaging and performance.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center flex-row-reverse">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Streamlined Operations</h2>
                <p className="text-gray-300 mb-6 text-lg">
                  A strong strategy fails without proper execution. Our management services ensure your content workflow is frictionless from ideation to publication and archiving.
                </p>
                <ul className="space-y-4">
                  {["Content Audits & Inventory", "Editorial Calendar Management", "CMS Optimization", "Performance Tracking & Reporting"].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-gray-200 text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <img alt="Content Management Dashboard Analysis" className="rounded-2xl shadow-2xl border border-gray-800 w-full" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" />
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentPath="/services/content-management/" />
      </div>
    </StaticPageWrapper>
  );
};

export default ContentManagementService;