import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LineChart, 
  Target, 
  Search, 
  Rocket, 
  BarChart, 
  Zap,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Building2,
  Briefcase,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import ServicePageCTA from '@/components/ServicePageCTA';

const GrowthMarketingService = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Growth & Marketing Strategy', path: '/services/growth-marketing/' }
  ];

  return (
    <StaticPageWrapper>
      <Helmet>
        <title>Growth & Marketing Strategy Agency Nigeria | Growth & Giggles</title>
        <meta name="description" content="Data-driven growth marketing strategies for Nigerian SaaS, startups & B2B brands. Accelerate revenue growth with proven marketing frameworks." />
      </Helmet>

      <div className="bg-black min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0" 
              alt="Growth marketing analytics dashboard showing revenue metrics and KPIs" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/80 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
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
                <LineChart className="w-5 h-5" />
                <span className="font-semibold tracking-wide">Data-Driven Growth</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
                Growth & Marketing Strategy Services for Nigerian Businesses
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                Data-driven growth marketing strategies to accelerate revenue and scale your business with predictable precision.
              </p>
              <div className="flex justify-center items-center">
                <Link to="/contact/">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-7 shadow-lg shadow-yellow-400/20 group rounded-xl">
                    Get a Free Growth Audit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Growth & Marketing Strategy Matters</h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                In an increasingly competitive digital arena, Nigerian startups, SaaS companies, and SMEs frequently encounter the same roadblock: how to achieve sustainable growth. Many struggle with unclear marketing ROI, scattered channel strategies, and high customer acquisition costs. Without a clear <strong>growth & marketing strategy</strong>, your scaling efforts will be unpredictable and incredibly expensive.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1585399058947-f68f9db58e5f" 
                  alt="Growth strategy team collaborating on marketing framework" 
                  className="rounded-2xl shadow-2xl border border-gray-800 w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-white">Our 6-Step Growth Framework</h2>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                      <Search className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">1. Market Research & Competitive Analysis</h3>
                      <p className="text-gray-400 leading-relaxed">
                        We begin by understanding market dynamics and identifying growth opportunities. By analyzing competitor strategies and market gaps, we isolate high-potential customer segments ready for conversion.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicePageCTA 
          headline="Ready to accelerate your growth?"
          subheading="Let's build a data-driven growth strategy that drives continuous revenue and scales your business sustainably."
          serviceType="Growth Strategy"
        />
      </div>
    </StaticPageWrapper>
  );
};

export default GrowthMarketingService;