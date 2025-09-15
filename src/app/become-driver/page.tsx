import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.becomeDriver;

'use client'

import { useState } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Car, 
  Clock, 
  Shield, 
  Star, 
  Users, 
  MapPin, 
  Calendar,
  CheckCircle,
  ArrowRight,
  DollarSign,
  Phone,
  Mail,
  User,
  FileText,
  Award,
  TrendingUp,
  Zap,
  Wifi,
  Coffee,
  Music,
  Luggage,
  CreditCard,
  Smartphone
} from 'lucide-react'

export default function BecomeDriverPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    experience: '',
    vehicleType: '',
    licenseNumber: '',
    message: ''
  })

  const [selectedPlan, setSelectedPlan] = useState('weekly')

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

  const driverPlans = [
    {
      id: 'daily',
      name: 'Daily',
      price: '24',
      period: 'per day',
      features: ['Flexible schedule', 'Basic support', 'Standard features'],
      color: 'bg-gray-600'
    },
    {
      id: 'weekly',
      name: 'Weekly',
      price: '120',
      period: 'per week',
      features: ['Priority support', 'Advanced features', 'Weekly planning', 'Save 29%'],
      color: 'bg-[#DFFF50]',
      isPopular: true
    },
    {
      id: 'monthly',
      name: 'Monthly',
      price: '400',
      period: 'per month',
      features: ['Premium support', 'All features', 'Monthly planning', 'Save 44%', 'Exclusive benefits'],
      color: 'bg-gray-800'
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: '0% Commission',
      description: 'Keep 100% of your earnings. No hidden fees or commission cuts.'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work when you want. Set your own schedule and availability.'
    },
    {
      icon: TrendingUp,
      title: 'Higher Earnings',
      description: 'Earn more with our premium pricing and bonus opportunities.'
    },
    {
      icon: Shield,
      title: 'Driver Protection',
      description: 'Comprehensive insurance and safety measures for all drivers.'
    },
    {
      icon: Star,
      title: 'Premium Support',
      description: '24/7 driver support and dedicated account management.'
    },
    {
      icon: Users,
      title: 'Passenger Quality',
      description: 'Access to high-quality passengers and business clients.'
    }
  ]

  const requirements = [
    'Valid driver\'s license (minimum 2 years)',
    'Clean driving record',
    'Vehicle insurance',
    'Background check clearance',
    'Minimum age of 21',
    'Smartphone with GPS capability'
  ]

  const features = [
    {
      icon: Smartphone,
      title: 'Driver App',
      description: 'Easy-to-use mobile app for managing rides and earnings'
    },
    {
      icon: MapPin,
      title: 'Smart Routing',
      description: 'AI-powered routing to maximize your efficiency and earnings'
    },
    {
      icon: CreditCard,
      title: 'Instant Payouts',
      description: 'Get paid instantly after each ride with no waiting periods'
    },
    {
      icon: Award,
      title: 'Performance Bonuses',
      description: 'Earn extra rewards for excellent service and high ratings'
    },
    {
      icon: Wifi,
      title: 'In-App Features',
      description: 'Navigation, communication, and earnings tracking all in one place'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join our driver community for tips, support, and networking'
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
              Become a Driver
              <span className="block text-[#DFFF50]">0% Commission Rides</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of drivers earning more with Ailoo's 0% commission model. 
              Keep 100% of your earnings and enjoy premium features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 px-8 py-4">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Driver Plans */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose Your Driver Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Flexible subscription plans designed for drivers of all types
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {driverPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`relative bg-gray-900 rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'ring-2 ring-[#DFFF50] scale-105'
                      : 'hover:scale-105'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#DFFF50] text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <DollarSign className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-[#DFFF50] mb-2">
                      {plan.price} SAR
                    </div>
                    <p className="text-gray-300">{plan.period}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      selectedPlan === plan.id
                        ? 'bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              ))}
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
                Why Drive with Ailoo?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Join the most driver-friendly platform with 0% commission and premium benefits
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

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Driver Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to succeed as a driver
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Driver Requirements
              </h2>
              <p className="text-xl text-gray-300">
                Simple requirements to get started as a driver
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#DFFF50] flex-shrink-0" />
                  <span className="text-white">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Apply to Become a Driver
              </h2>
              <p className="text-xl text-gray-300">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Name *</label>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                    placeholder="Enter your full name"
                  />
                </div>
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
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                <div>
                  <label className="block text-sm text-gray-300 mb-2">City *</label>
                  <Input
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                    placeholder="Enter your city"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Driving Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#DFFF50]"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Vehicle Type *</label>
                  <select
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#DFFF50]"
                  >
                    <option value="">Select vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury">Luxury</option>
                    <option value="van">Van</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-300 mb-2">Driver's License Number *</label>
                <Input
                  name="licenseNumber"
                  value={formData.licenseNumber}
                  onChange={handleInputChange}
                  required
                  className="bg-gray-800 border-gray-700 text-white focus:border-[#DFFF50]"
                  placeholder="Enter your license number"
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
                  placeholder="Tell us about yourself and why you want to drive with Ailoo"
                />
              </div>

              <Button type="submit" className="w-full bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 py-4 text-lg">
                Submit Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join thousands of drivers who are already earning more with Ailoo's 0% commission model.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                Apply Now
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
