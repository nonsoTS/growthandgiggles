import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const CommunityService = () => {
  const handleConsultation = () => {
    const ctaSection = document.querySelector('section.py-24.bg-black.relative.overflow-hidden');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Community Building Services',
    description: 'Build engaged communities that become powerful brand advocates. Expert community management and social media strategy services.',
    path: '/services/community',
    keywords: ['community building', 'community management', 'social media strategy', 'brand advocacy', 'engagement'],
    schemaData: {
      name: 'Community Building Services',
      description: 'Professional community building and management services to create engaged brand communities.',
      url: 'https://growthandgiggles.com/services/community',
      serviceType: 'Community Management'
    }
  });

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="relative py-20">
          <div className="absolute inset-0 opacity-20">
            <img alt="Large diverse group of people connecting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1471823753859-b9e1e4583bc6" />
            <div className="absolute inset-0 bg-black mix-blend-multiply"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-full mb-6">
                <Users className="w-4 h-4" />
                <span className="font-semibold text-sm">Join Our Community</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Build a <span className="text-yellow-400">Movement.</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
                Transform customers into superfans. We help you build, manage, and scale engaged communities that fuel your brand's growth.
              </p>
              <Button onClick={handleConsultation} className="bg-white text-black hover:bg-gray-200 font-semibold text-lg px-8 py-6">
                Start Building Today
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Active Engagement</h3>
                <p className="text-gray-400">We spark conversations and foster genuine connections between your brand and your audience.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Brand Loyalty</h3>
                <p className="text-gray-400">Create a space where members feel valued, increasing retention and lifetime value.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Organic Advocacy</h3>
                <p className="text-gray-400">Empower your community members to become your most effective marketing channel.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default CommunityService;