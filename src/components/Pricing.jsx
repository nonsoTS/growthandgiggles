import React from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Pricing = () => {
  const { toast } = useToast();

  const handleSelectPlan = (planName) => {
    toast({
      title: `${planName} plan selected!`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const plans = [
    {
      name: 'Starter',
      icon: Sparkles,
      price: '2,499',
      description: 'Perfect for small businesses getting started',
      features: [
        '10 Blog Posts/Month',
        'Social Media Management (2 Platforms)',
        'Monthly Strategy Call',
        'Basic Analytics Reports',
        'Email Support',
        'Content Calendar'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Growth',
      icon: Zap,
      price: '4,999',
      description: 'Ideal for scaling businesses',
      features: [
        '20 Blog Posts/Month',
        'Social Media Management (4 Platforms)',
        'Bi-weekly Strategy Calls',
        'Advanced Analytics & Reporting',
        'Priority Support',
        'Content Calendar',
        'Video Content (2/Month)',
        'Email Marketing Campaigns',
        'SEO Optimization'
      ],
      popular: true,
      cta: 'Start Growing'
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      description: 'Full-service solution for established brands',
      features: [
        'Unlimited Content Creation',
        'Full Multi-Platform Management',
        'Weekly Strategy Sessions',
        'Custom Analytics Dashboard',
        'Dedicated Account Manager',
        '24/7 Support',
        'Video Production (Unlimited)',
        'Influencer Partnerships',
        'Community Management',
        'Custom Integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Pricing Plans</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Choose Your <span className="text-yellow-400">Growth Path</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Scale as you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`relative bg-gray-900 border-2 rounded-2xl p-8 ${
                plan.popular
                  ? 'border-yellow-400 shadow-2xl shadow-yellow-400/20'
                  : 'border-gray-800 hover:border-yellow-400/50'
              } transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`w-16 h-16 bg-gradient-to-br ${
                plan.popular ? 'from-yellow-400 to-orange-400' : 'from-gray-800 to-gray-700'
              } rounded-xl flex items-center justify-center mb-6`}>
                <plan.icon className={`w-8 h-8 ${plan.popular ? 'text-black' : 'text-yellow-400'}`} />
              </div>

              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-6">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-yellow-400">
                    {plan.price === 'Custom' ? '' : '$'}
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-400">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSelectPlan(plan.name)}
                className={`w-full font-semibold ${
                  plan.popular
                    ? 'bg-yellow-400 text-black hover:bg-yellow-500'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">
            All plans include a 14-day money-back guarantee
          </p>
          <p className="text-gray-500">
            Need a custom solution? <button onClick={() => handleSelectPlan('Custom')} className="text-yellow-400 hover:underline">Contact our team</button>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;