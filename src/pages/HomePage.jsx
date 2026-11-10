import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Rocket, Code2, Users, ArrowRight, Zap, Target, PenTool, Search, Mail, LineChart, Cpu, Sparkles, Building, Briefcase, GraduationCap, Users2, Laptop, Globe2 } from 'lucide-react';
import { SectionHeading, FeatureCard, PortfolioCard, CTAButton, ProgramCard, CommunityCard } from '@/components/SharedComponents';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Growth & Giggles | AI-Optimized Marketing Career Accelerator</title>
        <meta name="description" content="Building the next generation of AI-optimized marketers. Learn modern marketing, harness AI, and build real things." />
      </Helmet>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1702047063975-0841a0621b5a" alt="AI Marketing Concept" className="w-full h-full object-cover opacity-20 dark:opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/20" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-8"
            >
              <span className="flex items-center gap-1">
                <Sparkles className="w-4 h-4" />
                The Career Accelerator for the AI Era
              </span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              Building the next generation of <span className="text-primary">AI-optimized</span> marketers
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl text-balance"
            >
              Learn modern marketing. Harness AI. Build real things. Step out of theory and into the incubator where careers are accelerated.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <CTAButton to="/programs">Explore the Accelerator</CTAButton>
              <CTAButton to="/incubator" variant="outline">See How It Works</CTAButton>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <SectionHeading 
            centered 
            title="Marketing changed. The playbook did too." 
            subtitle="Generative AI isn't replacing marketers—it's replacing marketers who don't use AI. Traditional marketing courses teach theory that's 5 years out of date. We teach the workflows of tomorrow."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="p-8 bg-card rounded-2xl border border-destructive/20 premium-shadow">
              <h3 className="text-xl text-destructive font-bold mb-4">The Old Way</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• Memorizing outdated marketing funnels</li>
                <li>• Manual, time-consuming research</li>
                <li>• Generic certificates with zero proof of work</li>
                <li>• Competing for entry-level roles with no edge</li>
              </ul>
            </div>
            <div className="p-8 bg-card rounded-2xl border border-primary/30 premium-shadow">
              <h3 className="text-xl text-primary font-bold mb-4">The Growth & Giggles Way</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li>• Executing live growth experiments</li>
                <li>• AI-augmented research and content workflows</li>
                <li>• Building a portfolio of actual shipped campaigns</li>
                <li>• Entering the market as an AI-optimized hybrid</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE DIFFERENCE */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            title="Not a course. An ecosystem."
            subtitle="We don't just teach you. We incubate your skills, provide the sandbox to build, and surround you with the network to scale."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FeatureCard 
              icon={GraduationCap}
              title="Career Accelerator"
              description="An intensive curriculum covering modern growth, performance, content, and lifecycle marketing—completely re-engineered for the AI age."
            />
            <FeatureCard 
              icon={Cpu}
              title="AI Marketing Incubator"
              description="A hands-on lab where theory becomes practice. Don't just prompt ChatGPT; build custom AI workflows, run live experiments, and ship campaigns."
            />
            <FeatureCard 
              icon={Users}
              title="Vibrant Community"
              description="Surround yourself with ambitious peers, mentors, and founders. Collaborate on projects, share experiments, and unlock hidden career opportunities."
            />
          </div>
        </div>
      </section>

      {/* 4. THE ACCELERATOR */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">The Modern Marketer Accelerator</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Participants don't just consume lessons. They build. We cover the complete end-to-end modern marketing stack.
              </p>
              <CTAButton to="/programs">View Full Curriculum</CTAButton>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {['Marketing Strategy', 'Growth Marketing', 'Performance Marketing', 'Content & Creative', 'SEO & AEO', 'Email & Lifecycle', 'Analytics', 'Experimentation', 'Automation', 'AI Workflows'].map((area, i) => (
                <ProgramCard 
                  key={i} 
                  index={i + 1} 
                  title={area} 
                  description="Master the core principles and apply them immediately in our incubator sandbox."
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. AI FOR MARKETERS */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">The goal isn't to automate the marketer.<br/>The goal is to augment the marketer.</h2>
            <p className="text-xl opacity-90">
              AI is integrated into every single module. You will learn to use AI as a co-pilot across the entire marketing workflow.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Search, label: 'Research' },
              { icon: Target, label: 'Strategy' },
              { icon: PenTool, label: 'Content' },
              { icon: Zap, label: 'Performance' },
              { icon: LineChart, label: 'Analytics' },
              { icon: Globe2, label: 'SEO/AEO' },
              { icon: Code2, label: 'Automation' },
              { icon: Rocket, label: 'Productivity' }
            ].map((item, i) => (
              <div key={i} className="bg-primary-foreground/10 rounded-2xl p-6 text-center backdrop-blur-sm border border-primary-foreground/20">
                <item.icon className="w-8 h-8 mx-auto mb-4" />
                <h4 className="font-bold">{item.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. THE INCUBATOR & 8. HOW IT WORKS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            title="The Incubator Model"
            subtitle="How we turn absolute beginners into incredibly dangerous marketers in 12 weeks."
          />
          
          <div className="relative mt-16 max-w-5xl mx-auto">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 hidden md:block" />
            <div className="grid md:grid-cols-5 gap-8 relative z-10">
              {[
                { step: '01', title: 'LEARN', desc: 'Master the theory' },
                { step: '02', title: 'APPLY', desc: 'Use AI co-pilots' },
                { step: '03', title: 'EXPERIMENT', desc: 'Test hypotheses' },
                { step: '04', title: 'BUILD', desc: 'Execute live campaigns' },
                { step: '05', title: 'SHOWCASE', desc: 'Build your portfolio' }
              ].map((phase, i) => (
                <div key={i} className="bg-card border border-border p-6 rounded-2xl premium-shadow text-center relative">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-4 absolute -top-5 left-1/2 -translate-x-1/2 border-4 border-background">
                    {phase.step}
                  </div>
                  <h4 className="font-bold mt-4 mb-2">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PORTFOLIO */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Your portfolio > your certificate."
            subtitle="Stop collecting PDF certificates. Start collecting proof of work. You will graduate with a live portfolio of shipped projects."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {['Marketing Strategy', 'Paid Media Campaign', 'AI Workflow', 'Content Strategy', 'SEO/AEO Project', 'Email Campaign', 'Growth Experiment', 'Performance Analysis', 'Case Studies'].map((item, i) => (
              <PortfolioCard key={i} category="Incubator Project" title={item} image="/portfolio/placeholder.svg" />
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHO IT'S FOR */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionHeading centered title="Who is this for?" />
          <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
            {[
              { icon: Briefcase, title: 'Early-Career Marketers' },
              { icon: Users2, title: 'Founders & Entrepreneurs' },
              { icon: PenTool, title: 'Creatives Becoming Marketers' },
              { icon: GraduationCap, title: 'Aspiring Marketers' },
              { icon: Rocket, title: 'Career Switchers' },
              { icon: Brain, title: 'Curious Humans' }
            ].map((persona, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl">
                <persona.icon className="w-6 h-6 text-primary shrink-0" />
                <h4 className="font-bold">{persona.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. COMMUNITY */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <SectionHeading 
            centered
            title="A community of ambitious builders"
            subtitle="Join a network of individuals obsessed with marketing, growth, and AI."
          />
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {[
              { icon: Brain, title: 'Learning', desc: 'Continuous education' },
              { icon: Target, title: 'Challenges', desc: 'Weekly growth sprints' },
              { icon: Users, title: 'Collaboration', desc: 'Peer-to-peer building' },
              { icon: Sparkles, title: 'Mentorship', desc: 'Access to experts' },
              { icon: Briefcase, title: 'Opportunities', desc: 'Hidden job market' },
              { icon: LineChart, title: 'Growth', desc: 'Career acceleration' }
            ].map((feat, i) => (
              <CommunityCard key={i} {...feat} />
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOR ORGANISATIONS */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6 text-primary font-semibold">
                <Building className="w-5 h-5" />
                <span>For Organisations</span>
              </div>
              <h2 className="mb-6">Upgrade your team's marketing OS.</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                We provide corporate training, AI marketing workshops, talent incubation, and custom programs to upskill your entire marketing department.
              </p>
              <ul className="space-y-3 mb-8 text-muted-foreground">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Corporate Training & Workshops</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> AI Marketing Audits</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-primary" /> Talent Incubation Pipelines</li>
              </ul>
              <CTAButton to="/for-organisations">Talk to Us</CTAButton>
            </div>
            <div className="flex-1 w-full max-w-md">
              <div className="aspect-square bg-secondary rounded-2xl relative overflow-hidden border border-border">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Corporate Training" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-32 bg-foreground text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1702047063975-0841a0621b5a')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-6xl mb-8 max-w-3xl mx-auto">The future needs better marketers.<br/>Ready to become one?</h2>
          <CTAButton to="/programs" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-8">
            Start Learning
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default HomePage;