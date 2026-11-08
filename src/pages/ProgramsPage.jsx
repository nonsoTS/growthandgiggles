import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading, CTAButton, ProgramCard } from '@/components/SharedComponents';

const ProgramsPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>Programs & Curriculum | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading 
          title="The Modern Marketer Accelerator"
          subtitle="A 12-week intensive incubator designed to turn you into a highly sought-after, AI-augmented growth engine."
        />
        
        <div className="mt-16 space-y-16">
          <section>
            <h3 className="mb-8 border-b border-border pb-4">What You Learn</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {['Marketing Strategy', 'Growth Marketing', 'Performance Marketing', 'Content & Creative', 'SEO & AEO', 'Email & Lifecycle Marketing', 'Analytics', 'Experimentation', 'Automation', 'AI-powered Workflows'].map((area, i) => (
                <ProgramCard key={i} index={i + 1} title={area} description="Deep dive into modern principles, enhanced by generative AI co-pilots." />
              ))}
            </div>
          </section>
          
          <section className="bg-card p-10 rounded-3xl border border-border">
            <h3 className="mb-8">What You Build (Your Portfolio)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "End-to-End GTM Strategy", desc: "A comprehensive launch plan for a real or conceptual SaaS product." },
                { title: "Programmatic SEO System", desc: "An AI-assisted content engine architecture designed to capture long-tail search." },
                { title: "Lifecycle Nurture Flow", desc: "A mapped out and copywritten 7-step email sequence." }
              ].map((proj, i) => (
                <div key={i} className="p-6 bg-background rounded-2xl border border-border">
                  <h4 className="font-bold mb-2">{proj.title}</h4>
                  <p className="text-sm text-muted-foreground">{proj.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center bg-primary/5 rounded-3xl p-12 border border-primary/20">
            <h2 className="mb-6">Ready to accelerate?</h2>
            <CTAButton to="/contact">Apply for Next Cohort</CTAButton>
          </section>
        </div>
      </div>
    </div>
  );
};
export default ProgramsPage;