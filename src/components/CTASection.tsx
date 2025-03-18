
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Send, X } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const CTASection: React.FC = () => {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!name || !email || !message) {
      toast.error("Please fill out all required fields");
      return;
    }
    
    // In a real app, you would send this data to your backend
    console.log({ name, email, message });
    
    // Show success message
    toast.success("Thank you for your feedback!");
    
    // Reset form
    setName('');
    setEmail('');
    setMessage('');
    setShowFeedbackForm(false);
  };

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
          
          <Button 
            variant="outline" 
            className="bg-white hover:bg-gray-50 text-blue-600 border-blue-200 px-8 py-6 text-lg rounded-xl shadow-sm hover:shadow transition-all"
            onClick={() => setShowFeedbackForm(!showFeedbackForm)}
          >
            Leave Feedback
          </Button>
        </div>

        {showFeedbackForm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md p-6 relative animate-in fade-in duration-300">
              <button 
                onClick={() => setShowFeedbackForm(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Send Us Your Feedback
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Send Feedback
                </Button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
