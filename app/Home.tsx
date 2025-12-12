"use client";

import Link from "next/link";
import { createPageUrl } from "./utils";
import { motion } from "framer-motion";
import {
  BookOpen,
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  Clock,
  Award,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const features = [
    {
      icon: Lightbulb,
      title: "Smart Study Tips",
      description:
        "Evidence-based learning techniques that actually work. Master active recall, spaced repetition, and the Feynman technique.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Time Management",
      description:
        "Learn to balance studies, activities, and life. Discover the Pomodoro technique, time blocking, and priority management.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Goal Setting",
      description:
        "Set SMART goals and track your progress. Turn your academic dreams into actionable plans with clear milestones.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Award,
      title: "Exam Strategies",
      description:
        "Ace your tests with proven preparation methods. From reducing anxiety to mastering different question types.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const stats = [
    { number: "50K+", label: "Students Helped", icon: Users },
    { number: "500+", label: "Study Resources", icon: BookOpen },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
    { number: "4.9/5", label: "Student Rating", icon: Heart },
  ];

  const benefits = [
    "Free access to all study resources",
    "Weekly study tips and strategies",
    "Supportive student community",
    "Expert-curated content",
    "Mobile-friendly learning",
    "Regular updates and new content",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-white opacity-60" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzRGNDZFNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6 border border-indigo-100"
            >
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-600">
                Your Journey to Academic Excellence Starts Here
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Welcome to{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Study Mentor
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl sm:text-2xl text-slate-600 mb-8 leading-relaxed"
            >
              Your trusted companion for academic success. Discover proven study
              techniques, productivity hacks, and learning strategies designed
              specifically for students like you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href={createPageUrl("Blog")}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-500/30 w-full sm:w-auto group"
                >
                  Explore Study Tips
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href={createPageUrl("About")}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 hover:border-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg rounded-xl w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="pt-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-4xl font-bold text-slate-900 mb-2">
                        {stat.number}
                      </div>
                      <div className="text-slate-600">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Excel
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Study Mentor provides comprehensive resources to help you become a
              more effective, confident learner.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all bg-white">
                    <CardContent className="p-8">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Study Mentor */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium">
                  Why Students Love Us
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Why Choose Study Mentor?
              </h2>
              <p className="text-xl text-indigo-100 leading-relaxed mb-8">
                Study Mentor isn't just another educational blog. We're a
                dedicated community that understands the challenges students
                face and provides real, actionable solutions that make a
                difference.
              </p>
              <p className="text-lg text-indigo-200 leading-relaxed">
                Our content is carefully researched, student-tested, and
                designed to help you achieve your academic goals while
                maintaining a healthy balance in life.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to Transform Your Study Habits?
              </h2>
              <p className="text-xl mb-8 text-indigo-100">
                Join thousands of students who are already achieving their
                academic goals with Study Mentor.
              </p>
              <Link href={createPageUrl("Blog")}>
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-slate-100 px-8 py-6 text-lg rounded-xl shadow-lg"
                >
                  Start Learning Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
