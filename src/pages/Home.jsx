import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Code, Palette, BookOpen, ArrowRight, TrendingUp, Building2, Briefcase, Zap, FileText, Share2, BarChart3, LineChart, Globe2, ShieldCheck, PieChart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TrustBanner from '@/components/TrustBanner';
import YouTubeSection from '@/components/YouTubeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CaseStudiesPreview from '@/components/CaseStudiesPreview';
import LeadMagnetSection from '@/components/LeadMagnetSection';

const Home = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemas = [{
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Growth & Giggles",
      "description": "Content marketing agency in Nigeria specializing in B2B and SaaS content strategy",
      "url": "https://growthandgiggles.io/",
      "email": "hello@growthandgiggles.io",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Lagos",
          "addressCountry": "Nigeria"
        }
      },
      "sameAs": ["https://www.linkedin.com/company/growthandgiggles", "https://twitter.com/growthandgiggles"]
    }, {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Growth & Giggles",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lagos",
        "addressCountry": "Nigeria"
      },
      "email": "hello@growthandgiggles.io",
      "areaServed": ["Nigeria", "Lagos"],
      "serviceType": ["Content Marketing", "SEO Content Writing", "Content Strategy"]
    }, {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://growthandgiggles.io/"
      }]
    }
  ];

  const services = [
    {
      title: "Web Design, Development and Maintenance",
      icon: Code,
      desc: "Robust, high-performance websites and portals engineered to convert visitors into loyal customers.",
      path: "/services/web-design-development",
      subServices: [
        "Website Design & Website Redesign",
        "Custom Website Development",
        "E-commerce Web Development",
        "CMS and Portal Development",
        "Website Optimization & Website Security",
        "Website Maintenance and Support",
        "Website Hosting and Domain Setup"
      ]
    },
    {
      title: "Social Media Marketing",
      icon: Share2,
      desc: "Strategic social media management that builds community, drives engagement, and amplifies brand voice.",
      path: "/services/social-media-marketing",
      subServices: [
        "Social Media Strategy Development",
        "Content Creation and Curation",
        "Social Media Campaigns",
        "Community Management",
        "Influencer Marketing",
        "Social Media Account Management",
        "Social Media Analytics and Reporting"
      ]
    },
    {
      title: "Digital Marketing Services",
      icon: TrendingUp,
      desc: "Data-driven performance marketing campaigns designed to maximize ROI and aggressive market expansion.",
      path: "/services/digital-marketing",
      subServices: [
        "Keyword Research & Ads Creation",
        "Google Ads Management",
        "Facebook & Instagram Ads Management",
        "Retargeting Campaigns",
        "Ad Performance Analytics & Reporting",
        "Competitor Analysis",
        "Content Optimization"
      ]
    },
    {
      title: "Content Marketing",
      icon: FileText,
      desc: "Compelling storytelling and authoritative content that establishes your brand as an undisputed industry leader.",
      path: "/services/content-marketing",
      subServices: [
        "Article Writing",
        "Copywriting",
        "E-books and Whitepapers",
        "Short Video Content Creation",
        "Infographic Design"
      ]
    },
    {
      title: "Graphic Design",
      icon: Palette,
      desc: "Visually stunning brand identities and marketing collateral that captures attention and inspires action.",
      path: "/services/graphic-design",
      subServices: [
        "Corporate Branding",
        "Logo Design / Business Cards / Letterhead",
        "Company Profile Design",
        "Posters / Banners / Flyers / Brochures",
        "Infographics and Digital Art"
      ]
    },
    {
      title: "Training & Consultation",
      icon: BookOpen,
      desc: "Empower your internal teams with cutting-edge digital skills through our expert-led workshops and training modules.",
      path: "/services/training-consultation",
      subServices: [
        "Web Design Training",
        "Digital Marketing Training (Full Suite)",
        "SEO Training",
        "Social Media Marketing Training",
        "Graphic Design Training",
        "PPC Advertising Training",
        "Content Strategy Training",
        "Analytics Training"
      ]
    }
  ];

  return <>
      <Helmet>
        <title>Content Marketing Agency Nigeria | Growth & Giggles</title>
        <meta name="description" content="Helping African Startups Grow Faster and Smarter with data-driven marketing and high-converting design." />
        <link rel="canonical" href="https://growthandgiggles.io/" />
        
        <meta property="og:title" content="Content Marketing Agency Nigeria | Growth & Giggles" />
        <meta property="og:description" content="Helping African Startups Grow Faster and Smarter with data-driven marketing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthandgiggles.io/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1625296276703-3fbc924f07b5" />
        
        {schemas.map((schema, index) => <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>)}
      </Helmet>

      <main style={{ scrollBehavior: "smooth" }} className="bg-black min-h-screen text-white w-full">
        {/* Redesigned Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-0">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/30 rounded-full blur-[120px] mix-blend-screen"></div>
              <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-yellow-500/20 rounded-full blur-[150px] mix-blend-screen"></div>
            </div>
            {/* Subtle overlay image */}
            <div className="absolute inset-0 z-0 opacity-10">
               <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Abstract business growth" className="w-full h-full object-cover mix-blend-luminosity" />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <motion.div initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              ease: "easeOut"
            }}>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} transition={{
                  delay: 0.2,
                  duration: 0.5
                }}
                className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
              >
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold tracking-wide text-sm uppercase">Trusted by 10+ Global Startups</span>
                </motion.div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight tracking-tight text-white drop-shadow-2xl">
                  Helping Startups Grow <br className="hidden md:block" />
                  <span className="text-yellow-400 relative inline-block">
                    Faster and Smarter
                    <motion.span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400/50 rounded-full" initial={{
                    width: 0
                  }} animate={{
                    width: "100%"
                  }} transition={{
                    delay: 0.8,
                    duration: 0.8
                  }}></motion.span>
                  </span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed font-medium max-w-3xl mx-auto">
                  We partner with ambitious teams to launch, optimize, and scale their digital presence using data-driven marketing, high-converting design, and performance campaigns.
                </p>

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.4,
                  duration: 0.6
                }}
                className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
              >
                  <Link to="/contact/" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-7 shadow-xl shadow-yellow-400/20 group rounded-xl transition-all duration-300 hover:scale-105">
                      Get Started
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <a href="#caseStudies" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-bold text-lg px-10 py-7 rounded-xl transition-all duration-300">
                      View Our Work
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trust Banner Section */}
        <TrustBanner />

        {/* YouTube Section */}
        <YouTubeSection
          videoId={"Y4JspeXxLQo"}
          videoTitle={"See How We Help Nigerian Businesses Grow"}
          videoSubtitle={"Discover our strategic approach to content marketing. Watch how Growth & Giggles transforms digital presence into predictable, scalable revenue engines for ambitious brands."}
          videoAlt={"Video thumbnail showing business growth strategy presentation"}
          videoMetaTitle={"Growth & Giggles Approach"}
        />

        {/* Who We Help Section */}
        <section className="py-24 bg-black border-t border-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Who We Help</h2>
              <p className="text-xl text-gray-400">
                We partner with ambitious companies ready to dominate their digital footprint. Our customized content solutions fit your unique industry and growth stage.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
              icon: Zap,
              title: "Startups",
              desc: "We help agile startups find their voice and scale rapidly. Establish early market authority and acquire your first 1,000 customers through high-impact, scalable content frameworks."
            }, {
              icon: LineChart,
              title: "SaaS Companies",
              desc: "Turn your software product into an industry must-have. Our content marketing drives continuous customer acquisition, educates users, and vastly improves long-term retention rates."
            }, {
              icon: Briefcase,
              title: "SMEs",
              desc: "Affordable, high-impact content solutions for growing businesses. We help small and medium enterprises compete with giants through targeted local and global SEO optimization."
            }, {
              icon: Building2,
              title: "B2B Brands",
              desc: "Enterprise-level content strategy and execution. We navigate complex sales cycles with authoritative whitepapers, case studies, and thought leadership that closes enterprise deals."
            }].map((segment, index) => <div key={index} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl hover:border-yellow-400/50 transition-colors flex flex-col h-full group">
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <segment.icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{segment.title}</h3>
                  <p className="text-gray-400 leading-relaxed flex-grow">{segment.desc}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-yellow-400/5 blur-[150px] rounded-full pointer-events-none"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-xl text-gray-400">
                A full-suite of content and strategy solutions designed to make your brand impossible to ignore. Every service is a step toward massive revenue growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 grid-auto-rows-fr">
              {services.map((service, index) => {
              const isExpanded = expandedIndex === index;
              const Icon = service.icon;

              return (
                <div 
                  key={index} 
                  className={`border ${isExpanded ? 'border-yellow-400 bg-gray-900/80' : 'border-gray-800 bg-gray-900'} rounded-2xl overflow-hidden transition-all duration-300`}
                >
                  <button 
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="w-full text-left p-6 md:p-8 flex items-start md:items-center justify-between gap-4 focus:outline-none"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isExpanded ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-yellow-400'}`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className={`text-xl md:text-2xl font-bold transition-colors ${isExpanded ? 'text-yellow-400' : 'text-white'}`}>
                          {service.title}
                        </h3>
                        {!isExpanded && (
                          <p className="text-gray-400 text-sm md:text-base mt-2 hidden sm:block">
                            {service.desc}
                          </p>
                        )}
                      </div>
                    </div>
                    <ChevronDown className={`w-6 h-6 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-yellow-400' : 'text-gray-500'}`} />
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 md:px-8 md:pb-8 border-t border-gray-800/50 pt-6">
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {service.desc}
                          </p>
                          <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-8">
                            {service.subServices.map((sub, i) => (
                              <li key={i} className="flex items-start text-gray-300">
                                <span className="text-yellow-400 mr-2 font-bold">•</span>
                                <span className="text-sm font-medium">{sub}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex gap-4 flex-wrap">
                            <Link to={service.path}>
                              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold px-8 py-6 rounded-xl shadow-lg shadow-yellow-400/10">
                                Learn More <ArrowRight className="ml-2 w-4 h-4" />
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
            </div>
          </div>
        </section>

        {/* Testimonials & Case Studies Section Additions */}
        <TestimonialsSection />
        
        <CaseStudiesPreview />

        {/* Why Choose Growth & Giggles Section */}
        <section className="py-24 bg-black border-y border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Why Choose <span className="text-yellow-400">Growth & Giggles</span>
                </h2>
                <p className="text-xl text-gray-300 mb-10">
                  We are more than just a vendor; we are your strategic growth partners. Here is why the most innovative brands trust us with their content.
                </p>

                <div className="space-y-8">
                  {[{
                  icon: BarChart3,
                  title: "Data-Driven Approach",
                  desc: "Every content decision is backed by comprehensive analytics, search trend data, and market research. No guesswork, just results."
                }, {
                  icon: PieChart,
                  title: "ROI-Focused",
                  desc: "We measure success by your revenue growth, lead quality, and customer acquisition—not just empty vanity metrics."
                }, {
                  icon: Globe2,
                  title: "Nigeria-Based Expertise",
                  desc: "Deep understanding of the Nigerian and Lagos market dynamics, paired with global standards of digital excellence."
                }, {
                  icon: ShieldCheck,
                  title: "Proven Track Record",
                  desc: "Trusted by 50+ B2B and SaaS companies across Africa to consistently deliver high-ranking, high-converting content."
                }, {
                  icon: FileText,
                  title: "Transparent Reporting",
                  desc: "Detailed monthly reports showing exact content performance, traffic growth, and direct business impact."
                }].map((item, idx) => <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                        <item.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>)}
                </div>
              </div>
              
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Team analyzing data and revenue growth" className="rounded-2xl shadow-2xl border border-gray-800 w-full" />
                <div className="absolute -bottom-8 -left-8 bg-gray-900 border border-gray-800 p-6 rounded-2xl shadow-2xl hidden md:block">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">340%</div>
                      <div className="text-gray-400 text-sm">Average Traffic Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Lead Magnet Section */}
        <LeadMagnetSection />

      </main>
    </>;
};
export default Home;