import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading, FeatureCard } from '@/components/SharedComponents';
import { Search, PenTool, Target, Zap, LineChart, Code2, Rocket, Globe } from 'lucide-react';

const AIForMarketersPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>AI For Marketers | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading 
          centered
          title="The AI-Optimized Marketer"
          subtitle="AI is not a separate discipline. It is a layer of intelligence applied across the entire marketing workflow. Here is how we teach it."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            { icon: Search, title: 'AI for Research', desc: 'Synthesize market reports, analyze competitor gaps, and build audience personas in minutes.' },
            { icon: Target, title: 'AI for Strategy', desc: 'Use AI as a strategic sounding board to test hypotheses and simulate market reactions.' },
            { icon: PenTool, title: 'AI for Content', desc: 'Move beyond generic ChatGPT outputs. Build custom GPTs that match your exact brand voice.' },
            { icon: Zap, title: 'AI for Performance', desc: 'Analyze ad creative performance and generate high-converting variations instantly.' },
            { icon: LineChart, title: 'AI for Analytics', desc: 'Ask natural language questions to your data and uncover hidden retention metrics.' },
            { icon: Globe, title: 'SEO & AEO', desc: 'Optimize for Google, but also learn how to optimize for ChatGPT and Perplexity (AEO).' },
            { icon: Code2, title: 'Automation', desc: 'Connect Zapier, Make, and LLM APIs to build self-running marketing engines.' },
            { icon: Rocket, title: 'Productivity', desc: 'Reclaim 10+ hours a week by automating mundane administrative marketing tasks.' }
          ].map((item, i) => (
            <FeatureCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AIForMarketersPage;