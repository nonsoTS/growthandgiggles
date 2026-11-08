import React from 'react';
import { motion } from 'framer-motion';
import { Video, Palette, Layers, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const CreativeService = () => {
  const handleConsultation = () => {
    const ctaSection = document.querySelector('section.py-24.bg-black.relative.overflow-hidden');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="py-20 container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full mb-6">
                <Palette className="w-4 h-4" />
                <span className="font-semibold text-sm">Creative & Media</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Visuals That <span className="text-yellow-400">Captivate.</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                In a visual-first world, your brand needs to look as good as it sounds. We combine aesthetic excellence with strategic messaging.
              </p>
              <Button onClick={handleConsultation} className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-lg px-8 py-6">
                View Portfolio
              </Button>
            </motion.div>
            <div className="relative">
              <img alt="Creative design studio workspace with colorful graphics" className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1559028012-481c04fa702d" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Creative Solutions</h2>
              <p className="text-gray-400">Everything you need to bring your brand to life</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Video, title: "Video Production", items: ["Brand Stories", "Social Reels", "Explainers"] },
                { icon: Palette, title: "Graphic Design", items: ["Marketing Materials", "Infographics", "Presentations"] },
                { icon: Layers, title: "Brand Identity", items: ["Logo Design", "Brand Guidelines", "Visual Systems"] },
                { icon: ImageIcon, title: "Social Content", items: ["Carousel Posts", "Stories", "Custom Assets"] }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-black p-6 rounded-xl border border-gray-800"
                >
                  <service.icon className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, j) => (
                      <li key={j} className="text-gray-400 text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default CreativeService;