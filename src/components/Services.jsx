import React from 'react';
import { motion } from 'framer-motion';
import { Code, Share2, TrendingUp, FileText, Palette, BookOpen } from 'lucide-react';
import ExpandableServiceCard from './ExpandableServiceCard';

const Services = () => {
  const serviceCategories = [
    {
      title: 'Web Design, Development and Maintenance',
      description: 'Robust, high-performance websites and portals engineered to convert visitors into loyal customers.',
      icon: Code,
      path: '/services/web-design',
      subServices: [
        'Website Design & Website Redesign',
        'Custom Website Development',
        'E-commerce Web Development',
        'CMS and Portal Development',
        'Website Optimization & Website Security',
        'Website Maintenance and Support',
        'Website Hosting and Domain Setup'
      ]
    },
    {
      title: 'Social Media Marketing',
      description: 'Strategic social media management that builds community, drives engagement, and amplifies brand voice.',
      icon: Share2,
      path: '/services/social-media',
      subServices: [
        'Social Media Strategy Development',
        'Content Creation and Curation',
        'Social Media Campaigns',
        'Community Management',
        'Influencer Marketing',
        'Social Media Account Management',
        'Social Media Analytics and Reporting'
      ]
    },
    {
      title: 'Digital Marketing Services',
      description: 'Data-driven performance marketing campaigns designed to maximize ROI and aggressive market expansion.',
      icon: TrendingUp,
      path: '/services/digital-marketing',
      subServices: [
        'Keyword Research & Ads Creation',
        'Google Ads Management',
        'Facebook & Instagram Ads Management',
        'Retargeting Campaigns',
        'Ad Performance Analytics & Reporting',
        'Competitor Analysis',
        'Content Optimization'
      ]
    },
    {
      title: 'Content Marketing',
      description: 'Compelling storytelling and authoritative content that establishes your brand as an undisputed industry leader.',
      icon: FileText,
      path: '/services/content-marketing',
      subServices: [
        'Article Writing',
        'Copywriting',
        'E-books and Whitepapers',
        'Short Video Content Creation',
        'Infographic Design'
      ]
    },
    {
      title: 'Graphic Design',
      description: 'Visually stunning brand identities and marketing collateral that captures attention and inspires action.',
      icon: Palette,
      path: '/services/graphic-design',
      subServices: [
        'Corporate Branding',
        'Logo Design / Business Cards / Letterhead',
        'Company Profile Design',
        'Posters / Banners / Flyers / Brochures',
        'Infographics and Digital Art'
      ]
    },
    {
      title: 'Training & Consultation',
      description: 'Empower your internal teams with cutting-edge digital skills through our expert-led workshops and training modules.',
      icon: BookOpen,
      path: '/services/training',
      subServices: [
        'Web Design Training',
        'Digital Marketing Training (Full Suite)',
        'SEO Training',
        'Social Media Marketing Training',
        'Graphic Design Training',
        'PPC Advertising Training',
        'Content Strategy Training',
        'Analytics Training'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Comprehensive Solutions for <span className="text-yellow-400">Your Growth</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From content creation to community building, we offer everything you need to succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ExpandableServiceCard {...category} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;