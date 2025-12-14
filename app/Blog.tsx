"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { createPageUrl } from "./utils";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Clock,
  Lightbulb,
  Target,
  TrendingUp,
  Brain,
  Coffee,
  Calendar,
  Award,
  Users,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  fetchPosts,
  getFeaturedImageUrl,
  getPostCategories,
  getPostAuthor,
  formatDate,
  calculateReadTime,
  stripHtml,
  WordPressPost,
} from "./services/wordpressApi";

export default function Blog() {
  // State for WordPress posts
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const categories = [
    {
      icon: Lightbulb,
      name: "Study Techniques",
      description:
        "Master proven learning methods like active recall, spaced repetition, and the Feynman technique.",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: Clock,
      name: "Time Management",
      description:
        "Learn to balance your schedule with Pomodoro technique, time blocking, and effective planning.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Brain,
      name: "Memory & Focus",
      description:
        "Boost your memory retention and concentration with scientifically-backed strategies.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Target,
      name: "Goal Setting",
      description:
        "Set SMART goals, track progress, and achieve your academic dreams step by step.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Award,
      name: "Exam Preparation",
      description:
        "Ace your tests with effective revision strategies, anxiety management, and test-taking tips.",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: Coffee,
      name: "Productivity",
      description:
        "Maximize your output with productivity hacks, tools, and lifestyle optimization.",
      color: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
  ];

  const colorClasses = {
    yellow: "bg-yellow-100 text-yellow-800 border-yellow-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200",
    green: "bg-green-100 text-green-800 border-green-200",
    red: "bg-red-100 text-red-800 border-red-200",
    amber: "bg-amber-100 text-amber-800 border-amber-200",
  } as const;

  type ColorKey = keyof typeof colorClasses;

  // Fetch posts on component mount
  useEffect(() => {
    loadPosts();
  }, []);

  // Load posts from WordPress API
  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const fetchedPosts = await fetchPosts({
        page: 1,
        per_page: 10,
      });

      if (fetchedPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts(fetchedPosts);
        setHasMore(fetchedPosts.length === 10);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load posts';
      setError(errorMessage);
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load more posts
  const loadMorePosts = async () => {
    if (loadingMore || !hasMore) return;

    try {
      setLoadingMore(true);
      const nextPage = page + 1;
      
      const fetchedPosts = await fetchPosts({
        page: nextPage,
        per_page: 10,
      });

      if (fetchedPosts.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prev) => [...prev, ...fetchedPosts]);
        setHasMore(fetchedPosts.length === 10);
        setPage(nextPage);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to load more posts';
      setError(errorMessage);
      console.error('Error loading more posts:', err);
    } finally {
      setLoadingMore(false);
    }
  };

  // Map category name to color
  const getCategoryColor = (categoryName: string): ColorKey => {
    const categoryMap: Record<string, ColorKey> = {
      'Study Techniques': 'yellow',
      'Time Management': 'blue',
      'Memory & Focus': 'purple',
      'Goal Setting': 'green',
      'Exam Preparation': 'red',
      'Productivity': 'amber',
    };
    return categoryMap[categoryName] || 'blue';
  };

  // Get default image if no featured image
  const getDefaultImage = (index: number): string => {
    const defaultImages = [
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
      "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ];
    return defaultImages[index % defaultImages.length];
  };

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
              <BookOpen className="w-8 h-8" />
            </motion.div>

            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Study Mentor Blog
            </h1>
            <p className="text-xl sm:text-2xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
              Your source for practical study tips, learning strategies, and
              academic success insights. Everything you need to excel in your
              educational journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Purpose Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
              Why We Created This Blog
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At Study Mentor, we believe every student deserves access to
              quality educational resources. Our blog is dedicated to sharing
              practical, research-backed strategies that help you study smarter,
              not harder.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Whether you're preparing for exams, improving your productivity,
              or looking for better learning techniques, we've got you covered
              with content created by students, for students.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Explore by Category
            </h2>
            <p className="text-xl text-slate-600">
              Dive into topics that matter most to your academic success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    className={`h-full cursor-pointer border-2 ${category.borderColor} hover:shadow-xl transition-all ${category.bgColor}`}
                  >
                    <CardHeader>
                      <div
                        className={`inline-flex w-12 h-12 items-center justify-center bg-gradient-to-br ${category.color} rounded-xl mb-4 shadow-lg`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 leading-relaxed">
                        {category.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Sample Blog Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              Latest Articles
            </h2>
            <p className="text-xl text-slate-600">
              Fresh content to help you succeed in your studies
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && posts.length === 0 && (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-indigo-600" />
              <span className="ml-3 text-slate-600">Loading posts...</span>
            </div>
          )}

          {/* Error State */}
          {error && posts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20">
              <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Error Loading Posts</h3>
              <p className="text-slate-600 mb-4">{error}</p>
              <button
                onClick={loadPosts}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Retry
              </button>
            </div>
          )}

          {/* Posts Grid */}
          {!loading && posts.length > 0 && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {posts.map((post, index) => {
                const featuredImage = getFeaturedImageUrl(post) || getDefaultImage(index);
                const categories = getPostCategories(post);
                const firstCategory = categories[0]?.name || 'Uncategorized';
                const categoryColor = getCategoryColor(firstCategory);
                const readTime = calculateReadTime(post.content.rendered);
                const postDate = formatDate(post.date);

                return (
                  <motion.div
                    key={post.id}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`${createPageUrl("BlogDetail")}?slug=${post.slug}`}>
                      <Card className="h-full hover:shadow-2xl transition-all cursor-pointer border-none shadow-lg overflow-hidden group">
                        {/* Featured Image */}
                        <div className="relative h-48 overflow-hidden bg-slate-200">
                          <img
                            src={featuredImage}
                            alt={post.title.rendered}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            onError={(e) => {
                              // Fallback to default image if featured image fails to load
                              (e.target as HTMLImageElement).src = getDefaultImage(index);
                            }}
                          />
                          {firstCategory && (
                            <div className="absolute top-4 left-4">
                              <Badge
                                className={`${
                                  colorClasses[categoryColor]
                                } border shadow-lg`}
                              >
                                {firstCategory}
                              </Badge>
                            </div>
                          )}
                        </div>

                        <CardHeader>
                          <CardTitle 
                            className="text-xl leading-tight group-hover:text-indigo-600 transition-colors"
                            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                          />
                        </CardHeader>
                        <CardContent>
                          <p className="text-slate-600 mb-4 leading-relaxed line-clamp-2">
                            {stripHtml(post.excerpt.rendered)}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{readTime}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{postDate}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-indigo-600 font-medium text-sm group-hover:gap-2 transition-all">
                              <span>Read More</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* No Posts Message */}
          {!loading && !error && posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-slate-600">No posts found.</p>
            </div>
          )}

          {/* Load More Button */}
          {!loading && posts.length > 0 && hasMore && (
            <div className="flex justify-center mt-12">
              <button
                onClick={loadMorePosts}
                disabled={loadingMore}
                className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {loadingMore ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Loading...</span>
                  </>
                ) : (
                  <span>Load More Posts</span>
                )}
              </button>
            </div>
          )}

          {/* End of Posts Message */}
          {!loading && posts.length > 0 && !hasMore && (
            <div className="text-center mt-12">
              <p className="text-slate-600">You've reached the end of the posts.</p>
            </div>
          )}
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Join a Community of Successful Students
            </h2>
            <p className="text-xl text-indigo-100 leading-relaxed mb-4">
              You're not alone on your academic journey. Thousands of students
              worldwide are using Study Mentor to improve their grades, reduce
              stress, and achieve their educational goals.
            </p>
            <p className="text-lg text-indigo-200 leading-relaxed">
              Every article, tip, and strategy we share is designed to make your
              learning experience better. Together, we're building a community
              of motivated, successful learners.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
