"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Eye,
  UserCheck,
  Database,
  ExternalLink,
  Cookie,
} from "lucide-react";

export default function Privacy() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        {
          subtitle: "Personal Information",
          text: "When you visit Study Mentor, we may collect certain information such as your name and email address if you voluntarily provide it through contact forms or newsletter subscriptions. We only collect information that you explicitly provide to us.",
        },
        {
          subtitle: "Usage Data",
          text: "We automatically collect certain information when you visit our website, including your IP address, browser type, device information, pages visited, and time spent on our site. This helps us understand how visitors use Study Mentor and improve our content.",
        },
        {
          subtitle: "Cookies and Tracking",
          text: "Study Mentor uses cookies and similar tracking technologies to enhance your browsing experience and analyze site traffic. These technologies help us remember your preferences and understand which content is most valuable to our visitors.",
        },
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        {
          text: "We use the collected information for the following purposes: To provide, maintain, and improve our website and content; To respond to your inquiries and provide customer support; To send you newsletters and educational content (only if you've subscribed); To analyze usage patterns and optimize user experience; To comply with legal obligations and protect our rights.",
        },
      ],
    },
    {
      icon: Cookie,
      title: "Cookies Policy",
      content: [
        {
          subtitle: "What Are Cookies",
          text: "Cookies are small text files stored on your device that help websites remember your preferences and improve functionality. Study Mentor uses both session cookies (temporary) and persistent cookies (stored longer-term).",
        },
        {
          subtitle: "Types of Cookies We Use",
          text: "Essential Cookies: Required for the website to function properly. Analytics Cookies: Help us understand how visitors interact with our site. Preference Cookies: Remember your settings and preferences for future visits.",
        },
        {
          subtitle: "Managing Cookies",
          text: "You can control and manage cookies through your browser settings. However, disabling certain cookies may limit your ability to use some features of Study Mentor.",
        },
      ],
    },
    {
      icon: Lock,
      title: "Google AdSense and Advertising",
      content: [
        {
          subtitle: "Third-Party Advertising",
          text: "Study Mentor uses Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to our website or other websites. These cookies enable Google and its partners to serve ads based on your interests.",
        },
        {
          subtitle: "Ad Personalization",
          text: "You may opt out of personalized advertising by visiting Google's Ads Settings or by visiting www.aboutads.info. You can also opt out of some third-party vendors' use of cookies by visiting the Network Advertising Initiative opt-out page.",
        },
        {
          subtitle: "AdSense Policies",
          text: "We comply with all Google AdSense policies. Ads displayed on Study Mentor are clearly distinguished from our content. We do not encourage clicks on advertisements or engage in any click fraud.",
        },
      ],
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        {
          subtitle: "Access and Correction",
          text: "You have the right to access, update, or correct your personal information at any time. Contact us using the information provided on our Contact page to exercise these rights.",
        },
        {
          subtitle: "Data Deletion",
          text: "You may request deletion of your personal information. We will comply with such requests unless we're required to retain the information for legal purposes.",
        },
        {
          subtitle: "Opt-Out Options",
          text: "You can opt out of receiving marketing emails by clicking the unsubscribe link in any email we send. You can also disable cookies through your browser settings, though this may affect site functionality.",
        },
        {
          subtitle: "Do Not Track",
          text: "We respect Do Not Track (DNT) browser settings. When DNT is enabled, we will not track your browsing activity for advertising purposes.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Data Protection and Security",
      content: [
        {
          text: "We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security of your data. We implement industry-standard security practices including encryption, secure servers, and regular security audits.",
        },
      ],
    },
    {
      icon: ExternalLink,
      title: "Third-Party Links and Services",
      content: [
        {
          subtitle: "External Links",
          text: "Study Mentor may contain links to external websites. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review the privacy policies of any external sites you visit.",
        },
        {
          subtitle: "Third-Party Services",
          text: "We may use third-party services for analytics, advertising, and other functionalities. These services may collect information according to their own privacy policies. Key third-party services include Google Analytics, Google AdSense, and email service providers.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-indigo-100">
              Last Updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              At Study Mentor, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              By using Study Mentor, you agree to the collection and use of
              information in accordance with this Privacy Policy. If you do not
              agree with our policies and practices, please do not use our
              website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 pt-2">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6 ml-16">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.subtitle && (
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {item.subtitle}
                        </h3>
                      )}
                      <p className="text-slate-600 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Additional Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Children's Privacy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Study Mentor is intended for use by students of all ages. However,
              we do not knowingly collect personal information from children
              under 13 without parental consent. If you are a parent or guardian
              and believe your child has provided us with personal information,
              please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-8">
              Changes to This Privacy Policy
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-8">
              Contact Us
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our data practices, please contact us through
              our Contact page. We are committed to addressing your concerns and
              will respond to all inquiries within a reasonable timeframe.
            </p>
          </motion.div>

          {/* Consent Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center"
          >
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Your Privacy Matters</h3>
            <p className="text-indigo-100 leading-relaxed">
              By continuing to use Study Mentor, you acknowledge that you have
              read and understood this Privacy Policy and agree to its terms. We
              are committed to maintaining the trust you place in us.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
