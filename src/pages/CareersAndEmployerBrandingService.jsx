import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Search, 
  Star, 
  PenTool, 
  Megaphone, 
  HeartHandshake, 
  LineChart,
  ArrowRight,
  TrendingUp,
  Target,
  Rocket,
  ShieldCheck,
  Building2,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';

const CareersAndEmployerBrandingService = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services/' },
    { label: 'Careers and Employer Branding', path: '/services/careers-and-employers-branding/' }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Careers and Employer Branding",
      "description": "Comprehensive employer branding and careers strategy services for Nigerian companies",
      "provider": {
        "@type": "Organization",
        "name": "Growth & Giggles",
        "url": "https://growthandgiggles.io/"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Nigeria",
        "containsPlace": {
          "@type": "Place",
          "name": "Lagos"
        }
      },
      "url": "https://growthandgiggles.io/services/careers-and-employers-branding/",
      "offers": {
        "@type": "Offer",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceType": "https://schema.org/MinimumPrice",
          "price": "Custom pricing"
        }
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is employer branding and why does it matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employer branding is a comprehensive approach to defining and marketing your company's reputation as a great place to work. It deeply influences how potential and current employees perceive your culture and values. It matters because effective careers and employer branding significantly accelerates talent acquisition, bringing top-tier professionals directly to your doorstep."
          }
        },
        {
          "@type": "Question",
          "name": "How much does employer branding and careers strategy cost in Nigeria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The investment for employer branding depends entirely on the scope of your company's needs. We build custom packages tailored to fit startups to established enterprises. The ROI of an employer branding investment is incredibly strong: it slashes costly recruitment agency fees, reduces time-to-hire, and directly lowers turnover costs."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a strong employer brand?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Building an authentic employer brand is an ongoing journey. Typically, you will begin seeing initial impact within 3-6 months as new messaging, careers content, and employee value propositions roll out. However, maintaining that reputation requires consistent, ongoing brand building and internal engagement."
          }
        },
        {
          "@type": "Question",
          "name": "How does employer branding help with talent retention?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Employer branding directly impacts talent retention by aligning an employee's expectations with the actual day-to-day culture. When companies actively promote their values and foster employee advocacy, team members feel a deep sense of belonging and engagement, leading to far higher retention rates and workplace satisfaction."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help us create careers content and job descriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. Through our content strategy services, we map out engaging narratives for your careers page, including compelling employee testimonials and culture spotlights. We also utilize our SEO content writing expertise to craft highly optimized, irresistible job descriptions that naturally rank well and attract the best candidates."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://growthandgiggles.io/" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://growthandgiggles.io/services/" },
        { "@type": "ListItem", "position": 3, "name": "Careers and Employer Branding", "item": "https://growthandgiggles.io/services/careers-and-employers-branding/" }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Growth & Giggles",
      "url": "https://growthandgiggles.io/"
    }
  ];

  return (
    <StaticPageWrapper
      title="Employer Branding & Careers Services Nigeria | Growth & Giggles"
      description="Build your employer brand and attract top talent. Careers and employer branding strategies for Nigerian companies seeking to hire and retain talent."
      canonical="https://growthandgiggles.io/services/careers-and-employers-branding/"
      keywords="careers and employer branding, employer brand, talent acquisition, recruitment marketing, employee retention"
      openGraph={{
        'og:title': 'Careers and Employer Branding Services | Growth & Giggles',
        'og:description': 'Employer branding and careers services for Nigerian businesses - attract and retain top talent',
        'og:type': 'website',
        'og:url': 'https://growthandgiggles.io/services/careers-and-employers-branding/',
        'og:image': 'https://images.unsplash.com/photo-1676285436425-d71869a678d8'
      }}
      twitter={{
        'twitter:card': 'summary_large_image',
        'twitter:title': 'Careers and Employer Branding Services | Growth & Giggles',
        'twitter:description': 'Build your employer brand and attract top talent. Careers and employer branding strategies for Nigerian companies seeking to hire and retain talent.',
        'twitter:image': 'https://images.unsplash.com/photo-1676285436425-d71869a678d8'
      }}
      schemas={schemas}
    >
      <div className="bg-black min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1676285436425-d71869a678d8" 
              alt="employer branding and talent recruitment strategy" 
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black"></div>
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
                <Users className="w-5 h-5" />
                <span className="font-semibold tracking-wide">Attract & Retain Top Talent</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
                Careers and Employer Branding Services for Nigerian Companies
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                Transform how candidates see your company. We build powerful employer brands that effortlessly attract elite talent and dramatically boost employee retention.
              </p>
              <div className="flex justify-center items-center">
                <Link to="/contact/">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-7 shadow-lg shadow-yellow-400/20 group rounded-xl">
                    Get a Free Employer Brand Audit
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
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Why Your Employer Brand is Your Best Recruiter</h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                In today's highly competitive market, Nigerian startups, SaaS platforms, and SMEs constantly battle to secure A-level players. Top-tier candidates no longer just look for a paycheck; they seek an inspiring culture, strong leadership, and a deep sense of purpose. If your company struggles with talent acquisition or suffers from high turnover, a weak or invisible employer brand is often the root cause.
              </p>
              <p>
                A proactive <strong>careers and employer branding</strong> strategy is not optional, it is a critical business asset. As a premier <Link to="/content-marketing-agency-lagos/" className="text-yellow-400 hover:underline font-medium">content marketing agency in Lagos</Link>, Growth & Giggles serves as your strategic partner. We weave your core values into a compelling narrative, ensuring your <strong>careers and employer branding</strong> efforts instantly resonate with the exact talent you want to hire and retain. Stop chasing candidates; let a powerful <strong>careers and employer branding</strong> presence make them come to you.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Process Section */}
        <section className="py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">Our Careers and Employer Branding Process</h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1676276383587-c734979da868" 
                  alt="diverse team collaboration and company culture" 
                  className="rounded-2xl shadow-2xl border border-gray-800 w-full"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                    <Search className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">1. Employer Brand Audit & Strategy</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We begin by assessing your current employer brand perception. Through internal surveys and external audits, we identify your unique brand strengths and market gaps, ultimately developing a comprehensive employer brand strategy designed for long-term hiring success.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                    <Star className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">2. Employer Value Proposition Development</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We define a sharply tailored unique employee value proposition (EVP). By articulating your true company culture and core values, we create compelling employer messaging that authentically answers the question: "Why should top talent work here?"
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                    <PenTool className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">3. Careers Content & Storytelling</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Leveraging our <Link to="/services/content-strategy/" className="text-yellow-400 hover:underline">content strategy</Link> expertise, we craft captivating careers page content. We highlight genuine employee testimonials, impactful success stories, and seamlessly communicate your dynamic company culture and benefits to prospective hires.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mt-8">
              <div className="space-y-10">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                    <Megaphone className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">4. Recruitment Marketing & Promotion</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Through expert <Link to="/services/seo-content-writing/" className="text-yellow-400 hover:underline">SEO content writing</Link>, we ensure precise job posting optimization. We design a robust recruitment channel strategy that actively feeds a continuous talent pipeline development engine, drastically lowering reliance on external recruiters.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                    <HeartHandshake className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">5. Employee Advocacy & Engagement</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Your best advocates already work for you. We help you build vibrant employee advocacy programs, refine your internal communication strategy, and implement powerful employee retention initiatives that keep your workforce happy and deeply engaged.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-yellow-400/10 rounded-xl flex items-center justify-center shrink-0 border border-yellow-400/20">
                    <LineChart className="w-6 h-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-white">6. Analytics & Talent Metrics</h3>
                    <p className="text-gray-400 leading-relaxed">
                      We track essential recruitment metrics meticulously. By measuring ongoing employer brand perception and conversion rates on your careers assets, we constantly optimize your overall talent acquisition ROI.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1698047681432-006d2449c631" 
                  alt="talent acquisition and hiring process" 
                  className="rounded-2xl shadow-2xl border border-gray-800 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Benefits & Measurable Outcomes */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Benefits & Measurable Outcomes</h2>
              <p className="text-xl text-gray-400">
                A strategically defined employer brand does more than look good; it acts as a magnet for top talent, fundamentally altering your business trajectory with measurable outcomes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { metric: "Quality", title: "Increased Application Quality", desc: "Attract candidates who align perfectly with your values, dramatically improving the standard of every job application received." },
                { metric: "Speed", title: "Reduced Time-to-Hire", desc: "A strong reputation means candidates say 'yes' faster. Significantly cut down time-to-hire and overall recruitment costs." },
                { metric: "Loyalty", title: "Improved Retention Rates", desc: "Employees who connect with an authentic brand narrative stay longer, fundamentally lowering costly turnover metrics." },
                { metric: "Trust", title: "Enhanced Brand Reputation", desc: "Build a stellar employer brand reputation that echoes across platforms like LinkedIn, Glassdoor, and within industry circles." },
                { metric: "Culture", title: "Stronger Employee Engagement", desc: "Foster a robust company culture where team members feel heard, valued, and intrinsically motivated to perform." },
                { metric: "Edge", title: "Competitive Advantage", desc: "Gain massive leverage in the talent market, decisively beating out competitors who rely solely on generic job postings." }
              ].map((benefit, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-yellow-400/10 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-extrabold text-yellow-400 mb-4">{benefit.metric}</div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: Industries We Serve */}
        <section className="py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Industries We Empower</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-black border border-gray-800 p-6 rounded-xl flex items-start gap-4 hover:border-yellow-400/50 transition-colors">
                <Rocket className="w-8 h-8 text-yellow-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Startups</h3>
                  <p className="text-gray-400">Build a captivating employer brand from scratch, ensuring you can attract pioneering talent eager for high growth.</p>
                </div>
              </div>
              <div className="bg-black border border-gray-800 p-6 rounded-xl flex items-start gap-4 hover:border-yellow-400/50 transition-colors">
                <Target className="w-8 h-8 text-yellow-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">SaaS Companies</h3>
                  <p className="text-gray-400">Attract specialized, highly sought-after tech and sales talent by clearly visualizing your unique innovation culture.</p>
                </div>
              </div>
              <div className="bg-black border border-gray-800 p-6 rounded-xl flex items-start gap-4 hover:border-yellow-400/50 transition-colors">
                <Briefcase className="w-8 h-8 text-yellow-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">B2B Brands</h3>
                  <p className="text-gray-400">Facilitate professional talent acquisition with sophisticated messaging that appeals to seasoned enterprise experts.</p>
                </div>
              </div>
              <div className="bg-black border border-gray-800 p-6 rounded-xl flex items-start gap-4 hover:border-yellow-400/50 transition-colors">
                <Building2 className="w-8 h-8 text-yellow-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">SMEs</h3>
                  <p className="text-gray-400">Gain the toolkit required for successfully competing for top-tier talent against larger, established multinational corporations.</p>
                </div>
              </div>
              <div className="bg-black border border-gray-800 p-6 rounded-xl flex items-start gap-4 hover:border-yellow-400/50 transition-colors">
                <ShieldCheck className="w-8 h-8 text-yellow-400 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tech Companies</h3>
                  <p className="text-gray-400">Execute specialized talent recruitment via deep technical storytelling, showcasing modern stacks and engineering excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQ Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What is employer branding and why does it matter?",
                  a: "Employer branding is the comprehensive approach a company takes to define and promote itself as an exceptional place to work. It crucially matters because a strong reputation significantly accelerates talent acquisition, magnetically pulling high-value candidates to your organization."
                },
                {
                  q: "How much does employer branding and careers strategy cost in Nigeria?",
                  a: "Pricing for employer branding and careers strategy is tailored to the specific size and needs of your business. We offer scalable custom packages. Crucially, the return on this investment is proven—by lowering external agency fees and cutting turnover costs, an employer branding campaign rapidly pays for itself."
                },
                {
                  q: "How long does it take to build a strong employer brand?",
                  a: "Cultivating a revered employer brand sets realistic expectations at a typically 3-6 months timeframe for initial market impact. During this time, updated messaging and pipelines take root. True success, however, stems from persistent, ongoing brand building."
                },
                {
                  q: "How does employer branding help with talent retention?",
                  a: "There is an undeniable connection between a truthful employer brand and retention. By clearly communicating culture and values alignment from day one, you ensure candidates know what they are signing up for. This generates immense employee engagement benefits and keeps your best people longer."
                },
                {
                  q: "Can you help us create careers content and job descriptions?",
                  a: (
                    <>
                      Yes, our capabilities are vast. Through our dedicated <Link to="/services/content-strategy/" className="text-yellow-400 hover:underline">content strategy</Link> solutions, we map out engaging employee stories. We also leverage expert <Link to="/services/seo-content-writing/" className="text-yellow-400 hover:underline">SEO content writing</Link> to craft optimized job postings that outrank competitors on search and job boards alike.
                    </>
                  )
                }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                    <span className="text-yellow-400">Q.</span> {faq.q}
                  </h3>
                  <div className="text-gray-300 leading-relaxed ml-7">
                    {faq.a}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: Strong CTA Section */}
        <section className="py-24 relative bg-yellow-400 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 max-w-4xl mx-auto leading-tight">
              Ready to Build a Powerful Employer Brand?
            </h2>
            <p className="text-xl text-black/80 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Stop struggling with slow hiring and high turnover. Start attracting top talent effortlessly with an employer brand that commands absolute respect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/contact/">
                <Button className="bg-black text-yellow-400 hover:bg-gray-900 font-bold text-lg px-10 py-6 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300">
                  Get a Free Employer Brand Audit
                </Button>
              </Link>
              <Link to="/case-studies/">
                <Button variant="outline" className="border-2 border-black bg-transparent text-black hover:bg-black hover:text-yellow-400 font-bold text-lg px-10 py-6 rounded-lg transition-all duration-300">
                  View Our Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default CareersAndEmployerBrandingService;