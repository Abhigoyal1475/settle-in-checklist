import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, CreditCard, Bus, Banknote, AppWindow } from 'lucide-react';

const Hero = () => {
  const scrollToChecklist = () => {
    const checklistSection = document.getElementById('checklist-section');
    if (checklistSection) {
      checklistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white" />
      
      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[Smartphone, Wifi, CreditCard, Bus, Banknote, AppWindow].map((Icon, index) => (
          <div 
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 80 + 10}%`,
              animationDelay: `${index * 0.5}s`,
              transform: `rotate(${Math.random() * 20 - 10}deg) scale(${Math.random() * 2 + 3})`,
            }}
          >
            <Icon size={48} />
          </div>
        ))}
      </div>
      
      <div className="z-10 max-w-4xl text-center animate-fade-in">
        <div className="inline-block mb-6">
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full border border-blue-100">
            International Student Guide
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
          Your First 30 Days in the U.S.
        </h1>
        
        <h2 className="text-xl md:text-2xl text-blue-900/80 font-medium mb-8">
          From bank accounts to WiFi, this guide helps you settle in smoothly
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-200 transition-all hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5"
            onClick={scrollToChecklist}
          >
            Start Your Checklist
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 md:space-x-12 mb-12">
          {[
            { icon: Smartphone, label: "SIM Card" },
            { icon: Wifi, label: "WiFi" },
            { icon: CreditCard, label: "Banking" },
            { icon: Bus, label: "Transport" },
            { icon: AppWindow, label: "Essential Apps" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-blue-800/70 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100 mb-2">
                <item.icon size={20} />
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToChecklist} 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow"
            aria-label="Scroll to checklist"
          >
            <ArrowDown className="text-blue-600" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
