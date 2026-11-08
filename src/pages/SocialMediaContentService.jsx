import React from 'react';
import { motion } from 'framer-motion';
import { Share2, CheckCircle2 } from 'lucide-react';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedServices from '@/components/RelatedServices';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const SocialMediaContentService = () => {
  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Social Media Content Services - Growth and Giggles',
    description: 'Scroll-stopping social media content designed to build brand awareness, foster community engagement, and drive meaningful interactions.',
    path: '/services/social-media-content/',
    keywords: ['social media content', 'social strategy', 'brand community', 'social media management', 'engagement'],
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Social Media Content', path: '/services/social-media-content/' }
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
                <Share2 className="w-4 h-4" />
                <span className="font-semibold text-sm">Social Media Content</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Spark Conversations. <span className="text-yellow-400">Build Community.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Transform passive scrollers into active brand advocates with tailored social media content that stands out in the feed.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img alt="Social media engagement and content creation" className="rounded-2xl shadow-2xl border border-gray-800 w-full" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Engage on Every Platform</h2>
                <p className="text-gray-300 mb-6 text-lg">
                  From LinkedIn thought leadership to Instagram visuals, we craft platform-specific content designed to maximize reach and engagement metrics.
                </p>
                <ul className="space-y-4">
                  {["Platform-Specific Content Calendars", "Engaging Copywriting & Visuals", "Community Management Guidelines", "Social Analytics & Reporting"].map((feature, index) => (
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

        <RelatedServices currentPath="/services/social-media-content/" />
      </div>
    </StaticPageWrapper>
  );
};

export default SocialMediaContentService;