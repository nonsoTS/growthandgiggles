import React, { useState } from 'react';
import { FileDown, Lock, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const LeadMagnetSection = () => {
  const [status, setStatus] = useState('idle');
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setStatus('success');
        form.reset();
        // User to add actual PDF file path and trigger download here
        // window.open('/path-to-your-pdf.pdf', '_blank');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-yellow-400/5 blur-[100px] rounded-full pointer-events-none w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="w-16 h-16 bg-yellow-400/10 rounded-2xl flex items-center justify-center mb-6">
                <FileDown className="w-8 h-8 text-yellow-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Get Your Free Content Strategy PDF
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Download our proven content strategy framework trusted by 50+ Global businesses to drive revenue growth.
              </p>
              
              <ul className="space-y-4 mb-8">
                {["Step-by-step audience mapping", "Keyword clustering techniques", "Content calendar templates", "ROI measurement frameworks"].map((item, i) => <li key={i} className="flex items-center text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-yellow-400 mr-3 shrink-0" />
                    {item}
                  </li>)}
              </ul>
            </div>

            <div className="bg-black p-8 rounded-2xl border border-gray-800">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <Input id="name" name="name" required placeholder="John Doe" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Work Email</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@company.com" className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 w-full" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-300">Company Name</Label>
                  <Input id="company" name="company" required placeholder="Acme Inc." className="bg-gray-900 border-gray-700 text-white placeholder:text-gray-500 w-full" />
                </div>

                <Button type="submit" disabled={status === 'submitting'} className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-bold text-lg py-6 rounded-xl mt-4">
                  {status === 'submitting' ? 'Processing...' : 'Download Free PDF'}
                </Button>

                {status === 'success' && <p className="text-green-400 text-sm text-center mt-4">Thank you! Check your email for the download link.</p>}
                {status === 'error' && <p className="text-red-400 text-sm text-center mt-4">Oops! Something went wrong. Please try again.</p>}

                <div className="flex items-center justify-center text-gray-500 text-sm mt-4">
                  <Lock className="w-4 h-4 mr-2" />
                  No spam, unsubscribe anytime
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>;
};
export default LeadMagnetSection;