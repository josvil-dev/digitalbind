import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart2, 
  Share2, 
  Search, 
  Globe, 
  PenTool, 
  Palette 
} from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      title: "Digital Marketing Strategy",
      description: "Amplify your online presence and growth with bespoke marketing strategies, driving targeted audience reach, lead generation, and cost-effective brand visibility in the digital landscape.",
      href: "/services/digital-marketing",
      Icon: BarChart2
    },
    {
      title: "Social Media Marketing",
      description: "Unlock your brand's growth potential with our tailored social media marketing strategies that drive brand awareness, engagement, and revenue.",
      href: "/services/social-media",
      Icon: Share2
    },
    {
      title: "Search Engine Marketing",
      description: "Balancing organic SEO and PPC tactics to give you high digital visibility and conversion in your target audience.",
      href: "/services/sem",
      Icon: Search
    },
    {
      title: "Website Design & Development",
      description: "Whether you're creating or renovating your digital home we'll help you to create an unforgettable online experience.",
      href: "/services/web-design",
      Icon: Globe
    },
    {
      title: "Content Marketing",
      description: "Build credibility and establish your brand as an industry leader all while improving your SEO with carefully curated content that resonates with your target audience, enhances brand awareness, and drives business growth",
      href: "/services/content-marketing",
      Icon: PenTool
    },
    {
      title: "Brand Development",
      description: "Transform your brand from bland to brilliant. Together we will create a brand to make you stand out, build trust, and gain a competitive edge in your market niche for sustainable growth.",
      href: "/services/brand-development",
      Icon: Palette
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-8 px-8 lg:px-16 bg-none">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 mt-6 text-start"
        >
          Our Services
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="inline-block p-3 rounded-lg bg-gray-50 text-[#F90040] group-hover:bg-[#F90040] group-hover:text-white transition-colors duration-300">
                  <service.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#F90040] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {service.description}
                </p>
                <div className="flex items-center space-x-2 text-[#F90040] font-semibold">
                  <span>View Services</span>
                  <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;