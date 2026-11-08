import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  ShieldCheck, 
  TrendingUp, 
  Target, 
  Award,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import ServicePageCTA from '@/components/ServicePageCTA';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const CommunityBuildingService = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Community Building', path: '/services/community-building/' }
  ];

  const baseSeoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Community Building Services Nigeria | Growth & Giggles',
    description: 'Build engaged communities for your brand. Community management and engagement strategies for Nigerian SaaS, startups & B2B brands.',
    path: '/services/community-building/',
    keywords: ['community building', 'community management', 'customer engagement', 'community strategy', 'member retention', 'brand community', 'customer loyalty'],
    schemaData: {
      name: 'Community Building Services',
      description: 'Professional community building and management services to create engaged brand communities.',
      url: 'https://growthandgiggles.com/services/community-building',
      serviceType: 'Community Management'
    }
  });

  return (
    <StaticPageWrapper {...baseSeoData}>
      <div className="bg-black min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581090124321-d19ad6d7cd5a" 
              alt="community engagement and team collaboration discussion" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb items={breadcrumbItems} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center mt-12"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
                <Users className="w-5 h-5" />
                <span className="font-semibold tracking-wide">Community & Engagement</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
                Community Building Services for Nigerian Businesses
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                Turn your audience into active brand advocates. We craft engaged communities that drive customer loyalty, retention, and exponential organic growth.
              </p>
              <div className="flex justify-center items-center">
                <Link to="/contact/">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-7 shadow-lg shadow-yellow-400/20 group rounded-xl">
                    Get a Free Community Strategy Consultation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Your Brand Needs a Community</h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                Today, capturing attention is only half the battle. Many Nigerian startups, SaaS platforms, and SMEs struggle to maintain long-term customer engagement and loyalty. When interactions are purely transactional, it becomes incredibly easy for your customers to switch to a competitor. This is exactly why strategic <strong>community building</strong> matters. It transforms passive buyers into passionate brand advocates.
              </p>
            </div>
          </div>
        </section>

        <ServicePageCTA 
          headline="Ready to build a thriving community?"
          subheading="Lock in customer loyalty and retention by giving your audience a space they genuinely want to belong to."
          serviceType="Community Building"
        />
      </div>
    </StaticPageWrapper>
  );
};

export default CommunityBuildingService;