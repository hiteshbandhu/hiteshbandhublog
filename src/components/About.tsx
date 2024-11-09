"use client";
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { FaGuitar, FaYoutube, FaTwitter, FaLinkedin, FaTrophy, FaCode, FaLaptopCode, FaCoffee, FaGlobe, FaSpotify } from 'react-icons/fa';
import { SiHackthebox } from 'react-icons/si';

const About: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20
      }
    }
  };

  const projects = [
    {
      title: "Hack.forge",
      description: "AI-powered website builder - create, preview, and launch in under a minute",
      link: "https://forge.wetrsfrm.co",
      icon: <SiHackthebox className="w-8 h-8 text-[var(--color-primary)]" />
    },
    {
      title: "youDocs", 
      description: "Transform YouTube playlists into readable, blog-style documentation",
      link: "https://youdocs.dev",
      icon: <FaYoutube className="w-8 h-8 text-[var(--color-primary)]" />
    },
    {
      title: "LocalTranscribe",
      description: "Capture and organize spoken ideas into a user-friendly dashboard",
      link: "https://localtranscribe.com", 
      icon: <FaCode className="w-8 h-8 text-[var(--color-primary)]" />
    },
    {
      title: "NeuraLeverage",
      description: "Interactive platform for learning prompt engineering",
      link: "https://neuraleverage.ai",
      icon: <FaLaptopCode className="w-8 h-8 text-[var(--color-primary)]" />
    }
  ];

  const achievements = [
    {
      title: "AI Solutions Delivered",
      value: "25+",
      icon: <FaLaptopCode className="w-6 h-6 text-[var(--color-primary)]" />
    },
    {
      title: "Global Clients",
      value: "10+", 
      icon: <FaGlobe className="w-6 h-6 text-[var(--color-primary)]" />
    },
    {
      title: "Hackathon Wins",
      value: "3",
      icon: <FaTrophy className="w-6 h-6 text-[var(--color-primary)]" />
    },
    {
      title: "Coffee Consumed",
      value: "∞",
      icon: <FaCoffee className="w-6 h-6 text-[var(--color-primary)]" />
    }
  ];

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
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold text-[var(--color-secondary)] bg-[var(--color-accent)]/30 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm mb-4">
              Before We Get to Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-primary)] bg-clip-text text-transparent bg-size-200 animate-gradient mb-6">
              Let's Get to Know Each Other
            </h2>
            <p className="text-lg text-[var(--color-text)]/80">
              I believe great solutions come from understanding each other. Here's a bit about who I am and what I do.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div variants={itemVariants} className="relative">
              <div className="flex gap-4 justify-center mb-6">
                {[
                  { icon: <FaTwitter />, href: "https://x.com/_hiteshbandhu" },
                  { icon: <FaLinkedin />, href: "https://linkedin.com/in/hitesh-bandhu" },
                  { icon: <FaYoutube />, href: "#" },
                  { icon: <FaSpotify />, href: "https://open.spotify.com/artist/2Qi4pAXkBuctxtpX5TUYmP" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl hover:text-[var(--color-primary)] transition-colors duration-300 backdrop-blur-xl bg-white/10 p-3 rounded-full border border-white/20"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="relative group rounded-3xl overflow-hidden h-[400px]">
                <Image
                  src="/profile-pic.jpeg"
                  alt="Hitesh Bandhu"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                  priority
                  quality={95}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="mt-16 p-6 bg-white/5 backdrop-blur-lg border border-[var(--color-accent)]/30 rounded-xl">
                <h4 className="text-xl font-semibold mb-4">Connect & Collaborate</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[var(--color-accent)]/10 rounded-lg">
                    <h5 className="font-medium mb-2">Let's Chat</h5>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Open for interesting collaborations and projects. Let's discuss how we can work together.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--color-accent)]/10 rounded-lg">
                    <h5 className="font-medium mb-2">Office Hours</h5>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Available for mentoring sessions and technical consultations.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-[var(--color-accent)]/10 rounded-lg">
                    <h5 className="font-medium mb-2">Speaking</h5>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Available for tech conferences, workshops and podcasts about AI and entrepreneurship.
                    </p>
                  </div>
                  <div className="p-4 bg-[var(--color-accent)]/10 rounded-lg">
                    <h5 className="font-medium mb-2">Investment</h5>
                    <p className="text-sm text-[var(--color-text)]/70">
                      Interested in advising and investing in promising AI startups.
                    </p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[var(--color-accent)]/10 rounded-lg">
                  <h5 className="font-medium mb-2">Current Availability</h5>
                  <p className="text-sm text-[var(--color-text)]/70">
                    Taking on select projects and consulting engagements. Book a call to discuss your needs.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="prose prose-lg">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] bg-clip-text text-transparent">
                  Hi, I'm Hitesh! 👋
                </h3>
                <p className="text-lg text-[var(--color-text)]/80 leading-relaxed">
                  I'm an AI engineer and entrepreneur focused on making tech accessible and practical. 
                  With a background in machine learning and engineering, I bridge the gap between complex technology and practical business solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-lg border border-[var(--color-accent)]/30 rounded-xl p-6 hover:border-[var(--color-accent)]/50 transition-all duration-300">
                    <div className="flex flex-col items-center text-center">
                      {achievement.icon}
                      <span className="text-2xl font-bold mt-2">{achievement.value}</span>
                      <span className="text-sm text-[var(--color-text)]/70">{achievement.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Featured Projects</h4>
                <div className="grid grid-cols-1 gap-4">
                  {projects.map((project, i) => (
                    <a
                      key={i}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-white/5 backdrop-blur-lg border border-[var(--color-accent)]/30 rounded-xl p-6 hover:border-[var(--color-accent)]/50 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-[var(--color-accent)]/10 group-hover:scale-110 transition-transform">
                          {project.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-lg group-hover:text-[var(--color-primary)] transition-colors">
                            {project.title}
                          </h5>
                          <p className="text-sm text-[var(--color-text)]/70 mt-1">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default About;
