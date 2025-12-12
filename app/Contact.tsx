"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  MessageCircle,
  Send,
  CheckCircle,
  Heart,
  Users,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactReasons = [
    {
      icon: MessageCircle,
      title: "General Inquiries",
      description: "Questions about our content or services",
    },
    {
      icon: Heart,
      title: "Feedback",
      description: "Share your thoughts and suggestions",
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Collaborate with Study Mentor",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6"
            >
              <Mail className="w-8 h-8" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, we're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Intro */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-slate-900">
              Contact Study Mentor
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              At Study Mentor, we value every student who reaches out to us.
              Your questions, suggestions, and feedback help us improve and
              create better content for the student community.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Fill out the form below, and we'll get back to you as soon as
              possible. We typically respond within 24-48 hours on business
              days.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {contactReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="text-center border-none shadow-lg hover:shadow-xl transition-all h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-2 text-slate-900">
                        {reason.title}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label
                        htmlFor="name"
                        className="text-slate-700 font-medium"
                      >
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="text-slate-700 font-medium"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-slate-700 font-medium"
                      >
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="mt-2 h-12"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-slate-700 font-medium"
                      >
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us what's on your mind..."
                        required
                        rows={6}
                        className="mt-2 resize-none"
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white h-12 text-lg rounded-xl shadow-lg group"
                      >
                        <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Thank you for reaching out to Study Mentor. We've received
                      your message and will get back to you within 24-48 hours.
                    </p>
                    <div className="flex items-center justify-center gap-2 text-indigo-600">
                      <Sparkles className="w-5 h-5" />
                      <span className="font-medium">
                        Keep learning, keep growing!
                      </span>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Support Message */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-12 h-12 mx-auto mb-4 text-pink-300" />
            <h3 className="text-2xl font-bold mb-4">
              We're Here to Support You
            </h3>
            <p className="text-lg text-indigo-100 leading-relaxed">
              Every student's journey is unique, and we're committed to helping
              you succeed. Don't hesitate to reach out—whether you need study
              advice, have questions about our content, or just want to share
              your success story. We're always excited to hear from you!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
