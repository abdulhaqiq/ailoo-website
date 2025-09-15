import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.dailySubscription;

'use client'

import { useState } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
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
  Wifi,
  Coffee,
  Music,
  Zap,
  Luggage,
  Phone
} from 'lucide-react'

export default function DailySubscriptionPage() {
  const [selectedCar, setSelectedCar] = useState('comfort')
  const [selectedPlan, setSelectedPlan] = useState('monthly')

  const carTypes = [
    {
      id: 'lite',
      name: 'Lite',
      description: 'Perfect for daily commutes',
      features: ['Basic comfort', 'Standard features', 'Reliable service'],
      icon: Car,
      color: 'bg-gray-600'
    },
    {
      id: 'comfort',
      name: 'Comfort',
      description: 'Enhanced daily experience',
      features: ['Extra legroom', 'Premium seats', 'Climate control', 'Free water'],
      icon: Car,
      color: 'bg-[#DFFF50]',
      isPopular: true
    },
    {
      id: 'luxury',
      name: 'Luxury',
      description: 'Premium daily transportation',
      features: ['Luxury interior', 'Professional chauffeur', 'Premium amenities', 'WiFi & Entertainment'],
      icon: Car,
      color: 'bg-gray-800'
    }
  ]

  const features = [
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Set your pickup and drop times for the entire week. Change anytime with 24-hour notice.'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: 'Add home, office, and other frequent destinations. Easy switching between locations.'
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'Dedicated drivers who know your routine. Consistent, punctual service every day.'
    },
    {
      icon: Users,
      title: 'Shared or Private',
      description: 'Choose between shared rides with other commuters or private rides for maximum comfort.'
    },
    {
      icon: Calendar,
      title: 'Weekly Planning',
      description: 'Plan your entire week in advance. Set different schedules for different days.'
    },
    {
      icon: Star,
      title: 'Priority Support',
      description: 'Dedicated customer support for daily subscribers. Quick resolution of any issues.'
    }
  ]

  const amenities = [
    { icon: Wifi, name: 'Free WiFi' },
    { icon: Coffee, name: 'Coffee & Water' },
    { icon: Music, name: 'Music & Entertainment' },
    { icon: Zap, name: 'Phone Charging' },
    { icon: Luggage, name: 'Luggage Space' },
    { icon: Phone, name: 'Driver Communication' }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Daily Subscription
              <span className="block text-[#DFFF50]">For Daily Commuters</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Perfect for daily commuters who need reliable, comfortable transportation 
              with flexible scheduling and premium service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 px-8 py-4">
                Start Your Subscription
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Car Selection */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Choose Your Vehicle Type
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Select the perfect vehicle for your daily commute needs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {carTypes.map((car) => (
                <div
                  key={car.id}
                  className={`relative bg-gray-900 rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                    selectedCar === car.id
                      ? 'ring-2 ring-[#DFFF50] scale-105'
                      : 'hover:scale-105'
                  }`}
                  onClick={() => setSelectedCar(car.id)}
                >
                  {car.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#DFFF50] text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className={`w-20 h-20 ${car.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <car.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
                    <p className="text-gray-300">{car.description}</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {car.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      selectedCar === car.id
                        ? 'bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {selectedCar === car.id ? 'Selected' : 'Select'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Daily Subscription?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Designed specifically for daily commuters who need reliable, 
                comfortable transportation every day
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

      {/* Amenities Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Premium Amenities
              </h2>
              <p className="text-xl text-gray-300">
                Enjoy a comfortable ride with all the amenities you need
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-3">
                    <amenity.icon className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-white text-sm font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-300">
                Get started with your daily subscription in just a few steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Choose Your Plan</h3>
                <p className="text-gray-300">Select your vehicle type and subscription period (weekly or monthly).</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Set Your Schedule</h3>
                <p className="text-gray-300">Configure your pickup and drop times for the week ahead.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Start Commuting</h3>
                <p className="text-gray-300">Enjoy reliable, comfortable rides every day with your dedicated driver.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to Start Your Daily Commute?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join thousands of daily commuters who trust Ailoo for their transportation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                Get Started Now
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
