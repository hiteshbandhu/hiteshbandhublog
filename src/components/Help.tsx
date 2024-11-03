"use client";
import React from 'react';
import { FaRobot, FaShieldAlt, FaSearch, FaChartLine } from 'react-icons/fa';

interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    title: "Custom Knowledge Chatbots",
    description: "Transform your business data into interactive chatbots. Works with PDFs, images, documents, and more - making your information accessible and actionable.",
    icon: <FaRobot className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: "Autonomous AI Agents",
    description: "Deploy AI agents that work for you 24/7 - researching, building, and iterating on solutions while you focus on what matters most.",
    icon: <FaSearch className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: "Enterprise AI Security", 
    description: "Protect your AI investments with military-grade security. Prevent unauthorized access, prompt injections, and ensure your AI systems operate safely.",
    icon: <FaShieldAlt className="w-8 h-8 text-[var(--color-primary)]" />
  },
  {
    title: "AI Pipeline Optimization",
    description: "Identify bottlenecks, reduce costs, and enhance efficiency in your AI systems. Get expert recommendations to maximize ROI and minimize waste.",
    icon: <FaChartLine className="w-8 h-8 text-[var(--color-primary)]" />
  }
];

const Help: React.FC = () => {
  return (
    <>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent my-12" />
      
      <section className="section bg-gradient-to-b from-[var(--color-background)] to-[var(--color-accent)]/10">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-4">
            <span className="text-sm font-medium text-[var(--color-secondary)] bg-[var(--color-accent)]/20 px-4 py-2 rounded-full">
              Solutions That Deliver
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Transforming Businesses with Enterprise AI
            </h2>
            <p className="text-lg text-[var(--color-text)] opacity-80 max-w-2xl mx-auto">
              Stop wrestling with complex AI implementations. Get battle-tested solutions that deliver immediate business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="card group hover:bg-gradient-to-br hover:from-white hover:to-[var(--color-accent)]/10 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 rounded-lg bg-[var(--color-accent)]/20 group-hover:bg-[var(--color-accent)]/30 group-hover:rotate-6 transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[var(--color-text)] opacity-80">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
