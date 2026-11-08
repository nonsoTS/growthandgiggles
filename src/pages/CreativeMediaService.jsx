import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  Video, 
  MonitorPlay, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Share2,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import ServicePageCTA from '@/components/ServicePageCTA';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const CreativeMediaService = () => {
  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Creative & Media Services',
    description: 'Captivating visual content that tells your brand story. Professional video production, graphic design, and creative media services.',
    path: '/services/creative-media',
    keywords: ['video production', 'graphic design', 'creative services', 'brand design', 'media production'],
    schemaData: {
      name: 'Creative & Media Services',
      description: 'Professional creative and media production services including video, graphic design, and brand identity.',
      url: 'https://growthandgiggles.com/services/creative-media',
      serviceType: 'Creative Services'
    }
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Creative & Media', path: '/services/creative-media/' }
  ];

  return (
    <StaticPageWrapper {...seoData}>
      <Helmet>
        <title>Creative & Media Services Nigeria | Growth & Giggles</title>
        <meta name="description" content="Professional creative & media production for Nigerian brands. Video, design, and multimedia content that drives engagement and conversions." />
      </Helmet>

      <div className="bg-black min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1621906456905-47eee6e534cb" 
              alt="professional video production studio with cameras and lighting equipment for Nigerian brands" 
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
                <Palette className="w-5 h-5" />
                <span className="font-semibold tracking-wide">Professional Production</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
                Creative & Media Services for Nigerian Businesses
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                Elevate your brand with world-class visual storytelling. We deliver video, design, and multimedia content that drives unprecedented engagement and conversions.
              </p>
              <div className="flex justify-center items-center">
                <Link to="/contact/">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-7 shadow-lg shadow-yellow-400/20 group rounded-xl">
                    Get a Free Creative Audit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Creative & Media Matters for Your Brand</h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                Nigerian startups, SaaS companies, and SMEs frequently face a steep uphill battle: looking professional enough to win high-ticket clients while standing out in saturated social feeds. Poorly executed visuals and amateur video content severely damage brand credibility and hinder conversions. That is why investing in top-tier <strong>creative & media</strong> is no longer optional—it is critical for survival and brand differentiation.
              </p>
            </div>
          </div>
        </section>

        <ServicePageCTA 
          headline="Ready to create compelling media?"
          subheading="Harness the power of elite visual storytelling to command attention and convert your audience today."
          serviceType="Creative Media"
        />
      </div>
    </StaticPageWrapper>
  );
};

export default CreativeMediaService;