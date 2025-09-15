import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.privacyPolicy;

'use client'

import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Shield, Lock, Eye, Database, Calendar, AlertCircle, CheckCircle } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const lastUpdated = "December 2024"

  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect personal information including name, email, phone number, payment information, location data, and usage patterns. This information is necessary to provide our transportation services and improve user experience."
    },
    {
      title: "2. How We Use Your Information",
      content: "We use your information to process bookings, provide customer support, send service updates, improve our services, comply with legal obligations, and prevent fraud. We may also use anonymized data for analytics and research."
    },
    {
      title: "3. Information Sharing",
      content: "We share your information with service providers (drivers, airlines, accommodation partners) necessary to fulfill your bookings. We may also share information with law enforcement when required by law or to protect our rights and safety."
    },
    {
      title: "4. Data Security",
      content: "We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information. However, no method of transmission over the internet is 100% secure."
    },
    {
      title: "5. Location Data",
      content: "We collect location data to provide accurate pickup and drop-off services, optimize routes, and ensure driver safety. You can control location sharing through your device settings, but this may affect service quality."
    },
    {
      title: "6. Payment Information",
      content: "Payment information is processed securely through certified payment processors. We do not store complete credit card details on our servers. All payment transactions are encrypted and comply with PCI DSS standards."
    },
    {
      title: "7. Cookies and Tracking",
      content: "We use cookies and similar technologies to enhance your experience, remember preferences, and analyze usage patterns. You can control cookie settings through your browser, but some features may not work properly without cookies."
    },
    {
      title: "8. Third-Party Services",
      content: "Our services may integrate with third-party providers for maps, payments, analytics, and communications. These providers have their own privacy policies, and we encourage you to review them."
    },
    {
      title: "9. Data Retention",
      content: "We retain your personal information for as long as necessary to provide services, comply with legal obligations, resolve disputes, and enforce agreements. Account data is typically retained for 7 years after account closure."
    },
    {
      title: "10. Your Rights",
      content: "You have the right to access, update, delete, or restrict processing of your personal information. You can also request data portability or object to certain processing activities. Contact us to exercise these rights."
    },
    {
      title: "11. International Transfers",
      content: "Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws."
    },
    {
      title: "12. Children's Privacy",
      content: "Our services are not intended for children under 18. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete it."
    },
    {
      title: "13. Changes to Privacy Policy",
      content: "We may update this privacy policy from time to time. We will notify you of significant changes via email or through the app. Your continued use of our services constitutes acceptance of the updated policy."
    },
    {
      title: "14. Contact Information",
      content: "For privacy-related questions or concerns, contact our Data Protection Officer at privacy@ailoo.co or call +966 583 817 592. We will respond to privacy inquiries within 30 days."
    }
  ]

  const dataTypes = [
    { type: "Personal Information", examples: "Name, email, phone number, date of birth" },
    { type: "Location Data", examples: "Pickup/drop-off locations, route history" },
    { type: "Payment Information", examples: "Card details, billing address (encrypted)" },
    { type: "Usage Data", examples: "App interactions, service preferences, booking history" },
    { type: "Device Information", examples: "Device type, operating system, IP address" },
    { type: "Communication Data", examples: "Support messages, feedback, reviews" }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Privacy
              <span className="block text-[#DFFF50]">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-2xl p-8 mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#DFFF50] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white mb-2">Our Commitment to Privacy</h2>
                  <p className="text-gray-300">
                    Ailoo is committed to protecting your privacy and personal information. This policy explains 
                    how we collect, use, and safeguard your data when you use our transportation services.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Types We Collect */}
            <div className="bg-gray-900 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Database className="w-6 h-6 text-[#DFFF50]" />
                Types of Data We Collect
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {dataTypes.map((data, index) => (
                  <div key={index} className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">{data.type}</h4>
                    <p className="text-gray-400 text-sm">{data.examples}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <div key={index} className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 bg-[#DFFF50] rounded-full flex items-center justify-center text-black font-bold text-sm">
                      {index + 1}
                    </span>
                    {section.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Security Measures */}
            <div className="mt-12 bg-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <Eye className="w-6 h-6 text-[#DFFF50]" />
                Security Measures
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Encryption</h4>
                      <p className="text-gray-400 text-sm">All data is encrypted in transit and at rest</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Access Controls</h4>
                      <p className="text-gray-400 text-sm">Strict access controls and authentication</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Regular Audits</h4>
                      <p className="text-gray-400 text-sm">Regular security audits and assessments</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Secure Servers</h4>
                      <p className="text-gray-400 text-sm">Data stored on secure, certified servers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">PCI Compliance</h4>
                      <p className="text-gray-400 text-sm">Payment processing meets PCI DSS standards</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium">Staff Training</h4>
                      <p className="text-gray-400 text-sm">Regular privacy and security training</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-12 bg-gray-900 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#DFFF50] rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Privacy Questions?</h3>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy or want to exercise your privacy rights, contact us:
                  </p>
                  <div className="space-y-2">
                    <p className="text-[#DFFF50] font-medium">Email: privacy@ailoo.co</p>
                    <p className="text-[#DFFF50] font-medium">Phone: +966 583 817 592</p>
                    <p className="text-gray-300">Address: Ailoo HQ, Riyadh, Saudi Arabia</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
