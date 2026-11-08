import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { SectionHeading } from '@/components/SharedComponents';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ACCESS_REQUESTS_ENDPOINT = "https://growthandgiggles-lms.vercel.app/api/access-requests";
const ACCESS_REQUEST_SHARED_SECRET = "87475409c201f4c1cd9ff21233ce3d8ab3cf294e0e91e1679350f3ef4bec80d5";
const TURNSTILE_SITE_KEY = "0x4AAAAAAEx0H5d6B85jkvtA";

const initialFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(formData) {
  const errors = {};
  if (!formData.name.trim()) errors.name = "Name is required.";
  if (!formData.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(formData.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!formData.message.trim()) errors.message = "Message is required.";
  return errors;
}

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [fieldErrors, setFieldErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState(null);

  const turnstileContainerRef = useRef(null);
  const turnstileWidgetIdRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let pollId = null;

    function renderWidget() {
      if (cancelled || !turnstileContainerRef.current || turnstileWidgetIdRef.current) return;
      turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(null),
        "error-callback": () => setTurnstileToken(null),
      });
    }

    if (window.turnstile) {
      renderWidget();
    } else {
      pollId = setInterval(() => {
        if (window.turnstile) {
          clearInterval(pollId);
          renderWidget();
        }
      }, 100);
    }

    return () => {
      cancelled = true;
      if (pollId) clearInterval(pollId);
      if (turnstileWidgetIdRef.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetIdRef.current);
        turnstileWidgetIdRef.current = null;
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setFieldErrors(prev => (prev[name] ? { ...prev, [name]: undefined } : prev));
  };

  const resetTurnstile = () => {
    if (turnstileWidgetIdRef.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
    setTurnstileToken(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formData);
    if (!turnstileToken) {
      errors.turnstile = "Please complete the verification challenge.";
    }
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { name, email, subject, message } = formData;
      const combinedMessage = subject
        ? `Subject: ${subject}\n\n${message}`
        : message;

      const response = await fetch(ACCESS_REQUESTS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ACCESS_REQUEST_SHARED_SECRET}`,
        },
        body: JSON.stringify({ name, email, message: combinedMessage, turnstileToken }),
      });

      const result = await response.json().catch(() => null);
      if (!response.ok || !result?.ok) {
        throw new Error(result?.error ?? `HTTP error: ${response.status}`);
      }

      toast({
        title: "Message Sent! 🚀",
        description: "We've received your message and will get back to you shortly.",
      });

      setIsSuccess(true);
      setFormData(initialFormData);
      setFieldErrors({});
      setTimeout(() => setIsSuccess(false), 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "No worries, check your connection and try again.",
      });
    } finally {
      resetTurnstile();
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-2 text-white bg-black rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all resize-none";

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <Helmet><title>Contact | Growth & Giggles</title></Helmet>
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <SectionHeading
              title="Get in touch"
              subtitle="Have questions about the Accelerator, Incubator, or Corporate Training? Drop us a line."
            />

            <div className="space-y-6 mt-12">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-foreground"><Mail className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p>hello@growthandgiggles.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-foreground"><MapPin className="w-5 h-5" /></div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p>Global / Remote</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-3xl border border-border premium-shadow">
            <form className="space-y-6" onSubmit={handleSubmit}>
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
                {fieldErrors.name && <p className="mt-2 text-sm text-destructive">{fieldErrors.name}</p>}
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
                {fieldErrors.email && <p className="mt-2 text-sm text-destructive">{fieldErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Subject"
                />
                {fieldErrors.subject && <p className="mt-2 text-sm text-destructive">{fieldErrors.subject}</p>}
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
                {fieldErrors.message && <p className="mt-2 text-sm text-destructive">{fieldErrors.message}</p>}
              </div>

              <div ref={turnstileContainerRef}></div>
              {fieldErrors.turnstile && <p className="mt-2 text-sm text-destructive">{fieldErrors.turnstile}</p>}

              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-6 text-lg font-semibold transition-all ${isSuccess
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
        </div>
      </div>
    </div>
  );
};
export default ContactPage;