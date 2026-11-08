import React, { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SUPABASE_URL = 'https://sdgnvttdlvetqvjauyqa.supabase.co/functions/v1/contact-email';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNkZ252dHRkbHZldHF2amF1eXFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NDYxMDksImV4cCI6MjA4MDUyMjEwOX0.NM6yA0oVRQoEbxgnWoKiLiWq5O-yPtjTl2VWYsiXIOI';

const initialFormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(SUPABASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

      toast({
        title: "Message Sent! 🚀",
        description: "We've received your message and will get back to you shortly.",
      });

      setIsSuccess(true);
      setFormData(initialFormData);
      setTimeout(() => setIsSuccess(false), 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "No worries, check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2 text-white bg-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all resize-none";

  return (
    <div className="bg-gray-900 border border-gray-800 p-8 rounded-2xl text-left max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
      <p className="text-gray-600 mb-6">Ready to grow? Send us a message.</p>

      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClass}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            placeholder="john@company.com"
          />
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={inputClass}
            placeholder="Company Ltd."
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={inputClass}
            placeholder="Tell us about your goals..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting || isSuccess}
          className={`w-full py-6 text-lg font-semibold transition-all ${
            isSuccess
              ? 'bg-green-500 hover:bg-green-600 text-white'
              : 'bg-yellow-400 text-black hover:bg-yellow-500'
          }`}
        >
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : isSuccess ? (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Sent!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Message <Send className="w-5 h-5" />
            </span>
          )}
        </Button>

        <p className="text-xs text-center text-gray-500 mt-4">
          Submissions are sent to hello@growthandgiggles.io
        </p>

      </form>
    </div>
  );
};

export default ContactForm;