import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export const SectionHeading = ({ title, subtitle, centered = false, className }) => (
  <div className={cn("mb-12", centered && "text-center mx-auto", className)}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg md:text-xl text-muted-foreground text-balance max-w-3xl"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export const FeatureCard = ({ icon: Icon, title, description, className }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={cn("p-8 rounded-2xl bg-card border border-border premium-shadow transition-all", className)}
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
      <Icon className="w-6 h-6 text-primary" />
    </div>
    <h3 className="text-xl mb-3">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export const PortfolioCard = ({ title, category, image, className }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className={cn("group rounded-2xl overflow-hidden bg-card border border-border premium-shadow cursor-pointer", className)}
  >
    <div className="aspect-video relative overflow-hidden bg-secondary">
      {image ? (
        <img src={image} alt={title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <span className="text-primary font-bold opacity-50 tracking-widest uppercase">{category}</span>
        </div>
      )}
    </div>
    <div className="p-6">
      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-2">{category}</div>
      <h3 className="text-xl group-hover:text-primary transition-colors">{title}</h3>
    </div>
  </motion.div>
);

export const CTAButton = ({ children, to, variant = 'default', className, ...props }) => {
  const isPrimary = variant === 'default';
  
  const content = (
    <Button 
      variant={variant} 
      size="lg"
      className={cn(
        "rounded-full px-8 py-6 font-semibold group", 
        isPrimary && "shadow-lg shadow-primary/20 hover:shadow-primary/40",
        className
      )}
      {...props}
    >
      {children}
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
    </Button>
  );

  return to ? <Link to={to}>{content}</Link> : content;
};

export const ProgramCard = ({ index, title, description }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="flex gap-6 p-6 rounded-2xl hover:bg-secondary/50 transition-colors border border-transparent hover:border-border"
  >
    <div className="text-4xl font-bold text-muted-foreground/30 shrink-0">
      {String(index).padStart(2, '0')}
    </div>
    <div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export const CommunityCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 bg-card border border-border rounded-2xl flex flex-col items-center text-center hover:border-primary/50 transition-colors">
    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mb-4 text-foreground">
      <Icon className="w-6 h-6" />
    </div>
    <h4 className="font-bold mb-2">{title}</h4>
    <p className="text-sm text-muted-foreground">{description}</p>
  </div>
);

export const StatsSection = ({ stats }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border my-16">
    {stats.map((stat, i) => (
      <div key={i} className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
        <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
      </div>
    ))}
  </div>
);