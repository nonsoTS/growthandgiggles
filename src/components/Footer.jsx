import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-xl flex items-center justify-center">
                <Rocket className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">
                Growth <span className="text-primary">&</span> Giggles
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Building the next generation of AI-optimized marketers. Learn modern marketing, harness AI, and build real things in our career accelerator.
            </p>
            <div className="flex items-center gap-4">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4 text-foreground">Product</h4>
            <ul className="space-y-3">
              {['Programs', 'AI for Marketers', 'Incubator', 'Curriculum'].map(item => (
                <li key={item}><Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted-foreground hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3">
              {['About', 'Community', 'For Organisations', 'Contact'].map(item => (
                <li key={item}><Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-muted-foreground hover:text-primary transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold mb-4 text-foreground">Subscribe to our newsletter</h4>
            <p className="text-muted-foreground mb-4 text-sm">
              Get weekly insights on AI marketing, growth experiments, and career acceleration.
            </p>
            <div className="flex gap-2">
              <Input placeholder="you@example.com" className="bg-background text-foreground border-border" />
              <Button className="shrink-0 bg-primary text-primary-foreground hover:bg-primary/90"><ArrowRight className="w-4 h-4" /></Button>
            </div>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Growth & Giggles. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;