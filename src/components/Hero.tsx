
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, AppWindow, CreditCard, Bus, Banknote } from 'lucide-react';

const Hero = () => {
  const scrollToChecklist = () => {
    const checklistSection = document.getElementById('checklist-section');
    if (checklistSection) {
      checklistSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-16 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80')",
            filter: "blur(2px)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-600/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>
      
      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[Smartphone, Wifi, AppWindow, CreditCard, Bus, Banknote].map((Icon, index) => (
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
          <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-blue-100 bg-blue-600/30 rounded-full border border-blue-400/20">
            International Student Guide
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-md">
          Your First 30 Days in the U.S.
        </h1>
        
        <h2 className="text-xl md:text-2xl text-blue-50 font-medium mb-8 drop-shadow">
          From bank accounts to WiFi, this guide helps you settle in smoothly
        </h2>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-blue-900/20 transition-all hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-0.5"
            onClick={scrollToChecklist}
          >
            Start Your Checklist
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6 md:space-x-12 mb-12">
          {[
            { icon: Smartphone, label: "SIM Card" },
            { icon: Wifi, label: "WiFi" },
            { icon: AppWindow, label: "Essential Apps" },
            { icon: CreditCard, label: "Banking" },
            { icon: Bus, label: "Transport" }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-white/90 animate-fade-in"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-md border border-white/30 mb-2">
                <item.icon size={20} />
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToChecklist} 
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow border border-white/30"
            aria-label="Scroll to checklist"
          >
            <ArrowDown className="text-white" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
