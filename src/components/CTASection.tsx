
import React from 'react';
import { Button } from "@/components/ui/button";
import { Users } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
          <Users size={24} className="text-blue-600" />
        </div>
        
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Need Help? You're Not Alone!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of international students to ask questions, share tips, and make connections that will help you thrive in the U.S.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
            Join Our WhatsApp Group
          </Button>
          
          <Button variant="outline" className="bg-white hover:bg-gray-50 text-blue-600 border-blue-200 px-8 py-6 text-lg rounded-xl shadow-sm hover:shadow transition-all">
            Email Us With Questions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
