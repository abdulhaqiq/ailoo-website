import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.contactUs;

'use client'

import { useState } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  User,
  Building,
  HelpCircle,
  AlertCircle,
  Star,
  CheckCircle
} from 'lucide-react'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const enquiryTypes = [
    { value: 'general', label: 'General Inquiry', icon: <MessageSquare className="w-5 h-5" /> },
    { value: 'support', label: 'Technical Support', icon: <HelpCircle className="w-5 h-5" /> },
    { value: 'partnership', label: 'Partnership', icon: <Building className="w-5 h-5" /> },
    { value: 'driver', label: 'Become a Driver', icon: <User className="w-5 h-5" /> },
    { value: 'complaint', label: 'Complaint', icon: <AlertCircle className="w-5 h-5" /> },
    { value: 'feedback', label: 'Feedback', icon: <Star className="w-5 h-5" /> }
  ]

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@ailoo.co', 'support@ailoo.co', 'partnership@ailoo.co'],
      description: 'We respond within 24 hours'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+966 583 817 592'],
      description: 'Available 24/7 for urgent matters'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: ['Ailoo HQ', 'Riyadh, Saudi Arabia'],
      description: 'By appointment only'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Sunday - Thursday: 9:00 AM - 6:00 PM', 'Friday: Closed', 'Saturday: Closed'],
      description: 'Saudi Arabia time (GMT+3)'
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        enquiryType: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Contact
              <span className="block text-[#DFFF50]">Ailoo</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get in touch with our team. We're here to help with any questions, 
              support requests, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-gray-900 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#DFFF50] focus:ring-[#DFFF50]"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#DFFF50] focus:ring-[#DFFF50]"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    {/* Phone & Company */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#DFFF50] focus:ring-[#DFFF50]"
                          placeholder="+966 583 817 592"
                        />
                      </div>
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">
                          Company (Optional)
                        </label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#DFFF50] focus:ring-[#DFFF50]"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    {/* Enquiry Type */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Enquiry Type *
                      </label>
                      <select
                        name="enquiryType"
                        value={formData.enquiryType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:border-[#DFFF50] focus:ring-[#DFFF50] focus:outline-none"
                      >
                        <option value="">Select enquiry type</option>
                        {enquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#DFFF50] focus:ring-[#DFFF50]"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:border-[#DFFF50] focus:ring-[#DFFF50] focus:outline-none resize-none"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 py-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  <p className="text-gray-300 mb-8">
                    We're here to help! Choose the best way to reach us based on your needs.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-gray-900 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#DFFF50] rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="text-black">
                            {info.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                          <div className="space-y-1 mb-2">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-[#DFFF50] font-medium">{detail}</p>
                            ))}
                          </div>
                          <p className="text-gray-400 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="bg-gray-900 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                  <div className="space-y-3">
                    <a href="/about-us" className="block text-[#DFFF50] hover:text-[#DFFF50]/80 transition-colors">
                      About Ailoo
                    </a>
                    <a href="/partnership" className="block text-[#DFFF50] hover:text-[#DFFF50]/80 transition-colors">
                      Partnership Opportunities
                    </a>
                    <a href="/become-driver" className="block text-[#DFFF50] hover:text-[#DFFF50]/80 transition-colors">
                      Join as Driver
                    </a>
                    <a href="/taxi" className="block text-[#DFFF50] hover:text-[#DFFF50]/80 transition-colors">
                      Book a Ride
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300">Quick answers to common questions</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How quickly do you respond to inquiries?",
                  answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly."
                },
                {
                  question: "What types of partnerships do you offer?",
                  answer: "We offer various partnership opportunities including corporate transportation, API integrations, and strategic business partnerships. Visit our partnership page for more details."
                },
                {
                  question: "How can I become a driver with Ailoo?",
                  answer: "Visit our 'Become a Driver' page to learn about requirements and start your application process. We offer 0% commission rides for our drivers."
                },
                {
                  question: "Do you provide 24/7 customer support?",
                  answer: "Yes, we provide 24/7 support for urgent matters. Our phone support is available around the clock, while email responses are typically within 24 hours."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
