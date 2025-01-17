'use client';

import { motion } from 'framer-motion';
import { Code, Rocket, Laptop, Smartphone, Code2 } from 'lucide-react';
import { ReactNode } from 'react';
import AnimatedText from './Components/AnimatedText';
import ServicesGrid from './Components/SevicesGrid';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingElement = ({ children, className = "", delay = 0 }: FloatingElementProps) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ 
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
    className={`absolute ${className}`}
  >
    {children}
  </motion.div>
);

// Rest of your code remains exactly the same

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[43rem]  relative bg-[#140941] flex items-center overflow-hidden">
        {/* Background Patterns */}
        {/* Floating Elements */}
        <FloatingElement className="top-20 left-[15%] text-white/20">
          <Code2 size={48} />
        </FloatingElement>

        <FloatingElement className="top-40 right-[20%] text-white/20" delay={1}>
          <div className="w-16 h-16 border-4 border-white/20 rounded-lg rotate-12" />
        </FloatingElement>
        <FloatingElement className="top-80 right-[28%] text-white/20" delay={1}>
          <Code2 size={75} />
        </FloatingElement>

        <FloatingElement className="bottom-32 left-[25%] text-white/20" delay={2}>
          <Laptop size={48} />
        </FloatingElement>

        <FloatingElement className="top-60 right-[30%] text-white/20" delay={1.5}>
          <div className="w-12 h-12 border-4 border-white/20 rounded-full" />
        </FloatingElement>

        <FloatingElement className="bottom-40 right-[25%] text-white/20" delay={2.5}>
          <Smartphone size={40} />
        </FloatingElement>

        <FloatingElement className="top-32 left-[30%] text-white/20" delay={0.5}>
          <div className="w-20 h-20 border-4 border-white/20 rotate-45" />
        </FloatingElement>

        {/* Main Content */}
        <div className="container mx-auto px-6 mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left lg:w-2/3"
          >
            <AnimatedText />
            <p className="text-xl text-white/90 mb-8">
              South Africas premier digital agency crafting innovative marketing solutions that drive results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F90040] text-white px-8 py-4 border-2 border-[#F90040] rounded-full text-lg font-bold hover:border-white transition-colors duration-300 shadow-lg"
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
        
        {/* Additional Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/10 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
      </section>
      {/* Services Section */}
      <section className="pt-8 pb-20 bg-gray-50">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
       
          <motion.h1 
            variants={fadeInUp}
            className="text-2xl font-bold text-start mb-4 lg:text-3xl text-gray-900"
          >
          <span className="text-blue-100 font-bold "> Digital Bind</span> is a full-statck digital creative agency.
          </motion.h1>
         <p>We are a digital marketing agency specialising in solving business challenges through the use of creativity and technology. We deliver personalised solutions tailored to your unique customers’ profile, your budget and your goals.</p> 
          
        </motion.div>

        <ServicesGrid />
      </section>

      {/* About Section */}
      <section className="py-20 bg-black text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-6"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
              <p className="text-gray-300 mb-6">
                With years of experience in the South African market, we understand
                the unique challenges and opportunities in the digital landscape.
                Our team of experts delivers cutting-edge solutions that help your
                business stand out.
              </p>
              <ul className="space-y-4">
                {[
                  "Local market expertise",
                  "Innovative solutions",
                  "Results-driven approach",
                  "Dedicated support"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center space-x-2"
                  >
                    <span className="text-[#FF5353]">✓</span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-lg p-8"
            >
              <img 
                src="/api/placeholder/600/400" 
                alt="Team at work" 
                className="rounded-lg w-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#FF5353] text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Clients" },
              { number: "200+", label: "Projects" },
              { number: "98%", label: "Satisfaction" },
              { number: "10+", label: "Years" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-gray-300 mb-8">
              Lets discuss how we can help you achieve your digital marketing goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF5353] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff6b6b] transition-colors duration-300 shadow-lg"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}