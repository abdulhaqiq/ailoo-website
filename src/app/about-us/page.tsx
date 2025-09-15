'use client'

import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  Users,
  Target,
  Eye,
  TrendingUp,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  Star,
  CheckCircle,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Github
} from 'lucide-react'

export default function AboutUsPage() {
  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      number: "Launching",
      label: "Soon",
      description: "Building the future of transportation"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      number: "Riyadh",
      label: "First City",
      description: "Starting in the heart of Saudi Arabia"
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "12+",
      label: "Planned Services",
      description: "Comprehensive multi-service platform"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "2025",
      label: "Founded",
      description: "Innovation-driven transportation startup"
    }
  ]

  const team = [
    {
      name: "Abdul Kumshey",
      position: "CEO & Founder",
      image: "https://media.licdn.com/dms/image/v2/D5603AQETRPep4L6Bhg/profile-displayphoto-crop_800_800/B56ZjjaAM8HIAM-/0/1756161905861?e=1760572800&v=beta&t=RtFO5r1Nd871sOPjYsJTVngYTfYs_1F5g9AHcifwcok",
      description: "Visionary leader and entrepreneur revolutionizing transportation across the Middle East",
      social: {
        linkedin: "https://www.linkedin.com/in/abdulkumshey/"
      }
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Every decision we make is centered around our customers' needs and satisfaction."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions for modern transportation."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trust & Safety",
      description: "Security and reliability are at the core of everything we build and deliver."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessibility",
      description: "Making transportation accessible to everyone, everywhere, at any time."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Building strong relationships with our users, partners, and local communities."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Excellence",
      description: "Striving for the highest standards in everything we do, from technology to service."
    }
  ]

  const milestones = [
    {
      year: "July 2025",
      title: "Company Founded",
      description: "Ailoo was established with a vision to revolutionize transportation in the Middle East."
    },
    {
      year: "2025 Q4",
      title: "Taxi Service Launch",
      description: "Launched our first service - taxi and ride-hailing in Riyadh and Jeddah."
    },
    {
      year: "2026 Q1",
      title: "Subscription Model",
      description: "Introduced taxi subscription service for daily commuters."
    },
    {
      year: "2026 Q2",
      title: "Multi-City Expansion",
      description: "Expanded services to major cities across Saudi Arabia."
    },
    {
      year: "2026 Q3",
      title: "Platform Expansion",
      description: "Announced plans for additional services including flights, rentals, and more."
    },
    {
      year: "2026",
      title: "Regional Expansion",
      description: "Plans to expand across the GCC region and beyond."
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
              About Ailoo
              <span className="block text-[#DFFF50]">Revolutionizing Transportation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Founded in July 2025, we're building the future of transportation with a comprehensive multi-service platform 
              that connects people, places, and possibilities across the Middle East and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Impact
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Numbers that reflect our commitment to excellence and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-black">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-xl font-semibold text-[#DFFF50] mb-2">{stat.label}</div>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To revolutionize transportation by creating a comprehensive, accessible, and sustainable 
                  multi-service platform that connects people with their destinations and enriches their daily lives.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To become the leading multi-service transportation platform in the Middle East, 
                  setting new standards for innovation, reliability, and customer satisfaction.
                </p>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
                <p className="text-gray-300">
                  Customer-first approach, innovation, trust & safety, accessibility, 
                  community building, and excellence in everything we do.
                </p>
              </div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide our decisions and shape our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center p-6">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-black">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The passionate individuals driving Ailoo's success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-6 text-center">
                  <div className="w-24 h-24 bg-gray-700 rounded-full mx-auto mb-4 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#DFFF50] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                  <div className="flex justify-center gap-3">
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-[#DFFF50] transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a href={member.social.github} className="text-gray-400 hover:text-[#DFFF50] transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Key milestones in Ailoo's growth and development
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#DFFF50]"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-gray-900 rounded-2xl p-6">
                      <div className="text-[#DFFF50] font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#DFFF50] rounded-full border-4 border-black"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-300">
                Have questions or want to learn more about Ailoo? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 mb-4">General inquiries and support</p>
                <a 
                  href="mailto:info@ailoo.co" 
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold"
                >
                  info@ailoo.co
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 mb-4">Speak with our support team</p>
                <a 
                  href="tel:+966123456789" 
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold"
                >
                  +966 12 345 6789
                </a>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 mb-4">Our headquarters</p>
                <p className="text-[#DFFF50] font-semibold">
                  Riyadh, Saudi Arabia
                </p>
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
              Join Our Journey
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Be part of the transportation revolution. Download Ailoo today and experience the future of mobility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                Download App
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
