"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileCheck,
  AlertCircle,
  Scale,
  UserX,
  Copyright,
  Shield,
  Gavel,
} from "lucide-react";

export default function Terms() {
  const sections = [
    {
      icon: FileCheck,
      title: "Acceptance of Terms",
      content: [
        {
          text: "By accessing and using Study Mentor, you accept and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website. Your continued use of the site constitutes acceptance of any updated terms we may post from time to time.",
        },
      ],
    },
    {
      icon: UserX,
      title: "User Responsibilities",
      content: [
        {
          subtitle: "Acceptable Use",
          text: "You agree to use Study Mentor only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. You must not use the site in any way that causes damage to the site or impairs its availability.",
        },
        {
          subtitle: "Account Security",
          text: "If you create an account on Study Mentor, you are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
        },
        {
          subtitle: "Prohibited Activities",
          text: "You may not: Use the site for any illegal purpose; Attempt to gain unauthorized access to any part of the site; Interfere with the proper functioning of the site; Upload viruses or malicious code; Scrape or harvest data from the site without permission; Impersonate others or misrepresent your affiliation with any person or entity.",
        },
      ],
    },
    {
      icon: Copyright,
      title: "Intellectual Property Rights",
      content: [
        {
          subtitle: "Copyright Ownership",
          text: "All content on Study Mentor, including text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Study Mentor or its content suppliers and is protected by copyright laws. You may not reproduce, distribute, or create derivative works from our content without explicit written permission.",
        },
        {
          subtitle: "Trademarks",
          text: "Study Mentor and all related logos are trademarks of Study Mentor. You may not use these trademarks without our prior written consent. All other trademarks appearing on the site are the property of their respective owners.",
        },
        {
          subtitle: "Limited License",
          text: "We grant you a limited, non-exclusive, non-transferable license to access and use Study Mentor for personal, non-commercial purposes. This license does not include the right to download (other than page caching) or modify any portion of the site without our express written consent.",
        },
        {
          subtitle: "User-Generated Content",
          text: "If you submit content to Study Mentor (such as comments or feedback), you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and publish that content. You represent that you own or have permission to use any content you submit.",
        },
      ],
    },
    {
      icon: Shield,
      title: "Content Disclaimer",
      content: [
        {
          subtitle: "Educational Purpose",
          text: "All content on Study Mentor is provided for educational and informational purposes only. While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, or reliability of any content.",
        },
        {
          subtitle: "No Professional Advice",
          text: "The information on Study Mentor should not be considered professional advice. Always seek the guidance of qualified professionals for specific educational, career, or academic decisions. We are not responsible for any decisions made based on information found on our site.",
        },
        {
          subtitle: "Third-Party Content",
          text: "Study Mentor may contain links to third-party websites or content. We do not endorse or assume responsibility for any third-party sites, information, materials, products, or services. Your use of third-party websites is at your own risk.",
        },
      ],
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: [
        {
          subtitle: "Disclaimer of Warranties",
          text: "Study Mentor is provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied. We do not warrant that the site will be uninterrupted, secure, or error-free, or that defects will be corrected.",
        },
        {
          subtitle: "Limitation of Damages",
          text: "To the fullest extent permitted by law, Study Mentor shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use the site, even if we have been advised of the possibility of such damages.",
        },
        {
          subtitle: "Indemnification",
          text: "You agree to indemnify and hold harmless Study Mentor and its affiliates from any claims, damages, losses, or expenses (including legal fees) arising from your use of the site, your violation of these terms, or your violation of any rights of another party.",
        },
      ],
    },
    {
      icon: Gavel,
      title: "Termination",
      content: [
        {
          text: "We reserve the right to terminate or suspend your access to Study Mentor at any time, without prior notice or liability, for any reason, including breach of these Terms and Conditions. Upon termination, your right to use the site will immediately cease.",
        },
      ],
    },
    {
      icon: Scale,
      title: "Governing Law and Disputes",
      content: [
        {
          subtitle: "Applicable Law",
          text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Study Mentor operates, without regard to its conflict of law provisions.",
        },
        {
          subtitle: "Dispute Resolution",
          text: "Any disputes arising from these terms or your use of Study Mentor shall first be resolved through good-faith negotiations. If negotiations fail, disputes may be submitted to binding arbitration or resolved in courts of competent jurisdiction.",
        },
        {
          subtitle: "Severability",
          text: "If any provision of these Terms and Conditions is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
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
            <FileCheck className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Terms & Conditions
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
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Welcome to Study Mentor
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-4">
              These Terms and Conditions ("Terms") govern your access to and use
              of the Study Mentor website and any related services provided by
              us. Please read these Terms carefully before using our website.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              By accessing or using Study Mentor, you agree to be legally bound
              by these Terms. If you disagree with any part of these Terms, you
              should not use our website.
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

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Changes to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We reserve the right to modify these Terms and Conditions at any
              time. Changes will be effective immediately upon posting to the
              website. Your continued use of Study Mentor after any
              modifications constitutes acceptance of the updated Terms.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We recommend checking this page periodically to stay informed
              about any changes. Material changes will be highlighted at the top
              of this page.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-8">
              Entire Agreement
            </h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms and Conditions, together with our Privacy Policy,
              constitute the entire agreement between you and Study Mentor
              regarding your use of the website and supersede all prior
              agreements and understandings.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mb-6 mt-8">
              Contact Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms and Conditions, please
              contact us through our Contact page. We will make every effort to
              respond to your inquiries in a timely manner.
            </p>
          </motion.div>

          {/* Acknowledgment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg p-8 text-white text-center"
          >
            <Scale className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Acknowledgment</h3>
            <p className="text-indigo-100 leading-relaxed">
              By using Study Mentor, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.
              Thank you for being a responsible member of our community.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
