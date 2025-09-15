import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.taxi;

import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { Car, Clock, Shield, Star, Users, MapPin, Phone, CreditCard } from 'lucide-react'

export default function TaxiPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Reliable Taxi Service
                <span className="block text-[#DFFF50]">Anywhere, Anytime</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Book a ride with Ailoo's professional taxi service. Safe, comfortable, and affordable transportation for your daily needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90">
                  Book Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                  Download App
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Taxi Service"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Ailoo Taxi?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the best taxi service with our professional drivers and modern fleet
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">24/7 Availability</h3>
              <p className="text-gray-300">Book a ride anytime, day or night. We're always available when you need us.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Safe & Secure</h3>
              <p className="text-gray-300">All drivers are verified and vehicles are regularly inspected for your safety.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional Drivers</h3>
              <p className="text-gray-300">Experienced, courteous drivers who know the city inside and out.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Modern Fleet</h3>
              <p className="text-gray-300">Clean, comfortable vehicles equipped with the latest amenities.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Payment</h3>
              <p className="text-gray-300">Pay with cash, card, or through our app. Multiple payment options available.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Real-time Tracking</h3>
              <p className="text-gray-300">Track your ride in real-time and know exactly when your driver will arrive.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Getting a ride with Ailoo is simple and straightforward
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Book Your Ride</h3>
              <p className="text-gray-300">Open the app, enter your destination, and choose your preferred vehicle type.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Track Your Driver</h3>
              <p className="text-gray-300">Get matched with a nearby driver and track their arrival in real-time.</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-black">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Enjoy Your Ride</h3>
              <p className="text-gray-300">Sit back, relax, and enjoy a comfortable ride to your destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Subscription Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your preferred subscription plan and enjoy unlimited rides
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-black border border-gray-700 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Monthly Plan</h3>
              <div className="text-4xl font-bold text-[#DFFF50] mb-6">29 SAR</div>
              <p className="text-gray-300 mb-6">per month</p>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Unlimited rides</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">All vehicle types</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Priority booking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Real-time tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Customer support</span>
                </li>
              </ul>
              <Button className="w-full bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90">
                Choose Monthly
              </Button>
            </div>
            
            <div className="bg-black border-2 border-[#DFFF50] rounded-2xl p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#DFFF50] text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Best Value
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Yearly Plan</h3>
              <div className="text-4xl font-bold text-[#DFFF50] mb-6">299 SAR</div>
              <p className="text-gray-300 mb-6">per year</p>
              <div className="text-sm text-green-400 mb-4 font-semibold">
                Save 17% compared to monthly
              </div>
              <ul className="text-left space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Unlimited rides</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">All vehicle types</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Priority booking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Real-time tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Customer support</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-[#DFFF50] rounded-full mr-3"></span>
                  <span className="text-white">Exclusive benefits</span>
                </li>
              </ul>
              <Button className="w-full bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90">
                Choose Yearly
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-3xl p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Ready to Book Your Ride?
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Download the Ailoo app now and experience the best taxi service in the city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Download for iOS
              </Button>
              <Button size="lg" className="bg-black text-white hover:bg-gray-800">
                Download for Android
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
