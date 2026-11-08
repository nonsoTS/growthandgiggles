import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Monitor, Code, Zap, MousePointerClick, Shield, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';

const WebDesignDevelopmentService = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <StaticPageWrapper 
      title="Web Design & Development | Growth and Giggles" 
      description="High-converting websites engineered for performance, user experience, and growth."
    >
      <div className="pt-24 pb-24 bg-black min-h-screen text-white">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Web Design & Development', path: '/services/web-design-development' }]} />
          
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Technical Excellence
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Websites That Convert Visitors <span className="text-yellow-400">Into Customers</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your website is your best salesperson. We engineer lightning-fast, visually striking digital experiences designed explicitly to maximize your conversion rates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-xl text-lg">
                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/case-studies">
                  <Button variant="outline" className="border-2 border-gray-700 hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-6 rounded-xl text-lg">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1613395752352-292cf623d389" alt="Web development wireframing" className="rounded-2xl shadow-2xl border border-gray-800" />
            </motion.div>
          </div>

          {/* Service Overview */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Digital Real Estate That Performs</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We blur the lines between brilliant UX/UI design and robust technical architecture. Every pixel and line of code we write serves a single purpose: guiding your users seamlessly toward the checkout or contact form.
            </p>
          </div>

          {/* What You Get & Who This Is For */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="text-3xl font-bold mb-8">What You Get</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {['Custom UX/UI Design', 'Responsive Development', 'Conversion Optimization', 'Page Speed Engineering', 'Ongoing Maintenance', 'Security Protocols', 'E-commerce Architecture', 'Analytics Integration'].map((item, i) => (
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
                  <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2"><Code className="w-5 h-5"/> Ambitious Enterprises</h4>
                  <p className="text-gray-400">E-commerce, SaaS, and service providers who understand their website is their most important revenue channel.</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-xl">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Zap className="w-5 h-5"/> Fixing Digital Decay</h4>
                  <p className="text-gray-400">For businesses bleeding money due to slow load times, confusing user journeys, outdated aesthetics, and hidden technical debt.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process & Results */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Build Process</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: 'Discovery', desc: 'Requirements scope' },
                { title: 'Design', desc: 'Wireframes & UI' },
                { title: 'Develop', desc: 'Clean, modern code' },
                { title: 'Testing', desc: 'QA & Optimization' },
                { title: 'Launch', desc: 'Deployment & Support' }
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
              <h3 className="text-3xl font-bold mb-6">Unfair Digital Advantage</h3>
              <ul className="space-y-6">
                <li className="flex gap-4"><MousePointerClick className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Drastically improved conversion rates and lower bounce metrics</span></li>
                <li className="flex gap-4"><Gauge className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Lightning-fast load times that dominate Google's Core Web Vitals</span></li>
                <li className="flex gap-4"><Shield className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Bulletproof security with zero-headache ongoing technical support</span></li>
              </ul>
            </div>
            <div className="h-full min-h-[300px] bg-[url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')] bg-cover bg-center"></div>
          </div>

          {/* CTA */}
          <div className="text-center bg-yellow-400 text-black rounded-3xl p-12 md:p-20 shadow-2xl shadow-yellow-400/20">
            <h2 className="text-4xl font-bold mb-6">Ready for a High-Performance Website?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">Stop losing customers to bad UX. Let's build a platform that scales with your ambition.</p>
            <Link to="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 font-bold px-10 py-7 rounded-xl text-lg transition-transform hover:scale-105">
                Discuss Your Project
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </StaticPageWrapper>
  );
};

export default WebDesignDevelopmentService;