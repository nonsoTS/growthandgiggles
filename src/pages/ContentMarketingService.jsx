import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Search, Trophy, PenTool, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';

const ContentMarketingService = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <StaticPageWrapper 
      title="Content Marketing | Growth and Giggles" 
      description="Strategic content that ranks on search engines, drives organic traffic, and converts visitors to leads."
    >
      <div className="pt-24 pb-24 bg-black min-h-screen text-white">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Content Marketing', path: '/services/content-marketing' }]} />
          
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                SEO & Content Strategy
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Content That Ranks, Converts, <span className="text-yellow-400">and Builds Authority</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We craft compelling storytelling and authoritative SEO content that establishes your brand as an undisputed industry leader while driving massive organic growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-xl text-lg">
                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" className="border-2 border-gray-700 hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-6 rounded-xl text-lg">
                    Read Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1676279168652-90cb5e7c4af7" alt="Content strategy execution" className="rounded-2xl shadow-2xl border border-gray-800" />
            </motion.div>
          </div>

          {/* Service Overview */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Dominate Your Niche Digitally</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our holistic approach focuses on deep content strategy, rigorous SEO writing, and thought leadership positioning. We turn your blog into an automated lead generation machine, lowering your overall customer acquisition cost through compounding organic traffic.
            </p>
          </div>

          {/* What You Get & Who This Is For */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="text-3xl font-bold mb-8">What You Get</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {['Content Strategy & Roadmap', 'SEO-Optimized Blog Posts', 'Long-Form E-Books', 'Deep Keyword Research', 'Editorial Content Calendars', 'Performance Analytics'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-900 p-4 rounded-xl border border-gray-800">
                    <CheckCircle2 className="text-yellow-400 w-5 h-5 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-8">Who This Is For</h3>
              <div className="space-y-6">
                <div className="bg-black border border-gray-800 p-6 rounded-xl">
                  <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2"><Trophy className="w-5 h-5"/> Industry Leaders</h4>
                  <p className="text-gray-400">B2B companies, SaaS platforms, agencies, and businesses desperate for sustainable, organic traffic streams.</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-xl">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Search className="w-5 h-5"/> The Visibility Problem</h4>
                  <p className="text-gray-400">For those suffering from low search visibility, weak thought leadership, inconsistent publishing habits, and content that simply doesn't convert.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process & Results */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Content Engine</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: 'Research', desc: 'Keywords & intent' },
                { title: 'Planning', desc: 'Editorial calendar' },
                { title: 'Creation', desc: 'Expert writing' },
                { title: 'Optimization', desc: 'On-page SEO' },
                { title: 'Promotion', desc: 'Distribution & tracking' }
              ].map((step, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl text-center relative">
                  <div className="w-10 h-10 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">{i + 1}</div>
                  <h4 className="font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center bg-gray-900 rounded-3xl overflow-hidden mb-24 border border-gray-800">
            <div className="p-10 lg:p-16">
              <h3 className="text-3xl font-bold mb-6">Proven Outcomes</h3>
              <ul className="space-y-6">
                <li className="flex gap-4"><BarChart3 className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Exponential increases in highly qualified organic traffic</span></li>
                <li className="flex gap-4"><PenTool className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Established, undeniable industry authority that builds trust</span></li>
                <li className="flex gap-4"><FileText className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">A permanent asset library that massively reduces future CAC</span></li>
              </ul>
            </div>
            <div className="h-full min-h-[300px] bg-[url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f')] bg-cover bg-center"></div>
          </div>

          {/* CTA */}
          <div className="text-center bg-yellow-400 text-black rounded-3xl p-12 md:p-20 shadow-2xl shadow-yellow-400/20">
            <h2 className="text-4xl font-bold mb-6">Ready to Own Your Organic Growth?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">Data-driven strategy meets persuasive writing. Let's start capturing demand today.</p>
            <Link to="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 font-bold px-10 py-7 rounded-xl text-lg transition-transform hover:scale-105">
                Get Your Content Audit
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </StaticPageWrapper>
  );
};

export default ContentMarketingService;