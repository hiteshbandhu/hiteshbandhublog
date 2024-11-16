"use client";
import React, { useState } from 'react';
import Link from 'next/link';

interface NavigationItem {
  href: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { href: '/', label: 'Home' },
  { href: 'https://blog.hiteshbandhu.xyz', label: 'Blog' },
];

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFlag, setShowFlag] = useState(true);

  return (
    <header className="w-full fixed top-0 z-50">
      {showFlag && (
        <div className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-4 flex items-center justify-center relative">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span role="img" aria-label="rocket">🚀</span>
            Want an AI Product Developed?
            <span role="img" aria-label="sparkles">✨</span>
            <a
              href="https://twitter.com/messages/compose?recipient_id=1508303360348213248"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline ml-2 text-yellow-100"
            >
              DM me on X (Twitter)
            </a>
          </div>
          <button
            onClick={() => setShowFlag(false)}
            className="absolute right-4 p-1 hover:bg-blue-700/50 rounded transition-colors duration-200"
            aria-label="Close banner"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      <nav className="bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-accent)]/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)]" />
                <span className="font-bold text-xl">Hitesh</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <ul className="flex items-center space-x-8">
                  {navigationItems.map(({ href, label }) => (
                    <li key={href}>
                      <Link 
                        href={href}
                        className="px-3 py-2 rounded-md text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-accent)]/10 transition-all duration-200 font-medium"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cal.com Link */}
            <div className="hidden md:block">
              <a 
                href="https://cal.com/hiteshbandhu"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-colors duration-200 font-medium"
              >
                Schedule a Call
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-[var(--color-text)] hover:bg-[var(--color-accent)]/10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <ul className="space-y-2">
                {navigationItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link 
                      href={href}
                      className="block px-3 py-2 rounded-md text-[var(--color-text)] hover:bg-[var(--color-accent)]/10 transition-colors duration-200 font-medium"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <a 
                    href="https://cal.com/hiteshbandhu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-center rounded-md bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 transition-colors duration-200 font-medium"
                  >
                    Schedule a Call
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;