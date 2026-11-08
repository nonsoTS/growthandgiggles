import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading, FeatureCard, CTAButton } from '@/components/SharedComponents';
import { Building, Users, BookOpen, Rocket } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const ForOrganisationsPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>For Organisations | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading 
              title="Upgrade your marketing team's operating system."
              subtitle="We partner with forward-thinking companies to upskill their teams, implement AI workflows, and build talent pipelines."
            />
            
            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              <FeatureCard icon={BookOpen} title="Corporate Training" description="Private cohorts of our Accelerator tailored specifically to your company's tech stack and goals." />
              <FeatureCard icon={Rocket} title="AI Workshops" description="Intensive 1-2 day workshops to integrate Generative AI directly into your team's daily workflows." />
              <FeatureCard icon={Users} title="Talent Incubation" description="Let us train your junior hires so they can execute like mid-level marketers from day one." />
              <FeatureCard icon={Building} title="Custom Programs" description="Bespoke curriculum design to solve specific marketing capability gaps in your organisation." />
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-3xl border border-border premium-shadow h-fit sticky top-32">
            <h3 className="mb-6">Talk to Us</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); }}>
              <div className="space-y-2">
                <Label htmlFor="org-name">Company Name</Label>
                <Input id="org-name" placeholder="Acme Corp" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-email">Work Email</Label>
                <Input id="org-email" type="email" placeholder="you@company.com" className="bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="org-needs">How can we help?</Label>
                <textarea id="org-needs" className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Tell us about your team and goals..." />
              </div>
              <Button type="submit" className="w-full" size="lg">Request Consultation</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForOrganisationsPage;