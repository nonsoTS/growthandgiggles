import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Target, 
  TrendingUp, 
  Globe2, 
  Building2, 
  Clock, 
  Users, 
  ArrowRight,
  Search,
  PenTool,
  Lightbulb,
  Rocket,
  Image as ImageIcon,
  MessageCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Breadcrumb from '@/components/Breadcrumb';

const ContentMarketingAgencyLagos = () => {
  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Lagos Content Marketing Agency', path: '/content-marketing-agency-lagos/' }
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Growth & Giggles",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "[PLACEHOLDER - Lagos Street Address]",
        "addressLocality": "Lagos",
        "addressRegion": "LA",
        "postalCode": "[PLACEHOLDER - ZIP]",
        "addressCountry": "NG"
      },
      "telephone": "[PLACEHOLDER - Contact Number]",
      "email": "hello@growthandgiggles.io",
      "areaServed": {
        "@type": "City",
        "name": "Lagos",
        "sameAs": "https://en.wikipedia.org/wiki/Lagos"
      },
      "url": "https://growthandgiggles.io/content-marketing-agency-lagos/",
      "priceRange": "$$",
      "image": "https://images.unsplash.com/photo-1494023103962-211190f8f250",
      "description": "Top content marketing agency in Lagos, Nigeria. Strategic content services for SaaS, startups & B2B brands.",
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "6.5244",
        "longitude": "3.3792"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Content Marketing",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Growth & Giggles"
      },
      "areaServed": {
        "@type": "City",
        "name": "Lagos"
      },
      "description": "Strategic content marketing services tailored for businesses in Lagos, Nigeria."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does a content marketing agency in Lagos do?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A content marketing agency in Lagos creates and distributes valuable, relevant content designed to attract and engage a specifically defined local or global audience. We help Lagos businesses, from Yaba startups to Victoria Island enterprises, drive profitable customer action through strategic SEO, thought leadership, and digital storytelling."
          }
        },
        {
          "@type": "Question",
          "name": "How much does content marketing cost in Lagos, Nigeria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost varies depending on the scope of services, content volume, and your specific growth goals. We offer custom packages tailored for Lagos businesses that provide high ROI by directly impacting your lead generation and customer acquisition efforts."
          }
        },
        {
          "@type": "Question",
          "name": "How long before content marketing delivers results in Lagos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While some content can drive immediate traffic, sustainable, compounded organic results typically take 3-6 months. We account for Lagos market dynamics and local search competition to set realistic, data-backed timelines for your brand's growth."
          }
        },
        {
          "@type": "Question",
          "name": "Why should I hire a Lagos-based content marketing agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hiring a local agency ensures timezone alignment, an intrinsic understanding of the Nigerian cultural nuance, and deep insights into the Lagos digital landscape. We know how your target audience thinks, searches, and buys."
          }
        },
        {
          "@type": "Question",
          "name": "Can you help my Lagos startup with content marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We specialize in scaling startups within the Lagos tech ecosystem. We provide tailored growth marketing frameworks and strategic content planning to establish your authority and acquire early adopters rapidly."
          }
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://growthandgiggles.io/" },
        { "@type": "ListItem", "position": 2, "name": "Lagos Content Marketing Agency", "item": "https://growthandgiggles.io/content-marketing-agency-lagos/" }
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
    <>
      <Helmet>
        <title>Content Marketing Agency Lagos | Growth & Giggles Nigeria</title>
        <meta name="description" content="Top content marketing agency in Lagos, Nigeria. Strategic content services for SaaS, startups & B2B brands. Proven results for Lagos businesses." />
        <link rel="canonical" href="https://growthandgiggles.io/content-marketing-agency-lagos/" />
        
        <meta property="og:title" content="Content Marketing Agency in Lagos | Growth & Giggles" />
        <meta property="og:description" content="Professional content marketing services in Lagos, Nigeria - drive growth for your business" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://growthandgiggles.io/content-marketing-agency-lagos/" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1494023103962-211190f8f250" />
        <meta property="og:image:alt" content="content marketing agency serving Lagos businesses" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content Marketing Agency in Lagos | Growth & Giggles" />
        <meta name="twitter:description" content="Top content marketing agency in Lagos, Nigeria. Strategic content services for SaaS, startups & B2B brands. Proven results for Lagos businesses." />
        <meta name="twitter:image" content="https://images.unsplash.com/photo-1494023103962-211190f8f250" />

        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <main className="bg-black min-h-screen">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1494023103962-211190f8f250" 
              alt="content marketing agency serving Lagos businesses" 
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
                <MapPin className="w-5 h-5" />
                <span className="font-semibold tracking-wide">Based in Lagos, Nigeria</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl">
                Content Marketing Agency in Lagos, Nigeria
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
                Drive organic growth, build industry authority, and capture your ideal market. We deliver tailored content strategies that help Lagos businesses dominate the digital space.
              </p>
              <div className="flex justify-center items-center gap-4 flex-col sm:flex-row">
                <Link to="/contact/">
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg px-10 py-7 shadow-lg shadow-yellow-400/20 group rounded-xl w-full sm:w-auto">
                    Partner With Us Today
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/case-studies/">
                  <Button variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold text-lg px-10 py-7 rounded-xl transition-all duration-300 w-full sm:w-auto">
                    View Lagos Case Studies
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: Localized Introduction */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Thriving in Nigeria's Most Competitive Market</h2>
            <div className="text-xl text-gray-300 leading-relaxed space-y-6">
              <p>
                In the bustling economic heart of Nigeria, standing out is harder than ever. Lagos-based startups in the Yaba tech hub, corporate giants in Victoria Island (VI) and Ikoyi, and scaling SMEs across Lekki face intense competition for digital attention. Traditional advertising is losing its edge, and generic marketing no longer moves the needle. This is exactly why specialized content marketing matters for Lagos businesses fighting to secure their digital footprint.
              </p>
              <p>
                As a premier <strong>content marketing agency in Lagos</strong>, Growth & Giggles understands the unique heartbeat of this city. We don't just write articles; we craft compelling digital narratives that resonate with local buyers while maintaining global standards. Whether you are an ambitious SaaS founder or a B2B enterprise, our mission as a top <strong>content marketing agency in Lagos</strong> is to turn your platforms into powerful revenue-generating assets.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Why Choose a Lagos-Based Agency */}
        <section className="py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Why Choose a Lagos-Based Content Marketing Agency?</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Globe2, title: "Local Market Understanding", desc: "We possess deep insights into the nuances of the Nigerian consumer, allowing us to craft messages that strike the perfect cultural chord." },
                { icon: Clock, title: "Timezone Alignment", desc: "Working with a local team means real-time collaboration, swift revisions, and immediate local support when you need it most." },
                { icon: Users, title: "Audience Connection", desc: "We understand the Lagos business culture intimately. We know how your target demographic thinks, searches, and makes purchasing decisions." },
                { icon: Target, title: "Digital Landscape Expertise", desc: "Our strategies are built around the specific digital habits and platform preferences unique to the Nigerian market." },
                { icon: Building2, title: "Tech Ecosystem Ties", desc: "Deeply embedded in the local tech and startup ecosystem, we help position your brand accurately among peers and investors." },
                { icon: TrendingUp, title: "Hyper-Local SEO", desc: "We optimize your content to capture high-intent local search traffic alongside broader, global search terms." }
              ].map((benefit, i) => (
                <div key={i} className="bg-black border border-gray-800 p-8 rounded-2xl shadow-lg hover:border-yellow-400/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 bg-yellow-400/10 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3: Our Content Marketing Services in Lagos */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Content Marketing Services in Lagos</h2>
              <p className="text-xl text-gray-400">
                A comprehensive suite of solutions tailored to help Lagos businesses scale rapidly and dominate their respective niches.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="grid sm:grid-cols-2 gap-6 order-2 lg:order-1">
                {[
                  { icon: Search, title: "SEO Content Writing", link: "/services/seo-content-writing/", desc: "Rank higher on Google and capture high-intent traffic with optimized content creation." },
                  { icon: PenTool, title: "Content Strategy", link: "/services/content-strategy/", desc: "Strategic content planning that aligns perfectly with your Lagos business objectives." },
                  { icon: Lightbulb, title: "Thought Leadership", link: "/services/content-thought-leadership/", desc: "Establish your executives as industry authorities with high-impact positioning." },
                  { icon: Rocket, title: "Growth Marketing", link: "/services/growth-marketing/", desc: "Data-driven, growth-focused content designed to acquire and retain users at scale." },
                  { icon: ImageIcon, title: "Creative Media", link: "/services/creative-media/", desc: "Engaging visual and creative content production that captures the vibrant Lagos spirit." },
                  { icon: MessageCircle, title: "Community Building", link: "/services/community-building/", desc: "Fostering loyal brand advocates through active community engagement content." }
                ].map((service, i) => (
                  <Link key={i} to={service.link} className="block group">
                    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl h-full hover:border-yellow-400 transition-colors">
                      <service.icon className="w-8 h-8 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{service.title}</h3>
                      <p className="text-sm text-gray-400">{service.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1567080185975-88eedc2b273a" 
                  alt="content marketing agency serving Lagos businesses - team working" 
                  className="rounded-2xl shadow-2xl border border-gray-800 w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4 & 5: NAP & Map Embedded */}
        <section className="py-24 bg-gray-900 border-y border-gray-800">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* NAP Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Get in Touch with Growth & Giggles</h2>
                <p className="text-gray-400 mb-8 text-lg">
                  Ready to partner with a trusted <strong>content marketing agency in Lagos</strong>? We are available to discuss your brand's growth strategy.
                </p>
                
                <div className="space-y-6 bg-black p-8 rounded-2xl border border-gray-800">
                  <div className="flex items-start gap-4">
                    <Building2 className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Business Name</h3>
                      <p className="text-gray-300">Growth & Giggles</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Address</h3>
                      <p className="text-black bg-yellow-400 font-semibold px-2 py-1 rounded inline-block mt-1">
                        [PLACEHOLDER - Lagos Address]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Phone</h3>
                      <p className="text-black bg-yellow-400 font-semibold px-2 py-1 rounded inline-block mt-1">
                        [PLACEHOLDER - Contact Number]
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Email</h3>
                      <a href="mailto:hello@growthandgiggles.io" className="text-yellow-400 hover:underline">hello@growthandgiggles.io</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe2 className="w-6 h-6 text-yellow-400 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white text-lg">Service Area</h3>
                      <p className="text-gray-300">Lagos, Nigeria (and nationwide)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-white">Visit Us in Lagos</h3>
                <p className="text-gray-400 mb-6">
                  Our agency operates out of the vibrant heart of Lagos. Below is where our map embed will be placed to help you navigate to our offices.
                </p>
                <div className="w-full h-[300px] bg-black border border-gray-800 rounded-2xl flex items-center justify-center flex-col p-6 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1672935060524-45adfffdc187" 
                      alt="Lagos business district map placeholder" 
                      className="w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity"
                    />
                  </div>
                  <div className="relative z-10">
                    <MapPin className="w-12 h-12 text-yellow-400 mb-4 mx-auto animate-bounce" />
                    <span className="bg-yellow-400 text-black px-4 py-2 font-bold rounded-lg shadow-lg">
                      [PLACEHOLDER - GOOGLE MAP EMBED]
                    </span>
                    <p className="text-sm text-gray-300 mt-4 max-w-xs mx-auto">
                      *User to add actual Google Maps iframe code coordinates later.*
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 6: Industries We Serve in Lagos */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-white">Industries We Serve in Lagos</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Lagos Startups</h3>
                <p className="text-gray-400">Guiding early-stage companies through their rapid growth phase to secure funding and market share.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">SaaS Companies</h3>
                <p className="text-gray-400">Expert B2B positioning that educates users and aggressively drives recurring software subscriptions.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">B2B Brands</h3>
                <p className="text-gray-400">Providing authoritative enterprise solutions, case studies, and whitepapers to shorten long sales cycles.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">SMEs</h3>
                <p className="text-gray-400">Driving targeted local market expansion to help traditional businesses thrive in a digital-first economy.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">E-commerce Brands</h3>
                <p className="text-gray-400">Enhancing product descriptions and customer education to drastically improve conversion rates online.</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-yellow-400/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">Tech Companies</h3>
                <p className="text-gray-400">With a specialized focus on the Yaba tech hub, we articulate complex technical value to broad audiences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 7: Localized FAQ Section */}
        <section className="py-24 bg-gray-900 border-t border-gray-800">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">Content Marketing Agency in Lagos - FAQs</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "What does a content marketing agency in Lagos do?",
                  a: "As a dedicated content marketing agency in Lagos, we provide comprehensive services—from SEO blogging to executive thought leadership. We help local businesses establish authority, drive organic traffic, and navigate the specific nuances of the Nigerian business context to generate high-quality leads."
                },
                {
                  q: "How much does content marketing cost in Lagos, Nigeria?",
                  a: "Pricing is structured around your exact needs and growth targets. We offer custom packages ensuring extreme value for Lagos businesses. Our focus is strictly on ROI, transforming your marketing spend into a measurable driver of customer acquisition."
                },
                {
                  q: "How long before content marketing delivers results in Lagos?",
                  a: "We set realistic expectations based on current Lagos market dynamics and local search competition. Typically, consistent, high-quality content marketing takes 3-6 months to establish a compounded, sustainable flow of organic traffic and tangible results."
                },
                {
                  q: "Why should I hire a Lagos-based content marketing agency?",
                  a: "The local advantage is immense. You benefit from seamless timezone alignment, an innate cultural understanding of your audience, and deep local market expertise. We understand how to position your brand authentically within Nigeria."
                },
                {
                  q: "Can you help my Lagos startup with content marketing?",
                  a: (
                    <>
                      Yes, startup expertise is in our DNA. By utilizing <Link to="/services/growth-marketing/" className="text-yellow-400 hover:underline">growth marketing</Link> tactics and deliberate <Link to="/services/content-strategy/" className="text-yellow-400 hover:underline">content strategy</Link>, we help Yaba and Lekki-based startups establish immediate trust and rapidly acquire their first users.
                    </>
                  )
                }
              ].map((faq, i) => (
                <div key={i} className="bg-black border border-gray-800 rounded-xl p-6 shadow-md">
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

        {/* SECTION 8: Strong CTA Section */}
        <section className="py-24 relative bg-yellow-400 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl mix-blend-multiply"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 max-w-4xl mx-auto leading-tight">
              Ready to Grow Your Lagos Business with Content Marketing?
            </h2>
            <p className="text-xl text-black/80 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
              Don't let your competitors capture your market share. Partner with the top <strong>content marketing agency in Lagos</strong> to build an unstoppable digital presence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact/">
                  <Button className="bg-black text-yellow-400 hover:bg-gray-900 font-bold text-lg px-10 py-7 rounded-xl shadow-2xl transition-colors w-full sm:w-auto">
                    Get a Free Content Audit for Your Lagos Business
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/case-studies/">
                  <Button variant="outline" className="border-2 border-black bg-transparent text-black hover:bg-black hover:text-yellow-400 font-bold text-lg px-10 py-7 rounded-xl transition-colors w-full sm:w-auto">
                    View Our Lagos Case Studies
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContentMarketingAgencyLagos;