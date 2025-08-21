'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

interface StatProps {
  number: string;
  label: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-white p-10 rounded-2xl text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent hover:border-primary-blue opacity-0 translate-y-8"
    >
      <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-blue to-secondary-blue rounded-full flex items-center justify-center text-white text-3xl">
        {icon}
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-primary-dark">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <div className="text-center">
    <span className="block text-4xl font-bold text-primary-blue">{number}</span>
    <span className="text-gray-600 text-sm uppercase tracking-wider">{label}</span>
  </div>
);

const FPSSoftwareHomepage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutVisualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    [aboutTextRef.current, aboutVisualRef.current].forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const services: ServiceCardProps[] = [
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices for optimal performance and user experience.'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Mobile-first responsive designs that look perfect and function flawlessly across all devices and screen sizes.'
    },
    {
      icon: '⚡',
      title: 'Performance Optimization',
      description: 'Speed optimization and performance tuning to ensure your website loads fast and ranks well in search engines.'
    },
    {
      icon: '🛠️',
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, and technical support to keep your site secure and running smoothly.'
    },
    {
      icon: '🔍',
      title: 'SEO Integration',
      description: 'Search engine optimization built into every website to improve visibility and drive organic traffic to your business.'
    },
    {
      icon: '🔒',
      title: 'Security & Hosting',
      description: 'Secure hosting solutions with SSL certificates, regular backups, and comprehensive security measures.'
    }
  ];

  const stats: StatProps[] = [
    { number: '150+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '5+', label: 'Years Experience' }
  ];

  return (
    <div className={`${inter.className} text-gray-800 overflow-x-hidden`}>
      {/* Header */}
      <header
        className={`fixed w-full top-0 z-50 text-white shadow-lg transition-all duration-300 ${
          isScrolled
            ? 'bg-primary-dark/95 backdrop-blur-lg'
            : 'bg-gradient-to-r from-primary-dark to-primary-blue'
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="flex items-center text-xl font-bold">
            <div className="w-10 h-10 mr-3 bg-white rounded-lg flex items-center justify-center">
              <div className="grid grid-cols-2 grid-rows-2 gap-0.5 w-5 h-5">
                <div className="bg-primary-dark rounded-sm" />
                <div className="bg-primary-blue rounded-sm" />
                <div className="bg-secondary-blue rounded-sm" />
                <div className="bg-primary-dark rounded-sm" />
              </div>
            </div>
            FPS SOFTWARE
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {[
                { href: 'home', label: 'Home' },
                { href: 'services', label: 'Services' },
                { href: 'about', label: 'About' },
                { href: 'contact', label: 'Contact' }
              ].map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollToSection(href)}
                    className="font-medium hover:text-secondary-blue transition-colors duration-300 cursor-pointer"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-primary-dark via-primary-blue to-secondary-blue text-white pt-28 pb-20 text-center overflow-hidden"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse" />
          <div className="absolute top-40 right-32 w-2 h-2 bg-white rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-white rounded-full animate-pulse delay-500" />
        </div>
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            Professional Web Development Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up animation-delay-300">
            We create powerful, scalable, and user-friendly websites that drive your business forward in the digital landscape.
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-block bg-white text-primary-dark px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg animate-fade-in-up animation-delay-600"
          >
            Start Your Project
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-primary-dark">
            Our Services
          </h2>
          <p className="text-xl text-center text-gray-600 mb-16">
            Comprehensive web development solutions tailored to your business needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              ref={aboutTextRef}
              className="opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <h2 className="text-4xl font-bold mb-6 text-primary-dark">
                Why Choose FPS Software?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With years of experience in web development, we understand what it takes to create successful digital solutions. Our team combines technical expertise with creative vision to deliver websites that not only look great but also perform exceptionally.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We work closely with our clients to understand their unique requirements and business goals, ensuring every project is tailored to deliver maximum value and impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                {stats.map((stat, index) => (
                  <Stat key={index} number={stat.number} label={stat.label} />
                ))}
              </div>
            </div>
            <div
              ref={aboutVisualRef}
              className="bg-gradient-to-r from-primary-blue to-secondary-blue rounded-3xl h-96 flex items-center justify-center text-white text-6xl relative overflow-hidden opacity-0 translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-pulse" />
              <span className="relative z-10">💻</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-primary-dark to-primary-blue text-white text-center"
      >
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s discuss how we can help bring your vision to life with professional web development solutions.
          </p>
          <Link
            href="mailto:info@fpssoftware.com"
            className="inline-block bg-white text-primary-dark px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-dark text-white text-center py-8">
        <div className="max-w-6xl mx-auto px-8">
          <p>&copy; 2025 FPS Software. All rights reserved. | Professional Web Development Solutions</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
          animation-fill-mode: both;
        }
        
        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
      `}</style>
    </div>
  );
};

export default FPSSoftwareHomepage;