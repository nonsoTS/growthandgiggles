import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import { generateSEOMetadata } from '@/utils/seoMetadata';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const LocationPage = () => {
  const seoData = generateSEOMetadata({
    pageType: 'service',
    title: 'Top Content Marketing Agency Lagos | Growth and Giggles',
    description: 'Growth and Giggles is the leading content marketing agency in Lagos, Nigeria. We help local and global brands scale through expert content strategy and execution.',
    path: '/content-marketing-agency-lagos/',
    keywords: ['content marketing agency Lagos', 'SEO agency Nigeria', 'digital marketing Lagos', 'content creators Lagos', 'social media agency Lagos'],
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Content Marketing Agency Lagos', path: '/content-marketing-agency-lagos/' }
  ];

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="relative py-12 lg:py-20">
          <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1577978253139-4ab564bfbb8c')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb items={breadcrumbItems} />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl pt-8"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                <span className="font-semibold text-sm">Serving Lagos, Nigeria & Beyond</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Premier Content Marketing Agency in <span className="text-yellow-400">Lagos.</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mb-8">
                Elevate your brand in the vibrant Nigerian market. We deliver tailored content strategies that drive engagement, visibility, and measurable growth for Lagos businesses.
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold px-8 py-6 text-lg">
                <a href="mailto:hello@growthandgiggles.io">Contact Our Lagos Team</a>
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Local Expertise, Global Standards</h2>
              <p className="text-gray-300 text-lg">
                We understand the nuances of the Lagos business landscape. Our team blends deep local market insights with world-class content methodologies to help your brand dominate its sector.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Tech Startups', desc: 'Authoritative content for fintech, healthtech, and edtech companies in Yaba and Victoria Island.' },
                { title: 'B2B Enterprises', desc: 'Lead-generating thought leadership for professional services and corporate entities.' },
                { title: 'Lifestyle Brands', desc: 'Vibrant social and visual content that captures the dynamic energy of Lagos.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-black border border-gray-800 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Services Tailored for Lagos</h2>
                <ul className="space-y-4 mb-8">
                  {["SEO Optimization for Nigerian Search Trends", "Localized Content Strategy", "Pan-African Thought Leadership", "Social Media Community Building"].map((service, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-yellow-400 shrink-0" />
                      <span className="text-gray-200 text-lg">{service}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services/" className="inline-flex items-center text-yellow-400 hover:text-yellow-500 font-semibold text-lg">
                  View All Services <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-center">
                <Mail className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ready to Dominate Your Niche?</h3>
                <p className="text-gray-400 mb-8">Let's discuss how we can accelerate your growth in Lagos and across Africa.</p>
                <a href="mailto:hello@growthandgiggles.io" className="block w-full bg-yellow-400 text-black font-semibold py-4 rounded-lg hover:bg-yellow-500 transition-colors">
                  hello@growthandgiggles.io
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default LocationPage;