import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Share2, MessageCircle, Heart, Users, Megaphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';

const SocialMediaMarketingService = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <StaticPageWrapper 
      title="Social Media Marketing | Growth and Giggles" 
      description="Build an engaged community that buys from you with our strategic social media management."
    >
      <div className="pt-24 pb-24 bg-black min-h-screen text-white">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }, { label: 'Social Media Marketing', path: '/services/social-media-marketing' }]} />
          
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24 mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Community & Social Growth
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Build a Community That <span className="text-yellow-400">Buys From You</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We don't just post content; we build digital ecosystems. Turn your social channels into a powerful growth engine that drives engagement, loyalty, and conversions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-xl text-lg">
                    Book a Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-2 border-gray-700 hover:border-yellow-400 text-white hover:text-yellow-400 px-8 py-6 rounded-xl text-lg">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1676276375914-cc102df16fa9" alt="Social media engagement on phone" className="rounded-2xl shadow-2xl border border-gray-800" />
            </motion.div>
          </div>

          {/* Service Overview */}
          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 mb-24 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Social Proof is Your New Currency</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Strategic social media is more than aesthetics; it's about initiating conversations that convert. We master content calendars, rapid community management, and algorithmic growth strategies to build unshakeable brand loyalty that makes selling effortless.
            </p>
          </div>

          {/* What You Get & Who This Is For */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h3 className="text-3xl font-bold mb-8">What You Get</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {['Omnichannel Social Strategy', '90-Day Content Calendars', 'Daily Content Creation', 'Proactive Community Management', 'Viral Growth Tactics', 'Engagement Analytics'].map((item, i) => (
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
                  <h4 className="text-yellow-400 font-bold mb-2 flex items-center gap-2"><Heart className="w-5 h-5"/> Community Builders</h4>
                  <p className="text-gray-400">E-commerce, SaaS, creators, and modern brands that understand the massive ROI of engaged followers.</p>
                </div>
                <div className="bg-red-950/20 border border-red-900/30 p-6 rounded-xl">
                  <h4 className="text-red-400 font-bold mb-2 flex items-center gap-2"><Megaphone className="w-5 h-5"/> Silencing the Noise</h4>
                  <p className="text-gray-400">For teams suffering from inconsistent posting schedules, dismal engagement rates, or the crushing time-drain of managing platforms manually.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Process & Results */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center">How We Grow Communities</h2>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { title: 'Audit', desc: 'Brand voice check' },
                { title: 'Plan', desc: 'Content strategy' },
                { title: 'Create', desc: 'Engaging assets' },
                { title: 'Engage', desc: 'Community replies' },
                { title: 'Optimize', desc: 'Analyze & adapt' }
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
              <h3 className="text-3xl font-bold mb-6">Real Brand Impact</h3>
              <ul className="space-y-6">
                <li className="flex gap-4"><Users className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Explosive follower growth filled with actual potential buyers</span></li>
                <li className="flex gap-4"><MessageCircle className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Skyrocketing engagement rates that trigger algorithmic boosts</span></li>
                <li className="flex gap-4"><Share2 className="text-yellow-400 shrink-0 w-6 h-6"/><span className="text-gray-300">Massive social proof that lubricates your sales funnels</span></li>
              </ul>
            </div>
            <div className="h-full min-h-[300px] bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113')] bg-cover bg-center"></div>
          </div>

          {/* CTA */}
          <div className="text-center bg-yellow-400 text-black rounded-3xl p-12 md:p-20 shadow-2xl shadow-yellow-400/20">
            <h2 className="text-4xl font-bold mb-6">Ready to Go Viral?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-medium">Stop shouting into the void. Let's build a dedicated audience that hangs onto your every word.</p>
            <Link to="/contact">
              <Button className="bg-black text-white hover:bg-gray-800 font-bold px-10 py-7 rounded-xl text-lg transition-transform hover:scale-105">
                Start Your Social Strategy
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </StaticPageWrapper>
  );
};

export default SocialMediaMarketingService;