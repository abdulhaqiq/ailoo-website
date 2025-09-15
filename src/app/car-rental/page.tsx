'use client'

import { useState } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { 
  Car,
  Star,
  MapPin,
  Users,
  Wifi,
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
  Fuel,
  Settings,
  Clock,
  Navigation,
  Key,
  Gauge,
  Airplay,
  Music,
  Sun,
  Moon,
  Snowflake,
  Droplets
} from 'lucide-react'

export default function CarRentalPage() {
  const [selectedTier, setSelectedTier] = useState('monthly-economy')

  const subscriptionTiers = [
    {
      id: 'monthly-economy',
      name: 'Economy Plan',
      price: '60',
      period: 'per month',
      description: 'Perfect for individual car owners',
      commission: '4% commission on each booking',
      features: [
        'Up to 3 vehicle listings',
        'Basic rental management',
        'Standard customer support',
        'Monthly earnings reports',
        'Mobile app access',
        'Basic vehicle photos'
      ],
      popular: true
    },
    {
      id: 'monthly-business',
      name: 'Business Plan',
      price: '90',
      period: 'per month',
      description: 'Ideal for growing rental businesses',
      commission: '4% commission on each booking',
      features: [
        'Up to 10 vehicle listings',
        'Advanced rental management',
        'Priority customer support',
        'Weekly earnings reports',
        'Mobile app + web dashboard',
        'Professional vehicle photos',
        'Automated pricing tools',
        'Customer communication tools',
        'GPS tracking integration'
      ],
      popular: false
    },
    {
      id: 'yearly-economy',
      name: 'Economy Plan',
      price: '600',
      period: 'per year',
      description: 'Perfect for individual car owners',
      commission: '4% commission on each booking',
      features: [
        'Up to 3 vehicle listings',
        'Basic rental management',
        'Standard customer support',
        'Monthly earnings reports',
        'Mobile app access',
        'Basic vehicle photos',
        'Save 17% compared to monthly'
      ],
      popular: false
    },
    {
      id: 'yearly-business',
      name: 'Business Plan',
      price: '900',
      period: 'per year',
      description: 'Ideal for growing rental businesses',
      commission: '4% commission on each booking',
      features: [
        'Up to 10 vehicle listings',
        'Advanced rental management',
        'Priority customer support',
        'Weekly earnings reports',
        'Mobile app + web dashboard',
        'Professional vehicle photos',
        'Automated pricing tools',
        'Customer communication tools',
        'GPS tracking integration',
        'Save 17% compared to monthly'
      ],
      popular: false
    },
    {
      id: 'yearly-fleet',
      name: 'Fleet Plan',
      price: '1,200',
      period: 'per year',
      description: 'Complete solution for fleet managers',
      commission: '4% commission on each booking',
      features: [
        'Unlimited vehicle listings',
        'Premium fleet management',
        '24/7 dedicated support',
        'Real-time analytics dashboard',
        'Full platform access',
        'Professional photography service',
        'Dynamic pricing optimization',
        'Advanced customer management',
        'Revenue optimization tools',
        'Custom branding options',
        'Multi-location support',
        'Fleet maintenance tracking',
        'Save 17% compared to monthly'
      ],
      popular: false
    }
  ]

  const vehicleTypes = [
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Economy Cars',
      description: 'Fuel-efficient and budget-friendly options',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      price: 'From SAR 50/day'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Luxury Sedans',
      description: 'Premium comfort and style',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop',
      price: 'From SAR 150/day'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'SUVs & Crossovers',
      description: 'Perfect for families and adventures',
      image: 'https://images.unsplash.com/photo-1549317336-206569e8475c?w=800&h=600&fit=crop',
      price: 'From SAR 100/day'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Sports Cars',
      description: 'High-performance driving experience',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      price: 'From SAR 300/day'
    }
  ]

  const features = [
     {
       icon: <Shield className="w-8 h-8" />,
       title: 'Low 4% Commission',
       description: 'Keep 96% of your rental income with our competitive commission model'
     },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Easy Management',
      description: 'Streamlined tools to manage bookings, customers, and payments'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Premium Listings',
      description: 'Showcase your vehicles with professional photography'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Support',
      description: '24/7 support for both car owners and renters'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Secure Payments',
      description: 'Safe and reliable payment processing'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'Verified vehicles and trusted owners only'
    }
  ]

  const amenities = [
    { icon: <Wifi className="w-6 h-6" />, name: 'WiFi Hotspot' },
    { icon: <Fuel className="w-6 h-6" />, name: 'Full Tank' },
    { icon: <Settings className="w-6 h-6" />, name: 'Auto Transmission' },
    { icon: <Airplay className="w-6 h-6" />, name: 'Air Conditioning' },
    { icon: <Music className="w-6 h-6" />, name: 'Bluetooth Audio' },
    { icon: <Navigation className="w-6 h-6" />, name: 'GPS Navigation' },
    { icon: <Key className="w-6 h-6" />, name: 'Keyless Entry' },
    { icon: <Shield className="w-6 h-6" />, name: 'Insurance Included' }
  ]

  const rentalProcess = [
    {
      step: '1',
      title: 'Choose Your Plan',
      description: 'Select the subscription tier that fits your car rental business needs',
      icon: <Calendar className="w-8 h-8" />
    },
    {
      step: '2',
      title: 'List Your Vehicle',
      description: 'Upload photos, set pricing, and create an attractive vehicle listing',
      icon: <Car className="w-8 h-8" />
    },
    {
      step: '3',
      title: 'Start Earning',
      description: 'Receive bookings and earn 100% of your rental income',
      icon: <Award className="w-8 h-8" />
    }
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
                  Car Rental
                  <span className="block text-[#DFFF50]">Vehicle Sharing</span>
                </h1>
                 <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                   Turn your vehicle into a profitable rental business with our subscription model. 
                   List, manage, and earn from your car with complete control and only 4% commission on bookings.
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
                    src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=600&fit=crop" 
                    alt="Luxury Car Rental"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center">
                  <Car className="w-10 h-10 text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Vehicle Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                List any type of vehicle and attract the right customers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {vehicleTypes.map((type, index) => (
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
                    <div className="absolute bottom-4 right-4 bg-[#DFFF50] text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {type.price}
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
                Why Choose Ailoo Car Rental?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Everything you need to succeed in the car rental business
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
                Choose the perfect plan for your car rental business. 4% commission on each booking.
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
                    <div className="bg-gray-800 rounded-lg p-3 mb-4">
                      <p className="text-[#DFFF50] font-semibold text-sm">{tier.commission}</p>
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
                Attract more customers with these sought-after features
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
              {rentalProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-black">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
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
                Join thousands of successful car owners on Ailoo Car Rental
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
                <p className="text-gray-300 mb-4">For vehicle listing support</p>
                <a 
                  href="mailto:cars@ailoo.co" 
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold"
                >
                  cars@ailoo.co
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">
                    <Phone className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our car rental team</p>
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
              Start Your Car Rental Journey Today
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Join Ailoo Car Rental and turn your vehicle into a profitable business with 0% commission.
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
