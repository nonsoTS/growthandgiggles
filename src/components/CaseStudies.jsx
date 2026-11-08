import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CaseStudies = () => {
  const { toast } = useToast();

  const handleViewCase = () => {
    toast({
      title: "🚧 Case study details coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const caseStudies = [
    {
      client: 'TechVision AI',
      industry: 'Technology',
      challenge: 'Low brand awareness in competitive market',
      solution: 'Comprehensive thought leadership and content strategy',
      results: [
        { label: 'Traffic Increase', value: '340%', icon: TrendingUp },
        { label: 'Lead Generation', value: '5x', icon: Users },
        { label: 'Revenue Growth', value: '250%', icon: DollarSign }
      ],
      image: 'Modern tech company office with data analytics displays'
    },
    {
      client: 'EcoLife Wellness',
      industry: 'Health & Wellness',
      challenge: 'Building engaged community around sustainable living',
      solution: 'Social media strategy and community management',
      results: [
        { label: 'Community Growth', value: '50k+', icon: Users },
        { label: 'Engagement Rate', value: '12%', icon: TrendingUp },
        { label: 'Sales Increase', value: '180%', icon: DollarSign }
      ],
      image: 'Wellness community gathering and healthy lifestyle'
    },
    {
      client: 'FinanceFlow Pro',
      industry: 'Financial Services',
      challenge: 'Establishing thought leadership in fintech',
      solution: 'Content marketing and LinkedIn strategy',
      results: [
        { label: 'LinkedIn Growth', value: '800%', icon: TrendingUp },
        { label: 'Qualified Leads', value: '3x', icon: Users },
        { label: 'ROI', value: '420%', icon: DollarSign }
      ],
      image: 'Professional financial advisors in modern office setting'
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Proven <span className="text-yellow-400">Results</span> That Speak
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've helped businesses transform their digital presence and achieve remarkable growth.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-auto">
                  <img alt={`Case study: ${study.client}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1601429675201-f66be94607bb" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold">
                      {study.industry}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{study.client}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-yellow-400 font-semibold mb-2">Challenge</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-yellow-400 font-semibold mb-2">Our Solution</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-yellow-400 font-semibold mb-4">Results</h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="text-center">
                          <result.icon className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                          <div className="text-2xl font-bold text-yellow-400">{result.value}</div>
                          <div className="text-xs text-gray-400">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    onClick={handleViewCase}
                    className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold group"
                  >
                    View Full Case Study
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;