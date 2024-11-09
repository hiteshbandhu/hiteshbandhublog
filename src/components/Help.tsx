"use client";
import React, { useEffect, useRef } from 'react';
import { FaRobot, FaShieldAlt, FaSearch, FaChartLine } from 'react-icons/fa';
import { motion, useInView, useAnimation } from 'framer-motion';
import CountUp from 'react-countup';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  stats: {
    value: number;
    label: string;
  };
  size?: 'large' | 'small';
}

const services: ServiceItem[] = [
  {
    title: "Custom Knowledge Chatbots",
    description: "Transform your business data into interactive chatbots. Works with PDFs, images, documents, and more - making your information accessible and actionable.",
    icon: <FaRobot className="w-8 h-8 text-[var(--color-primary)]" />,
    stats: {
      value: 98,
      label: "Accuracy Rate"
    },
    size: 'large'
  },
  {
    title: "Autonomous AI Agents",
    description: "Deploy AI agents that work for you 24/7 - researching, building, and iterating on solutions while you focus on what matters most.",
    icon: <FaSearch className="w-8 h-8 text-[var(--color-primary)]" />,
    stats: {
      value: 65,
      label: "Hours Saved/Week"
    },
    size: 'small'
  },
  {
    title: "Enterprise AI Security", 
    description: "Protect your AI investments with military-grade security. Prevent unauthorized access, prompt injections, and ensure your AI systems operate safely.",
    icon: <FaShieldAlt className="w-8 h-8 text-[var(--color-primary)]" />,
    stats: {
      value: 99.9,
      label: "Security Score"
    },
    size: 'small'
  },
  {
    title: "AI Pipeline Optimization",
    description: "Identify bottlenecks, reduce costs, and enhance efficiency in your AI systems. Get expert recommendations to maximize ROI and minimize waste.",
    icon: <FaChartLine className="w-8 h-8 text-[var(--color-primary)]" />,
    stats: {
      value: 40,
      label: "Cost Reduction %"
    },
    size: 'large'
  }
];

const Help: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  return (
    <>
      <div className="relative w-full h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse" />
      </div>
      
      <section ref={ref} className="section relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-background)] to-[var(--color-accent)]/20" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.07]" />
        
        <motion.div 
          className="container relative mx-auto px-4 max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-20 space-y-6"
            variants={itemVariants}
          >
            <span className="inline-block text-sm font-semibold text-[var(--color-secondary)] bg-[var(--color-accent)]/30 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm">
              Solutions That Deliver
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent bg-size-200 animate-gradient">
              Helping Businesses Integrate AI
            </h2>
            <p className="text-lg md:text-xl text-[var(--color-text)] opacity-80 max-w-2xl mx-auto leading-relaxed">
              Stop wrestling with complex AI implementations. Get battle-tested solutions that deliver immediate business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`${
                  service.size === 'large' 
                    ? 'lg:col-span-2 min-h-[380px]' 
                    : 'min-h-[380px]'
                }`}
              >
                <div className="relative h-full group rounded-2xl bg-white/5 backdrop-blur-lg border-2 border-[var(--color-accent)]/30 hover:border-[var(--color-accent)]/50 transition-all duration-500 overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--color-accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative h-full p-8 flex flex-col">
                    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)]/20 to-[var(--color-accent)]/5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      {service.icon}
                    </div>
                    
                    <h3 className="mt-6 text-2xl font-bold text-[var(--color-primary)]">
                      {service.title}
                    </h3>
                    
                    <p className="mt-4 text-[var(--color-text)]/80 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="mt-6 pt-6 border-t border-[var(--color-accent)]/10">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[var(--color-text)]/60">
                          {service.stats.label}
                        </span>
                        <div className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                          <CountUp
                            end={service.stats.value}
                            duration={3}
                            decimals={service.stats.value % 1 !== 0 ? 1 : 0}
                            suffix="%"
                            enableScrollSpy
                            scrollSpyDelay={200}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Help;
