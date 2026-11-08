import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading, PortfolioCard } from '@/components/SharedComponents';

const IncubatorPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>The Marketing Incubator | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading 
          title="The Incubator Model"
          subtitle="We don't do exams. We do deployments. The Incubator is our proprietary sandbox where you build real marketing assets."
        />
        
        <div className="mt-16 bg-card border border-border p-8 rounded-3xl mb-16 premium-shadow">
          <h3 className="mb-6">How it works</h3>
          <div className="space-y-6">
            <div className="flex gap-4"><div className="font-bold text-primary w-12 shrink-0">01</div><div><h4 className="font-bold">LEARN</h4><p className="text-muted-foreground">Master the theoretical frameworks of modern marketing.</p></div></div>
            <div className="flex gap-4"><div className="font-bold text-primary w-12 shrink-0">02</div><div><h4 className="font-bold">APPLY</h4><p className="text-muted-foreground">Use AI tools to accelerate the initial execution phase.</p></div></div>
            <div className="flex gap-4"><div className="font-bold text-primary w-12 shrink-0">03</div><div><h4 className="font-bold">EXPERIMENT</h4><p className="text-muted-foreground">Test variables in a safe environment and analyze the data.</p></div></div>
            <div className="flex gap-4"><div className="font-bold text-primary w-12 shrink-0">04</div><div><h4 className="font-bold">BUILD</h4><p className="text-muted-foreground">Construct the final asset—a campaign, strategy, or workflow.</p></div></div>
            <div className="flex gap-4"><div className="font-bold text-primary w-12 shrink-0">05</div><div><h4 className="font-bold">SHOWCASE</h4><p className="text-muted-foreground">Add the completed asset to your public professional portfolio.</p></div></div>
          </div>
        </div>

        <h3 className="mb-8">Incubator Output Examples</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {['SaaS Onboarding Audit', 'B2B LinkedIn Strategy', 'AI-Generated Ad Creatives'].map((title, i) => (
            <PortfolioCard key={i} title={title} category="Shipped Project" />
          ))}
        </div>
      </div>
    </div>
  );
};
export default IncubatorPage;