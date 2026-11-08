import React from 'react';
import { motion } from 'framer-motion';
import { FileText, CheckCircle2, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import { generateSEOMetadata } from '@/utils/seoMetadata';

const ContentService = () => {
  const { toast } = useToast();

  const handleConsultation = () => {
    const ctaSection = document.querySelector('section.py-24.bg-black.relative.overflow-hidden');
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    "Executive Ghostwriting & Thought Leadership",
    "Strategic Blog Content & SEO Optimization",
    "White Papers, E-books & Case Studies",
    "Newsletter & Email Marketing Content",
    "Technical Writing & Documentation",
    "Scriptwriting for Video & Webinars"
  ];

  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Content & Thought Leadership Services',
    description: 'Position your brand as an industry authority with compelling content and thought leadership. Expert content strategy, ghostwriting, and SEO optimization services.',
    path: '/services/content-thought-leadership',
    keywords: ['content marketing', 'thought leadership', 'content strategy', 'ghostwriting', 'SEO content'],
    schemaData: {
      name: 'Content & Thought Leadership Services',
      description: 'Professional content creation and thought leadership services to establish your brand as an industry authority.',
      url: 'https://growthandgiggles.com/services/content-thought-leadership',
      serviceType: 'Content Marketing'
    }
  });

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-yellow-400/10 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full mb-6">
                <FileText className="w-4 h-4" />
                <span className="font-semibold text-sm">Content & Thought Leadership</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Words That <span className="text-yellow-400">Resonate.</span><br />
                Stories That <span className="text-yellow-400">Convert.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Position your brand as an industry authority. We craft compelling narratives that engage your audience, build trust, and drive meaningful action.
              </p>
              <Button onClick={handleConsultation} className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold text-lg px-8 py-6">
                Start Your Content Journey
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img alt="Content strategy meeting with whiteboard" className="rounded-2xl shadow-2xl border border-gray-800" src="https://images.unsplash.com/photo-1690192203795-ca12d9bb3227" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Thought Leadership Matters</h2>
                <p className="text-gray-300 mb-6">
                  In a crowded digital space, generic content doesn't cut it. Real thought leadership establishes credibility and fosters deep connections with your target market. We help you articulate your unique perspective and share it with the world.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 shrink-0" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-gray-400">How we turn ideas into influence</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Discovery", desc: "We dive deep into your brand voice, goals, and audience." },
                { title: "Creation", desc: "Our expert writers craft polished, engaging content." },
                { title: "Amplification", desc: "We help you distribute content for maximum impact." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-gray-900 p-8 rounded-xl border border-gray-800 text-center"
                >
                  <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default ContentService;