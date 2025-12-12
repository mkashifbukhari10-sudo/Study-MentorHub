"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createPageUrl } from "./utils";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Clock,
  Calendar,
  User,
  Share2,
  BookmarkPlus,
  ChevronRight,
  CheckCircle,
} from "lucide-react";

type BlogDetailProps = {
  blogId?: string | null;
};

export default function BlogDetail({ blogId }: BlogDetailProps) {
  const [activeSection, setActiveSection] = useState("");

  // Sample blog data - in real app, this would come from a database
  const blogs = {
    "1": {
      id: "1",
      title: "10 Proven Study Techniques That Actually Work",
      category: "Study Techniques",
      categoryColor: "bg-yellow-100 text-yellow-800 border-yellow-200",
      readTime: "8 min read",
      date: "January 15, 2024",
      author: "Sarah Johnson",
      featuredImage:
        "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80",
      excerpt:
        "Discover evidence-based learning methods used by top students worldwide to maximize retention and understanding.",
      content: {
        introduction:
          "Are you tired of studying for hours without seeing results? You're not alone. Many students struggle because they're using ineffective study methods. In this comprehensive guide, we'll explore 10 scientifically-proven study techniques that can transform your learning experience and boost your academic performance.",
        sections: [
          {
            id: "active-recall",
            title: "1. Active Recall",
            content:
              "Active recall is one of the most powerful learning techniques available. Instead of passively re-reading your notes, actively recall forces you to retrieve information from memory. This strengthens neural pathways and dramatically improves long-term retention. Try closing your book and writing down everything you remember about a topic. Then check what you missed and repeat the process.",
          },
          {
            id: "spaced-repetition",
            title: "2. Spaced Repetition",
            content:
              "Spaced repetition leverages the psychological spacing effect to optimize learning. Instead of cramming, review material at increasing intervals: after 1 day, then 3 days, then a week, then a month. This technique is particularly effective when combined with active recall. Tools like Anki or Quizlet can help automate this process.",
          },
          {
            id: "feynman-technique",
            title: "3. The Feynman Technique",
            content:
              "Named after Nobel Prize-winning physicist Richard Feynman, this technique involves explaining concepts in simple terms as if teaching a child. If you can't explain something simply, you don't understand it well enough. This method exposes gaps in your knowledge and forces deeper understanding.",
          },
          {
            id: "pomodoro",
            title: "4. Pomodoro Technique",
            content:
              "The Pomodoro Technique breaks study time into focused 25-minute intervals followed by 5-minute breaks. After four 'pomodoros,' take a longer 15-30 minute break. This maintains high concentration while preventing burnout. The regular breaks refresh your mind and improve overall productivity.",
          },
          {
            id: "interleaving",
            title: "5. Interleaving Practice",
            content:
              "Rather than studying one topic for hours (blocking), interleaving mixes different topics or types of problems in a single study session. While it feels more challenging, research shows it leads to better long-term retention and improved ability to apply knowledge in different contexts.",
          },
          {
            id: "elaboration",
            title: "6. Elaboration",
            content:
              "Elaboration involves explaining and describing ideas with many details. Ask yourself questions like 'Why does this work?' or 'How does this relate to what I already know?' Connect new information to existing knowledge. This creates richer mental models and stronger memory traces.",
          },
          {
            id: "dual-coding",
            title: "7. Dual Coding",
            content:
              "Dual coding combines verbal and visual information for better learning. Create diagrams, mind maps, or sketches alongside written notes. The brain processes visual and verbal information differently, and using both channels simultaneously strengthens memory and understanding.",
          },
          {
            id: "testing-effect",
            title: "8. Practice Testing",
            content:
              "Regular self-testing is more effective than re-reading for long-term retention. Create practice questions, use flashcards, or take practice exams. The act of retrieving information strengthens memory more than simply reviewing it. Don't wait until you feel ready—test yourself early and often.",
          },
          {
            id: "teach-others",
            title: "9. Teach What You Learn",
            content:
              "Teaching is one of the best ways to learn. When you teach others, you must organize your thoughts clearly and identify gaps in your understanding. Join study groups, start a study blog, or simply explain concepts to friends or family. Teaching solidifies your own knowledge.",
          },
          {
            id: "metacognition",
            title: "10. Metacognitive Strategies",
            content:
              "Metacognition means thinking about your thinking. Regularly assess your understanding: What do I know? What don't I know? What strategies work best for me? This self-awareness helps you adjust your study approach and focus on areas that need more attention. Keep a learning journal to track your progress.",
          },
        ],
        conclusion:
          "These 10 study techniques are backed by decades of cognitive science research. The key is to experiment and find which combinations work best for you. Remember, effective studying isn't about the hours you put in—it's about the quality of your study methods. Start implementing these techniques today and watch your academic performance soar!",
      },
    },
    "2": {
      id: "2",
      title: "The Ultimate Guide to Time Management for Students",
      category: "Time Management",
      categoryColor: "bg-blue-100 text-blue-800 border-blue-200",
      readTime: "12 min read",
      date: "January 12, 2024",
      author: "Michael Chen",
      featuredImage:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200&q=80",
      excerpt:
        "Master your schedule and find perfect balance between studies, social life, and personal growth.",
      content: {
        introduction:
          "Time management is one of the most crucial skills for academic success, yet many students struggle with it. Between classes, assignments, extracurricular activities, and social life, it's easy to feel overwhelmed. This comprehensive guide will teach you proven time management strategies to help you accomplish more while maintaining balance.",
        sections: [
          {
            id: "prioritization",
            title: "1. Master the Art of Prioritization",
            content:
              "Not all tasks are equal. Use the Eisenhower Matrix to categorize tasks: Urgent & Important (do first), Important but not urgent (schedule), Urgent but not important (delegate or minimize), Neither (eliminate). Focus your energy on high-impact activities that align with your goals.",
          },
          {
            id: "time-blocking",
            title: "2. Time Blocking Method",
            content:
              "Time blocking involves scheduling specific blocks of time for different activities. Instead of a to-do list, create a visual schedule with dedicated time slots for studying, classes, exercise, and leisure. This prevents multitasking and ensures important tasks get done.",
          },
          {
            id: "morning-routine",
            title: "3. Optimize Your Morning Routine",
            content:
              "How you start your day sets the tone for everything else. Wake up at a consistent time, avoid checking your phone immediately, eat a healthy breakfast, and review your daily goals. A solid morning routine creates momentum and mental clarity.",
          },
          {
            id: "avoid-procrastination",
            title: "4. Combat Procrastination",
            content:
              "Procrastination often stems from feeling overwhelmed. Break large projects into smaller, manageable tasks. Use the '2-minute rule'—if something takes less than 2 minutes, do it now. For bigger tasks, commit to just 5 minutes of work to build momentum.",
          },
          {
            id: "digital-detox",
            title: "5. Digital Detox and Focus",
            content:
              "Digital distractions are the enemy of productivity. During study sessions, use website blockers, put your phone in another room, or use apps like Forest. Schedule specific times to check social media rather than constant interruptions.",
          },
          {
            id: "batch-similar-tasks",
            title: "6. Batch Similar Tasks Together",
            content:
              "Group similar activities together to minimize context switching. Respond to all emails at once, do all your reading in one session, prepare meals for multiple days. Batching reduces mental fatigue and increases efficiency.",
          },
        ],
        conclusion:
          "Mastering time management is a journey, not a destination. Start by implementing one or two strategies, then gradually add more as they become habits. Remember, the goal isn't to be busy—it's to be productive and maintain balance in your life.",
      },
    },
    "3": {
      id: "3",
      title: "How to Stay Focused While Studying: Science-Backed Tips",
      category: "Memory & Focus",
      categoryColor: "bg-purple-100 text-purple-800 border-purple-200",
      readTime: "6 min read",
      date: "January 10, 2024",
      author: "Dr. Emily Rodriguez",
      featuredImage:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
      excerpt:
        "Combat distractions and maintain laser focus with these proven concentration techniques.",
      content: {
        introduction:
          "In our hyper-connected world, maintaining focus has become increasingly challenging. Whether it's notifications, social media, or wandering thoughts, distractions are everywhere. This guide provides science-backed strategies to help you achieve deep focus and maximize your study sessions.",
        sections: [
          {
            id: "environment",
            title: "1. Optimize Your Study Environment",
            content:
              "Your environment significantly impacts focus. Choose a quiet, well-lit space dedicated to studying. Keep your desk clean and organized. Use noise-canceling headphones or white noise if needed. Remove visual distractions and ensure comfortable temperature and seating.",
          },
          {
            id: "deep-work",
            title: "2. Practice Deep Work Sessions",
            content:
              "Deep work means focusing without distraction on cognitively demanding tasks. Schedule 90-minute blocks for deep work, eliminate all distractions, and single-task. Your brain can only maintain peak focus for limited periods, so quality matters more than quantity.",
          },
          {
            id: "mindfulness",
            title: "3. Mindfulness and Meditation",
            content:
              "Regular mindfulness practice strengthens your attention span. Even 10 minutes of daily meditation can improve focus. When your mind wanders during study, gently bring it back without judgment. This trains your brain to maintain attention.",
          },
          {
            id: "breaks",
            title: "4. Strategic Breaks",
            content:
              "Paradoxically, taking breaks improves focus. Use the 52-17 method (52 minutes work, 17 minutes break) or Pomodoro (25 minutes work, 5 minutes break). During breaks, move your body, get fresh air, or do something completely different.",
          },
          {
            id: "nutrition",
            title: "5. Brain-Boosting Nutrition",
            content:
              "What you eat affects your focus. Consume omega-3 fatty acids, complex carbohydrates, and antioxidants. Stay hydrated—even mild dehydration impairs concentration. Avoid sugar crashes by eating balanced meals. Consider brain-healthy snacks like nuts and berries.",
          },
        ],
        conclusion:
          "Improving focus is a skill that takes practice. Be patient with yourself and consistently apply these techniques. Over time, you'll notice significant improvements in your ability to concentrate and retain information.",
      },
    },
  };

  type BlogId = keyof typeof blogs;
  const resolvedId: BlogId =
    (blogId && (Object.keys(blogs) as BlogId[]).includes(blogId as BlogId)
      ? (blogId as BlogId)
      : "1");

  const blog = blogs[resolvedId] || blogs["1"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = blog.content.sections;
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [blog]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Back Button */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href={createPageUrl("Blog")}>
            <Button variant="ghost" className="group" type="button">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Featured Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative h-96 bg-slate-900"
      >
        <img
          src={blog.featuredImage}
          alt={blog.title}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8"
          >
            <Card className="border-none shadow-2xl">
              <CardContent className="p-8 md:p-12">
                {/* Header */}
                <div className="mb-8">
                  <Badge className={`${blog.categoryColor} border mb-4`}>
                    {blog.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    {blog.title}
                  </h1>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-8 pb-8 border-b border-slate-200">
                  <Button variant="outline" className="group">
                    <Share2 className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Share
                  </Button>
                  <Button variant="outline" className="group">
                    <BookmarkPlus className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Save
                  </Button>
                </div>

                {/* Introduction */}
                <div className="prose prose-lg max-w-none mb-12">
                  <p className="text-xl text-slate-700 leading-relaxed">
                    {blog.content.introduction}
                  </p>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                  {blog.content.sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="scroll-mt-24"
                    >
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">
                        {section.title}
                      </h2>
                      <p className="text-lg text-slate-700 leading-relaxed">
                        {section.content}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="mt-12 pt-12 border-t border-slate-200">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    Conclusion
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {blog.content.conclusion}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="mt-12 p-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl text-white text-center">
                  <h3 className="text-2xl font-bold mb-3">
                    Found This Helpful?
                  </h3>
                  <p className="text-indigo-100 mb-6">
                    Explore more study tips and strategies on Study Mentor
                  </p>
                  <Link href={createPageUrl("Blog")}>
                    <Button
                      size="lg"
                      className="bg-white text-indigo-600 hover:bg-slate-100"
                    >
                      Read More Articles
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar - Table of Contents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-24">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <BookmarkPlus className="w-5 h-5 text-indigo-600" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {blog.content.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg transition-all group ${
                          activeSection === section.id
                            ? "bg-indigo-50 text-indigo-700 font-medium"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {activeSection === section.id && (
                            <CheckCircle className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                          )}
                          {activeSection !== section.id && (
                            <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-indigo-400 transition-colors flex-shrink-0" />
                          )}
                          <span className="text-sm leading-tight">
                            {section.title}
                          </span>
                        </div>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>

              {/* Author Card */}
              <Card className="border-none shadow-lg mt-6">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    About the Author
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">
                        {blog.author}
                      </p>
                      <p className="text-sm text-slate-600 mt-1">
                        Educational content writer passionate about helping
                        students succeed.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-20" />
    </div>
  );
}
