import React from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading, CommunityCard, CTAButton } from '@/components/SharedComponents';
import { Brain, Target, Users, Sparkles, Briefcase, LineChart } from 'lucide-react';

const CommunityPage = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>Community | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <SectionHeading 
          centered
          title="Your unfair career advantage"
          subtitle="Marketing can be a lonely discipline. Not here. Join a collective of builders who are figuring out the future of marketing together."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          <CommunityCard icon={Brain} title="Continuous Learning" description="Weekly deep-dives, teardowns, and AMAs with industry practitioners." />
          <CommunityCard icon={Target} title="Growth Challenges" description="Monthly sprints to build a new skill, from setting up GA4 to building a custom GPT." />
          <CommunityCard icon={Users} title="Collaboration" description="Find co-founders, hire freelancers, or partner up on side projects." />
          <CommunityCard icon={Sparkles} title="Mentorship" description="Get feedback on your campaigns from seasoned Heads of Growth and CMOs." />
          <CommunityCard icon={Briefcase} title="Opportunities" description="Access our exclusive job board featuring roles that aren't posted on LinkedIn." />
          <CommunityCard icon={LineChart} title="Career Acceleration" description="Resume reviews, interview prep, and salary negotiation tactics." />
        </div>

        <div className="mt-20 text-center bg-card p-12 rounded-3xl border border-border">
          <h2 className="mb-6">Ready to find your tribe?</h2>
          <CTAButton to="/contact">Join the Waitlist</CTAButton>
        </div>
      </div>
    </div>
  );
};
export default CommunityPage;