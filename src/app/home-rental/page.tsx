'use client'

import { useState } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { 
  Home,
  Star,
  MapPin,
  Users,
  Wifi,
  Car,
  Utensils,
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
  Heart,
  Award,
  Zap,
  Lock,
  Phone,
  Mail,
  Camera,
  Bed,
  Bath,
  Square,
  TreePine,
  Waves,
  Mountain,
  Sun,
  Moon,
  Building
} from 'lucide-react'

export default function HomeRentalPage() {
  const [selectedTier, setSelectedTier] = useState('medium')

  const subscriptionTiers = [
    {
      id: 'low',
      name: 'Low Tier',
      price: '800',
      period: 'per year',
      description: 'Perfect for budget-conscious travelers',
      features: [
        'Up to 5 property listings',
        'Basic property management tools',
        'Standard customer support',
        'Monthly performance reports',
        'Mobile app access',
        'Basic photo uploads'
      ],
      popular: false
    },
    {
      id: 'medium',
      name: 'Medium Tier',
      price: '1,000',
      period: 'per year',
      description: 'Ideal for growing rental businesses',
      features: [
        'Up to 15 property listings',
        'Advanced property management',
        'Priority customer support',
        'Weekly performance reports',
        'Mobile app + web dashboard',
        'Professional photo uploads',
        'Automated pricing tools',
        'Guest communication tools'
      ],
      popular: true
    },
    {
      id: 'high',
      name: 'High Tier',
      price: '1,400',
      period: 'per year',
      description: 'Complete solution for property managers',
      features: [
        'Unlimited property listings',
        'Premium property management',
        '24/7 dedicated support',
        'Real-time analytics dashboard',
        'Full platform access',
        'Professional photography service',
        'Dynamic pricing optimization',
        'Advanced guest management',
        'Revenue optimization tools',
        'Custom branding options'
      ],
      popular: false
    }
  ]

  const propertyTypes = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Villas & Houses',
      description: 'Spacious family homes and luxury villas',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: 'Beach Houses',
      description: 'Coastal retreats with stunning ocean views',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop'
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Mountain Cabins',
      description: 'Peaceful getaways in nature',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: 'City Apartments',
      description: 'Modern urban accommodations',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop'
    }
  ]

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '0% Commission',
      description: 'Keep 100% of your rental income with our subscription model'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Easy Management',
      description: 'Streamlined tools to manage bookings, guests, and payments'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Premium Listings',
      description: 'Showcase your properties with professional photography'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guest Support',
      description: '24/7 support for both hosts and guests'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Secure Payments',
      description: 'Safe and reliable payment processing'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Verified properties and trusted hosts only'
    }
  ]

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: 'Free WiFi' },
    { icon: <Car className="w-6 h-6" />, name: 'Parking' },
    { icon: <Utensils className="w-6 h-6" />, name: 'Kitchen' },
    { icon: <Bed className="w-6 h-6" />, name: 'Bedrooms' },
    { icon: <Bath className="w-6 h-6" />, name: 'Bathrooms' },
    { icon: <Square className="w-6 h-6" />, name: 'Living Space' },
    { icon: <Camera className="w-6 h-6" />, name: 'Security' },
    { icon: <Heart className="w-6 h-6" />, name: 'Pet Friendly' }
  ]

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Home Rental
                  <span className="block text-[#DFFF50]">Holiday Homes</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Turn your property into a profitable holiday rental with our 0% commission subscription model. 
                  List, manage, and earn from your home with complete control and maximum profits.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 px-8 py-4">
                    Start Listing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-4">
                    View Pricing
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[#DFFF50] to-[#DFFF50]/80 rounded-2xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" 
                    alt="Luxury Holiday Home"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center">
                  <Home className="w-10 h-10 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Types */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Property Types
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                List any type of property and attract the right guests
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {propertyTypes.map((type, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors group">
                  <div className="h-48 relative overflow-hidden">
                    <img 
                      src={type.image} 
                      alt={type.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center">
                      <div className="text-black">
                        {type.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Ailoo Home Rental?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to succeed in the holiday rental business
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-black">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Subscription Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the perfect plan for your rental business. 0% commission on all bookings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {subscriptionTiers.map((tier) => (
                <div 
                  key={tier.id}
                  className={`relative bg-gray-900 rounded-2xl p-8 ${
                    tier.popular ? 'ring-2 ring-[#DFFF50] scale-105' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#DFFF50] text-black px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-[#DFFF50]">SAR {tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-3 ${
                      tier.popular 
                        ? 'bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90' 
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    {selectedTier === tier.id ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Popular Amenities
              </h2>
              <p className="text-xl text-gray-300">
                Attract more guests with these sought-after features
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="w-10 h-10 bg-[#DFFF50] rounded-full flex items-center justify-center">
                    <div className="text-black">
                      {amenity.icon}
                    </div>
                  </div>
                  <span className="text-white font-medium">{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Get started in just a few simple steps
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Choose Your Plan</h3>
                <p className="text-gray-300">
                  Select the subscription tier that fits your rental business needs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">List Your Property</h3>
                <p className="text-gray-300">
                  Upload photos, set pricing, and create an attractive listing
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-black">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Start Earning</h3>
                <p className="text-gray-300">
                  Receive bookings and earn 100% of your rental income
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of successful hosts on Ailoo Home Rental
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">
                    <Mail className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">For property listing support</p>
                <a 
                  href="mailto:rentals@ailoo.co" 
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold"
                >
                  rentals@ailoo.co
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">
                    <Phone className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our rental team</p>
                <a 
                  href="tel:+966583817592" 
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold"
                >
                  +966 583 817 592
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Start Your Holiday Rental Journey Today
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join Ailoo Home Rental and turn your property into a profitable business with 0% commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
