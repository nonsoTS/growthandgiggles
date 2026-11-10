import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading, PortfolioCard } from '@/components/SharedComponents';

const ResourcesPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>Resources | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <SectionHeading 
          title="TEST The Content Hub"
          subtitle="Frameworks, teardowns, and guides on AI marketing, growth, and building a modern career."
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Placeholders for Resources */}
          {[
            { title: "The 2026 AI Marketing Stack", category: "AI Tools" },
            { title: "How to Build a Custom GPT for Brand Voice", category: "Tutorial" },
            { title: "Programmatic SEO: A Beginner's Guide", category: "Growth" },
            { title: "Why MQLs are Dead (And What to Track Instead)", category: "Analytics" },
            { title: "The Modern Marketer's Portfolio Template", category: "Career" },
            { title: "B2B Lifecycle Nurture Sequences that Convert", category: "Strategy" }
          ].map((res, i) => (
            <PortfolioCard key={i} title={res.title} category={res.category} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ResourcesPage;