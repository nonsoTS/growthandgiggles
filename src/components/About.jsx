import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award } from 'lucide-react';
const About = () => {
  const values = [{
    icon: Target,
    title: 'Strategic Focus',
    description: 'Data-driven strategies tailored to your unique business goals'
  }, {
    icon: Users,
    title: 'Community First',
    description: 'Building engaged communities that drive sustainable growth'
  }, {
    icon: TrendingUp,
    title: 'Growth Oriented',
    description: 'Proven methodologies that deliver measurable results'
  }, {
    icon: Award,
    title: 'Premium Quality',
    description: 'Excellence in every piece of content we create'
  }];
  return <section id="about" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider"></span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Your Partner in <span className="text-yellow-400">Digital Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">At Growth and Giggles, we believe in the power of strategic content and authentic engagement. We're not just another agency, we're your growth partners.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} whileHover={{
          y: -10
        }} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-yellow-400/50 transition-all">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>)}
        </div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="bg-gradient-to-r from-yellow-400/10 to-transparent border border-yellow-400/30 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Why Choose Growth and Giggles?</h3>
              <p className="text-gray-300 mb-4">
                We combine creativity with data-driven insights to deliver content that not only engages but converts. Our team of experts brings years of experience across industries, ensuring your brand stands out in a crowded digital landscape.
              </p>
              <p className="text-gray-300">
                From thought leadership to viral social campaigns, we've helped hundreds of brands achieve their growth objectives with strategies that work.
              </p>
            </div>
            <div className="relative">
              <img alt="Team collaboration and strategy session" className="rounded-xl w-full h-auto" src="https://images.unsplash.com/photo-1690191886622-fd8d6cda73bd" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;