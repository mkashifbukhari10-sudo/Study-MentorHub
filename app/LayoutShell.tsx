 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  BookOpen,
  Home,
  FileText,
  Info,
  Mail,
  Shield,
  FileCheck,
} from "lucide-react";
import { createPageUrl } from "./utils";

type LayoutShellProps = {
  children: React.ReactNode;
};

const navItems = [
  { name: "Home", path: "Home", icon: Home },
  { name: "Blog", path: "Blog", icon: FileText },
  { name: "About", path: "About", icon: Info },
  { name: "Contact", path: "Contact", icon: Mail },
];

const footerLinks = [
  { name: "Privacy Policy", path: "Privacy", icon: Shield },
  { name: "Terms & Conditions", path: "Terms", icon: FileCheck },
];

export function LayoutShell({ children }: LayoutShellProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPage = useMemo(() => {
    if (pathname === "/") return "Home";
    const cleaned = pathname.replace(/^\//, "").toLowerCase();
    if (cleaned.startsWith("blog/detail")) return "Blog";
    const match = navItems.find(
      (item) => item.path.toLowerCase() === cleaned
    );
    if (match) return match.name;
    const foot = footerLinks.find(
      (item) => item.path.toLowerCase() === cleaned
    );
    return foot?.name ?? "";
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50/30">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/60"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href={createPageUrl("Home")} className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30"
              >
                <BookOpen className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Study Mentor
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPage === item.name;
                return (
                  <Link key={item.path} href={createPageUrl(item.path)} className="relative">
                    <motion.div
                      whileHover={{ y: -2 }}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-slate-700 hover:text-indigo-600 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{item.name}</span>
                    </motion.div>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-slate-700" />
              ) : (
                <Menu className="w-6 h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-lg"
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = currentPage === item.name;
                  return (
                    <Link
                      key={item.path}
                      href={createPageUrl(item.path)}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? "text-indigo-600 bg-indigo-50"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Page Content */}
      <main className="min-h-[calc(100vh-4rem)]">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Study Mentor</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Empowering students worldwide with quality learning resources,
                study tips, and productivity strategies for academic success.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={createPageUrl(item.path)}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={createPageUrl(link.path)}
                      className="text-slate-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Study Mentor. All rights
              reserved. Made with ❤️ for students.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LayoutShell;

