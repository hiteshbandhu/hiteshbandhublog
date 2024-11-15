'use client';
import React from 'react';
import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-background)] border-t border-[var(--color-accent)]/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]" />
              <span className="font-bold text-xl">Hitesh</span>
            </Link>
            <p className="text-[var(--color-text)] opacity-80">
              Helping businesses achieve breakthrough results with AI solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[var(--color-text)] opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link href="https://blog.hiteshbandhu.xyz" className="text-[var(--color-text)] opacity-80 hover:opacity-100 transition-opacity">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://cal.com/hiteshbandhu" className="text-[var(--color-text)] opacity-80 hover:opacity-100 transition-opacity">
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/_hiteshbandhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/hiteshbandhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/hitesh-bandhu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-accent)]/10 text-center text-[var(--color-text)] opacity-60">
          <p>&copy; {currentYear} Hitesh Bandhu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
