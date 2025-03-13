
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import ChecklistSection from '@/components/ChecklistSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import { faqs } from '@/lib/data';

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ChecklistSection />
      <FAQSection faqs={faqs} />
      <CTASection />
      
      <footer className="py-8 px-6 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} International Student Checklist. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            This checklist is designed to help international students navigate their first 30 days in the United States.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
