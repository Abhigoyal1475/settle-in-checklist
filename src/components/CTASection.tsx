
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Users, Send, ExternalLink } from 'lucide-react';
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CTASection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form - only message is required
    if (!message) {
      toast.error("Please enter your feedback");
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
  };

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-blue-100 rounded-full mb-6">
            <Users size={24} className="text-blue-600" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need Help? You're Not Alone!
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our community of international students to ask questions, share tips, and make connections that will help you thrive in the U.S.
          </p>
          
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all">
            Join Our WhatsApp Group <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        <Card className="mt-10 border-blue-100">
          <CardHeader>
            <CardTitle className="text-xl text-center">Leave Feedback</CardTitle>
            <CardDescription className="text-center">
              We read every piece of feedback and take it seriously. 
              If you include your email, we'll get back to you within 24 hours!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name (Optional)
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="How should we address you?"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email (Optional)
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="We'll respond if you provide your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Feedback <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  placeholder="What can we improve for your student journey?"
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
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
