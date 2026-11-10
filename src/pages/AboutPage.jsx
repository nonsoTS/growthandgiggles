import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading, StatsSection } from '@/components/SharedComponents';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>About | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-4xl">
        <SectionHeading 
          centered
          title="Why we exist"
          subtitle="Marketing education is broken. Degrees are theoretical. Bootcamps are outdated. We built what we wished existed."
        />
        
        <div className="prose prose-lg dark:prose-invert max-w-none mt-16 text-muted-foreground">
          <p className="lead text-2xl text-foreground font-medium mb-8">
            Growth & Giggles was born from a simple observation: the gap between what marketing courses teach and what modern marketing roles actually require has never been wider.
          </p>
          <p className="mb-6">
            Generative AI didn't just add a new tool to the marketer's belt—it completely rewrote the playbook. Yet, most institutions are still teaching funnels and frameworks from 2015. 
          </p>
          <p className="mb-6">
            We built this accelerator to be the bridge. A place where theory is immediately tested by practice. Where AI isn't a novelty, but a core foundational skill. Where you don't graduate with a PDF certificate, but with a public portfolio of actual, shipped marketing assets.
          </p>
        </div>

        <StatsSection stats={[
          { value: "100%", label: "Hands-on projects" },
          { value: "0", label: "Boring exams" },
          { value: "12", label: "Intensive weeks" },
          { value: "24/7", label: "Support" }
        ]} />
      </div>
    </div>
  );
};
export default AboutPage;