import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Lightbulb, 
  Search, 
  PenTool, 
  Settings, 
  Share2, 
  LineChart,
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  Users,
  Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import ServicePageCTA from '@/components/ServicePageCTA';

const ContentThoughtLeadershipService = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Content & Thought Leadership', path: '/services/content-thought-leadership/' }
  ];

  // Schema data omitted for brevity in code snippet reading but included in exact output format
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Content & Thought Leadership",
      "description": "Strategic content marketing and thought leadership services for Nigerian businesses",
      "provider": {
        "@type": "Organization",
        "name": "Growth & Giggles",
        "url": "https://growthandgiggles.io/"
      }
    }
  ];

  return (
    <StaticPageWrapper>
      <Helmet>
        <title>Content & Thought Leadership Agency Nigeria | Growth & Giggles</title>
        <meta name="description" content="Establish industry authority with strategic content & thought leadership. Drive organic growth for Nigerian SaaS, startups & B2B brands." />
        {schemas.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <div className="bg-black min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1676279168652-90cb5e7c4af7" 
              alt="Modern workspace for content and thought leadership strategy" 
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
                <Lightbulb className="w-5 h-5" />
                <span className="font-semibold tracking-wide">Content & Thought Leadership</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
                Content & Thought Leadership Services for Nigerian Businesses
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                Establish undeniable industry authority with strategic content. We help Nigerian brands rise above the noise and drive sustainable organic growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/contact/">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-8 py-6 w-full sm:w-auto shadow-lg shadow-yellow-400/20 group">
                    Get a Free Content Audit
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: Problem-Focused Introduction */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Content & Thought Leadership Matters Now</h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                In today's crowded digital landscape, Nigerian startups, SaaS companies, and SMEs face a massive challenge: breaking through the noise. Generic articles and AI-generated fluff no longer impress sophisticated B2B buyers. To win trust and market share, you need robust <strong className="text-white">content & thought leadership</strong> that speaks directly to your audience's deepest pain points.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Process Section */}
        <section className="py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1610846859490-195abee6551f" 
                  alt="Professional speaking at an industry event demonstrating thought leadership" 
                  className="rounded-2xl shadow-2xl border border-gray-800 w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">Our Content & Thought Leadership Process</h2>
                <div className="space-y-8">
                  {[
                    {
                      icon: Users,
                      title: "1. Research & Audience Analysis",
                      desc: "We dive deep into understanding your target audience's pain points, the competitive landscape, and emerging industry trends to find your unique voice."
                    },
                    {
                      icon: Search,
                      title: "2. Keyword Strategy & Topic Planning",
                      desc: "We identify high-value keywords and map out robust content pillars that fuel compelling thought leadership angles."
                    }
                  ].map((step, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                        <step.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Benefits */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Benefits & Measurable Outcomes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
              {[
                {
                  metric: "150-300%",
                  title: "Organic Traffic Growth",
                  desc: "Watch your baseline metrics surge over a standard 6-month campaign."
                },
                {
                  metric: "Quality",
                  title: "Lead Generation",
                  desc: "Attract highly qualified prospects who are already educated about your solutions."
                },
                {
                  metric: "Authority",
                  title: "Industry Recognition",
                  desc: "Cement your reputation as the go-to thought leader in a crowded market."
                }
              ].map((benefit, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="text-4xl font-extrabold text-yellow-400 mb-4">{benefit.metric}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicePageCTA 
          headline="Ready to establish thought leadership?"
          subheading="Claim your spot as the definitive authority in your niche and turn thought leadership into tangible revenue today."
          serviceType="Thought Leadership"
        />
      </div>
    </StaticPageWrapper>
  );
};

export default ContentThoughtLeadershipService;