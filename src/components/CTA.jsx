import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const CTA = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 items-center p-8 md:p-12">
            
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <div className="w-20 h-20 bg-black/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                  <Rocket className="w-10 h-10 text-black" />
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Ready to Transform Your Brand?
              </h2>
              
              <p className="text-xl text-black/80 mb-8 max-w-xl mx-auto lg:mx-0">
                Join hundreds of successful brands who trust Growth and Giggles to drive their digital growth. Fill out the form, and let's start the conversation.
              </p>

              <div className="hidden lg:flex flex-col gap-4 text-black/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-medium">No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-medium">Free Initial Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-black rounded-full"></div>
                  <span className="text-sm font-medium">Customized Growth Plans</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto lg:ml-auto"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;