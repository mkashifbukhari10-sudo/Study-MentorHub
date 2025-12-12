"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Target,
  Users,
  Sparkles,
  BookOpen,
  TrendingUp,
  Award,
  Lightbulb,
  Globe,
  CheckCircle,
} from "lucide-react";

export default function About() {
  const timeline = [
    {
      year: "Our Vision",
      title: "Making Education Accessible",
      description:
        "We envision a world where every student has access to quality learning resources, regardless of their background or location.",
      icon: Globe,
    },
    {
      year: "Our Mission",
      title: "Empowering Student Success",
      description:
        "Our mission is to provide free, evidence-based study strategies and resources that help students achieve their full academic potential.",
      icon: Target,
    },
    {
      year: "Our Impact",
      title: "50,000+ Students Helped",
      description:
        "We've reached students in over 100 countries, helping them improve grades, reduce stress, and build confidence.",
      icon: TrendingUp,
    },
    {
      year: "Our Commitment",
      title: "Always Free, Always Helpful",
      description:
        "Study Mentor will always remain free for students. Education should never be behind a paywall.",
      icon: Heart,
    },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Evidence-Based Content",
      description:
        "Every tip and strategy we share is backed by research and proven to work.",
    },
    {
      icon: Users,
      title: "Student-Centered",
      description:
        "Created by students who understand the real challenges of academic life.",
    },
    {
      icon: Lightbulb,
      title: "Practical & Actionable",
      description:
        "No fluff, just practical advice you can implement immediately.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "We prioritize quality over quantity, ensuring every article adds real value.",
    },
  ];

  const howWeHelp = [
    "Proven study techniques that maximize retention",
    "Time management strategies for better balance",
    "Exam preparation and test-taking skills",
    "Motivation and mindset for academic success",
    "Productivity tools and techniques",
    "Goal setting and progress tracking methods",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

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
              <Sparkles className="w-8 h-8" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              About Study Mentor
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make quality education accessible to every
              student, everywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed text-left">
              <p>
                Study Mentor is a dedicated educational platform created by
                students, for students. We understand the challenges of modern
                education—from overwhelming workloads to exam stress, from time
                management struggles to finding the right learning techniques.
              </p>
              <p>
                Our team consists of educators, students, and learning
                specialists who are passionate about helping others succeed
                academically. We've experienced the ups and downs of student
                life, and we've learned what truly works through research,
                experimentation, and real-world application.
              </p>
              <p>
                What started as a small blog sharing study tips has grown into a
                comprehensive resource helping over 50,000 students worldwide
                achieve their academic goals. Every day, we're committed to
                creating content that makes a real difference in students'
                lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-slate-600">
              Building a better future for students, one resource at a time
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-indigo-600 mb-2">
                            {item.year}
                          </div>
                          <h3 className="text-2xl font-bold mb-3 text-slate-900">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-lg">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-slate-900">
                How We Help Students
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Study Mentor provides comprehensive resources across all aspects
                of academic success. Our content is designed to help you study
                smarter, manage your time better, and achieve your goals with
                confidence.
              </p>
              <div className="space-y-4">
                {howWeHelp.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-bold mb-2 text-slate-900">
                          {value.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Unique Value Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-400" />
            <h2 className="text-4xl font-bold mb-6">
              What Makes Study Mentor Different?
            </h2>
            <div className="space-y-6 text-lg text-indigo-100 leading-relaxed">
              <p>
                Unlike many educational platforms, Study Mentor is completely
                free and always will be. We believe that financial barriers
                should never prevent students from accessing quality learning
                resources.
              </p>
              <p>
                Our content is created by people who understand student life
                because we've lived it. We don't just share theory—we share
                practical, tested strategies that work in real-world scenarios.
              </p>
              <p>
                We're not trying to sell you courses or expensive programs. Our
                only goal is to help you succeed. When you succeed, we succeed.
                That's the Study Mentor promise.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
