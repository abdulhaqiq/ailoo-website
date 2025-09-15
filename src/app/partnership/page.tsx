'use client'

import { useState } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Handshake, 
  Globe, 
  Code, 
  TrendingUp, 
  Shield, 
  Users, 
  Zap,
  ArrowRight,
  Mail,
  Phone,
  Building,
  FileText,
  Award,
  CheckCircle,
  Star,
  Target,
  BarChart3,
  Cpu,
  Database,
  Lock,
  Car,
  Home,
  Plane,
  Train,
  Bus,
  Package,
  MapPin,
  ShoppingBag,
  Camera,
  Truck,
  Wrench
} from 'lucide-react'

export default function PartnershipPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    companyType: '',
    website: '',
    partnershipType: '',
    description: '',
    expectedVolume: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const services = [
    { icon: Car, name: 'Taxi & Ride Hailing', status: 'Live', color: 'text-green-400' },
    { icon: Car, name: 'Taxi Subscription', status: 'Live', color: 'text-green-400' },
    { icon: Home, name: 'Home Rentals', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: Car, name: 'Car Rentals', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: Wrench, name: 'Services', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: Camera, name: 'Experiences', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: ShoppingBag, name: 'Shops', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: MapPin, name: 'Tours', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: Package, name: 'Courier', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: Plane, name: 'Flights', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: Train, name: 'Train', status: 'Coming Soon', color: 'text-yellow-400' },
    { icon: Bus, name: 'Metro & Bus', status: 'Coming Soon', color: 'text-yellow-400' }
  ]

  const partnershipTypes = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "B2B API Integration",
      description: "Integrate our comprehensive multi-service platform into your business with our powerful APIs.",
      features: [
        "RESTful API for all services",
        "Real-time data synchronization",
        "Webhook support for instant updates",
        "24/7 technical support"
      ]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Corporate Group Purchasing",
      description: "Bulk purchasing solutions for corporate clients with volume discounts and dedicated support.",
      features: [
        "Volume-based pricing tiers",
        "Dedicated account management",
        "Custom service packages",
        "Enterprise-level support"
      ]
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Strategic Partnership",
      description: "Join forces with us to create innovative solutions and expand your market reach.",
      features: [
        "Joint marketing initiatives",
        "Co-branded solutions",
        "Revenue sharing opportunities",
        "Priority support and development"
      ]
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Revenue Growth',
      description: 'Increase your revenue with access to our comprehensive transportation and lifestyle services'
    },
    {
      icon: Users,
      title: 'Customer Satisfaction',
      description: 'Enhance customer experience with integrated multi-service platform'
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'Partner with a trusted multi-service platform'
    },
    {
      icon: Zap,
      title: 'Quick Integration',
      description: 'Fast and easy integration with our developer-friendly APIs'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Comprehensive analytics and reporting for all services'
    },
    {
      icon: Award,
      title: 'Priority Support',
      description: 'Dedicated support team for all your partnership needs'
    }
  ]

  const corporateBenefits = [
    {
      icon: Target,
      title: 'Volume Discounts',
      description: 'Special pricing for high-volume corporate clients'
    },
    {
      icon: Users,
      title: 'Dedicated Account Manager',
      description: 'Personal account manager for your corporate needs'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced security features for corporate environments'
    },
    {
      icon: BarChart3,
      title: 'Custom Reporting',
      description: 'Tailored reporting and analytics for your business'
    },
    {
      icon: Zap,
      title: 'Priority Support',
      description: '24/7 priority support for corporate clients'
    },
    {
      icon: Award,
      title: 'Custom Solutions',
      description: 'Bespoke solutions tailored to your requirements'
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Partnership Program
              <span className="block text-[#DFFF50]">Multi-Service Platform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with Ailoo to integrate our comprehensive multi-service platform into your business. 
              From transportation to lifestyle services - we have it all.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 px-8 py-4">
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
                View API Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Multi-Service Platform
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A comprehensive ecosystem of transportation and lifestyle services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-2">{service.name}</h3>
                  <span className={`text-xs font-medium ${service.color}`}>{service.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Partnership Types
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the partnership model that best fits your business needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                    {type.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                  <p className="text-gray-300 mb-6">{type.description}</p>
                  <ul className="space-y-2 text-left">
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#DFFF50] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Group Purchasing */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Corporate Group Purchasing
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Special pricing and benefits for corporate clients with high-volume needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corporateBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-black mb-4">
                Volume Discount Tiers
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-black">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Bronze</h4>
                  <p className="text-sm">1,000+ transactions/month</p>
                  <p className="font-bold">5% discount</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Silver</h4>
                  <p className="text-sm">5,000+ transactions/month</p>
                  <p className="font-bold">10% discount</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Gold</h4>
                  <p className="text-sm">10,000+ transactions/month</p>
                  <p className="font-bold">15% discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Partner with Ailoo?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join our growing network of partners and unlock new opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300">
                Ready to start your partnership journey? Contact our team today.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">For partnership inquiries and API access</p>
                <a 
                  href="mailto:partner@ailoo.co" 
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold"
                >
                  partner@ailoo.co
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak directly with our partnership team</p>
                <a 
                  href="tel:+966123456789" 
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold"
                >
                  +966 12 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Partnership Application
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Company Name *</label>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Contact Name *</label>
                  <Input
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Email *</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone Number *</label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Company Type *</label>
                  <select
                    name="companyType"
                    value={formData.companyType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#DFFF50]"
                  >
                    <option value="">Select company type</option>
                    <option value="travel">Travel Company</option>
                    <option value="hotel">Hotel Chain</option>
                    <option value="corporate">Corporate</option>
                    <option value="startup">Startup</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Website</label>
                  <Input
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                    placeholder="Enter your website URL"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Partnership Type *</label>
                  <select
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#DFFF50]"
                  >
                    <option value="">Select partnership type</option>
                    <option value="api">B2B API Integration</option>
                    <option value="corporate">Corporate Group Purchasing</option>
                    <option value="strategic">Strategic Partnership</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Expected Volume</label>
                  <select
                    name="expectedVolume"
                    value={formData.expectedVolume}
                    onChange={handleInputChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#DFFF50]"
                  >
                    <option value="">Select expected volume</option>
                    <option value="low">1-1,000 transactions/month</option>
                    <option value="medium">1,000-10,000 transactions/month</option>
                    <option value="high">10,000+ transactions/month</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-300 mb-2">Company Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#DFFF50] resize-none"
                  placeholder="Tell us about your company and business model"
                />
              </div>

              <div className="mb-8">
                <label className="block text-sm text-gray-300 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#DFFF50] resize-none"
                  placeholder="Any additional information about your partnership requirements"
                />
              </div>

              <Button type="submit" className="w-full bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 py-4 text-lg">
                Submit Partnership Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join our growing network of partners and unlock new opportunities for your business with our comprehensive multi-service platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4">
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}