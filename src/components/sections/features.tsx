'use client'

import { useState } from 'react'
import { Shield, Zap, Cpu, Lock, Monitor, Heart, Car, Home, Dumbbell, ShoppingBag, Plane, CreditCard, Building2 } from 'lucide-react'

const tabData = {
  'Ride Services': [
    {
      id: 1,
      title: "24/7 Availability",
      description: "Book rides anytime, anywhere with our round-the-clock service. Professional drivers ready when you need them.",
      icon: Shield
    },
    {
      id: 2,
      title: "Real-time Tracking",
      description: "Track your ride in real-time with live GPS updates, estimated arrival times, and driver information.",
      icon: Zap
    },
    {
      id: 3,
      title: "Multiple Vehicle Options",
      description: "Choose from economy, comfort, premium, and luxury vehicles to match your needs and budget.",
      icon: Car
    },
    {
      id: 4,
      title: "Secure Payments",
      description: "Pay safely with multiple payment options including cards, digital wallets, and bank transfers.",
      icon: Lock
    },
    {
      id: 5,
      title: "Driver Verification",
      description: "All drivers are thoroughly vetted with background checks, license verification, and safety training.",
      icon: Monitor
    },
    {
      id: 6,
      title: "Customer Support",
      description: "24/7 customer support to help with any questions or issues you may have during your journey.",
      icon: Heart
    }
  ],
  'Flight Services': [
    {
      id: 1,
      title: "Global Flight Search",
      description: "Search and compare flights from hundreds of airlines worldwide with real-time pricing and availability.",
      icon: Plane
    },
    {
      id: 2,
      title: "Best Price Guarantee",
      description: "We guarantee the best prices or we'll match the difference. Book with confidence knowing you're getting the best deal.",
      icon: Zap
    },
    {
      id: 3,
      title: "Flexible Booking",
      description: "Change or cancel your flights with ease. Flexible booking options to accommodate your changing travel plans.",
      icon: Shield
    },
    {
      id: 4,
      title: "Loyalty Rewards",
      description: "Earn points on every flight booking and redeem them for future travel or exclusive perks.",
      icon: Cpu
    },
    {
      id: 5,
      title: "Travel Insurance",
      description: "Optional travel insurance coverage for peace of mind during your journey.",
      icon: Lock
    },
    {
      id: 6,
      title: "Customer Support",
      description: "Dedicated travel support team to help with bookings, changes, and travel assistance.",
      icon: Monitor
    }
  ],
  'Subscription Plans': [
    {
      id: 1,
      title: "Flexible Plans",
      description: "Choose from daily, weekly, or monthly subscription plans that fit your transportation needs and budget.",
      icon: CreditCard
    },
    {
      id: 2,
      title: "Unlimited Rides",
      description: "Enjoy unlimited rides within your subscription period with no hidden fees or surge pricing.",
      icon: Zap
    },
    {
      id: 3,
      title: "Priority Booking",
      description: "Get priority access to rides during peak hours and high-demand periods.",
      icon: Shield
    },
    {
      id: 4,
      title: "Exclusive Discounts",
      description: "Access exclusive discounts on flights, hotels, and partner services with your subscription.",
      icon: Cpu
    },
    {
      id: 5,
      title: "Family Sharing",
      description: "Share your subscription benefits with family members for maximum value.",
      icon: Lock
    },
    {
      id: 6,
      title: "Easy Management",
      description: "Manage your subscription, view usage, and make changes through our user-friendly app.",
      icon: Monitor
    }
  ],
  'Corporate Services': [
    {
      id: 1,
      title: "Business Accounts",
      description: "Dedicated business accounts with centralized billing, reporting, and employee management.",
      icon: Building2
    },
    {
      id: 2,
      title: "Expense Management",
      description: "Automated expense tracking and reporting for all business travel and transportation costs.",
      icon: Heart
    },
    {
      id: 3,
      title: "Custom Policies",
      description: "Set custom travel policies, spending limits, and approval workflows for your organization.",
      icon: Shield
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting on travel patterns, costs, and usage across your organization.",
      icon: Cpu
    },
    {
      id: 5,
      title: "Priority Support",
      description: "Dedicated account managers and priority support for all your business transportation needs.",
      icon: Monitor
    },
    {
      id: 6,
      title: "API Integration",
      description: "Seamless integration with your existing business systems and travel management platforms.",
      icon: Lock
    }
  ],
  'Home Rentals': [
    {
      id: 1,
      title: "Verified Properties",
      description: "All properties are verified and inspected to ensure quality, safety, and accurate listings.",
      icon: Home
    },
    {
      id: 2,
      title: "Flexible Stays",
      description: "Choose from short-term rentals, extended stays, or long-term accommodations to fit your needs.",
      icon: Shield
    },
    {
      id: 3,
      title: "Secure Booking",
      description: "Safe and secure booking process with verified property owners and transparent pricing.",
      icon: Lock
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist with bookings, check-ins, and any issues.",
      icon: Monitor
    },
    {
      id: 5,
      title: "Easy Check-in",
      description: "Streamlined check-in process with digital keys and contactless entry options.",
      icon: Zap
    },
    {
      id: 6,
      title: "Property Reviews",
      description: "Read authentic reviews from previous guests to make informed booking decisions.",
      icon: Heart
    }
  ],
  'Driver Services': [
    {
      id: 1,
      title: "Flexible Schedule",
      description: "Drive when you want with complete flexibility to set your own hours and availability.",
      icon: Car
    },
    {
      id: 2,
      title: "Zero Commission",
      description: "Keep 100% of your earnings with our zero commission policy - no hidden fees or cuts.",
      icon: Zap
    },
    {
      id: 3,
      title: "Easy Onboarding",
      description: "Quick and simple driver onboarding process with comprehensive training and support.",
      icon: Shield
    },
    {
      id: 4,
      title: "Real-time Support",
      description: "24/7 driver support team to help with any questions or issues while on the road.",
      icon: Cpu
    },
    {
      id: 5,
      title: "Safety Features",
      description: "Built-in safety features including emergency contacts, trip tracking, and incident reporting.",
      icon: Lock
    },
    {
      id: 6,
      title: "Driver Rewards",
      description: "Earn bonuses, incentives, and rewards for excellent service and consistent driving.",
      icon: Heart
    }
  ]
}

const tabs = Object.keys(tabData)

export default function Features() {
  const [activeTab, setActiveTab] = useState('Ride Services')

  return (
    <section 
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="200"
      className="py-12 lg:py-20 bg-black"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-[#DFFF50] rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Building2 className="h-10 w-10 text-black" />
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Multi-Service
              <br />
              <span className="text-[#DFFF50]">Mobility Platform</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of transportation with Ailoo's all-in-one platform offering ride-hailing, flight bookings, home rentals, car rentals, and subscription services - all seamlessly integrated for your convenience.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-[#DFFF50] text-black'
                    : 'bg-transparent border border-white text-white hover:bg-white/10'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {tabData[activeTab as keyof typeof tabData].map((feature, index) => {
              const IconComponent = feature.icon
              
              return (
                <div 
                  key={feature.id} 
                  data-aos="fade-up"
                  data-aos-delay={200 + (index * 100)}
                  className="text-center group"
                >
                  <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-colors">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
