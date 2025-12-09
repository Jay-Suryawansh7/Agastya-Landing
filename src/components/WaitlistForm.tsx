"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Mail, User, Building2, Briefcase, MessageSquare, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

interface WaitlistFormData {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  usageReason?: string;
}

export function WaitlistForm() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    organization: "",
    role: "",
    usageReason: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage("");

    try {
      const response = await fetch('http://localhost:5001/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", organization: "", role: "", usageReason: "" });
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to connect to server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="py-20 w-full bg-black relative">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white font-sans mb-4">
            Join the Waitlist
          </h2>
          <p className="text-neutral-400 text-lg">
            Be among the first to experience AI-powered PCB design
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl md:rounded-3xl p-0"
        >
          <div className="relative rounded-2xl border p-3 md:p-4 bg-black border-neutral-800">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative rounded-xl p-6 md:p-8 bg-black z-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Organization Field */}
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-neutral-300 mb-2">
                    Organization
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="Your company or institution"
                    />
                  </div>
                </div>

                {/* Role Field */}
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-neutral-300 mb-2">
                    Role
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-500" />
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-colors"
                      placeholder="e.g., Hardware Engineer, Founder"
                    />
                  </div>
                </div>

                {/* Usage Reason Field */}
                <div>
                  <label htmlFor="usageReason" className="block text-sm font-medium text-neutral-300 mb-2">
                    How will you use Agastya?
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-neutral-500" />
                    <textarea
                      id="usageReason"
                      name="usageReason"
                      value={formData.usageReason}
                      onChange={handleChange}
                      rows={3}
                      className="w-full pl-11 pr-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                      placeholder="Tell us about your use case..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </button>
              </form>

              {/* Success/Error Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-400 text-sm">
                      Successfully added to waitlist! We'll be in touch soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3"
                  >
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
