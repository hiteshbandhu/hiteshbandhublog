'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaRss, FaArrowRight, FaTwitter, FaGithub } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center section mt-12">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-[var(--color-accent)] bg-opacity-30 rounded-full relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_2s_infinite] -translate-x-full group-hover:translate-x-full transition-transform"></div>
                <span className="animate-pulse mr-2">🚀</span>
                <span className="text-sm font-medium">Available for New Projects</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Making AI Work for You
              </h1>
              <p className="text-lg md:text-xl text-[var(--color-text)] opacity-90">
                Hey! I'm <strong>Hitesh</strong>, and I help <strong>businesses achieve breakthrough results</strong> with AI. 
                I transform how companies operate by <em>unlocking knowledge trapped in documents</em>, <em>ensuring AI systems you can trust</em>, and <em>automating costly manual processes</em>. My solutions deliver <strong>immediate business value</strong> without the complexity - so you can <strong>focus on growth</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[
                    "/logos/microsoft.svg",
                    "/logos/amazon.svg", 
                    "/logos/google.svg"
                  ].map((logo, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white border-2 border-white overflow-hidden">
                      <Image
                        src={logo}
                        alt="Client logo" 
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm">
                  Trusted by <span className="font-medium">25+ businesses</span> worldwide
                </p>
              </div>
              
              <p className="text-lg text-[var(--color-text)] opacity-90">
                Want to explore how AI can transform your business? Let's chat on <a href="https://x.com/_hiteshbandhu" target="_blank" rel="noopener noreferrer">Twitter</a> or <a href="https://linkedin.com/in/hitesh-bandhu" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-center">
                Let's Talk
              </Link>
              <Link href="/blog" className="btn-secondary text-center">
                Read My Blog
              </Link>
            </div>

            
          </div>
          <div className="relative">
            {/* New Blog Toast */}
            <div className="absolute -top-12 -left-8 z-10">
              <Link href="/blog/latest" className="group">
                <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-lg shadow-lg border border-[var(--color-accent)] hover:scale-105 transition-transform duration-300">
                  <div className="p-2 bg-[var(--color-accent)]/20 rounded-full">
                    <FaRss className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">New Blog Post</p>
                    <p className="text-xs text-[var(--color-text)]/70">Building Enterprise RAG Systems</p>
                  </div>
                  <FaArrowRight className="w-4 h-4 text-[var(--color-secondary)] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

            {/* Achievement Badges */}
            <div className="absolute -top-4 right-0 z-10 space-y-3">
              <a href="https://forge.wetrsfrm.co" target="_blank" rel="noopener noreferrer" className="block">
                <div className="bg-white px-4 py-2 rounded-lg shadow-lg border border-[var(--color-accent)] rotate-6 hover:rotate-0 transition-all">
                  <p className="text-sm font-medium text-[var(--color-primary)]">🔥 Just Launched: hack.forge Beta</p>
                </div>
              </a>
            </div>

            <div className="relative">
              <Image
                src="/illustration.jpg"
                alt="Hitesh - AI Consultant"
                width={600}
                height={600}
                className=""
                priority
                quality={90}
              />
              
              <div className="flex justify-center gap-6 mt-8">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
                  <FaTwitter className="w-5 h-5 text-[#1DA1F2]" />
                  <div className="flex flex-col">
                    <span className="font-medium">1001+ Followers</span>
                    <a href="https://twitter.com/_hiteshbandhu" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-secondary)]">Follow on X</a>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md">
                  <FaGithub className="w-5 h-5" />
                  <div className="flex flex-col">
                    <span className="font-medium">80+ Contributions</span>
                    <a href="https://github.com/hiteshbandhu" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-secondary)]">View GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 pt-12">
              {[
                { label: 'Successful Deployments', value: '10+' },
                { label: 'Open Source Contributions', value: '50+' },
                { label: 'Technical Articles', value: '20+' }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-[var(--color-primary)]">{stat.value}</div>
                  <div className="text-sm text-[var(--color-text)] opacity-70">{stat.label}</div>
                </div>
              ))}
            </div>
      </div>
    </section>
  );
};

export default Hero;
