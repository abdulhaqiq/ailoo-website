'use client'

import { Metadata } from 'next'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Calendar,
  Award,
  Target,
  Users,
  TrendingUp,
  Globe,
  Heart,
  Zap,
  Shield,
  Star,
  CheckCircle,
  Building,
  Briefcase,
  GraduationCap,
  Trophy,
  Lightbulb,
  Car,
  Handshake
} from 'lucide-react'

export default function AbdulKumsheyPage() {
  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Founded Ailoo",
      year: "July 2025",
      description: "Established Ailoo as a revolutionary multi-service transportation platform"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Haqiq Success",
      year: "2025",
      description: "Built Haqiq AI news app with 5K+ users and 100K impressions in just 2 months"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Top 10 Trending",
      year: "2025",
      description: "Achieved top 10 trending status in Saudi Arabia and UAE during launch week"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Regional Impact",
      year: "2025",
      description: "Created AI news platform that gained massive traction across the region"
    }
  ]

  const values = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Customer-Centric",
      description: "Every decision is made with our customers' best interests in mind"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation",
      description: "Constantly pushing boundaries to create cutting-edge solutions"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Trust & Integrity",
      description: "Building trust through transparency and reliable service delivery"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Leadership",
      description: "Empowering teams to achieve their full potential and drive success"
    }
  ]

  const experience = [
    {
      company: "Ailoo",
      position: "CEO & Founder",
      period: "July 2025 - Present",
      description: "Leading the vision and strategic direction of Ailoo's multi-service transportation platform. Overseeing product development, business operations, and regional expansion across the Middle East.",
      achievements: [
        "Launched comprehensive multi-service platform",
        "Building innovative transportation ecosystem",
        "Expanding across major cities in Saudi Arabia",
        "Developed innovative subscription model",
        "Building strategic partnerships across the region"
      ]
    },
    {
      company: "Haqiq",
      position: "Founder & CEO",
      period: "2025",
      description: "Founded and led Haqiq, an AI-powered news application that achieved remarkable success in just 2 months. Built a platform that gained 5,000+ users and 100,000 impressions, trending in top 10 across Saudi Arabia and UAE during launch week.",
      achievements: [
        "Built AI news app with 5K+ users in 2 months",
        "Achieved 100K impressions and viral growth",
        "Reached top 10 trending in Saudi Arabia and UAE",
        "Created innovative AI-powered news platform",
        "Temporarily paused due to technical issues, planning comeback"
      ]
    }
  ]


  const personalInfo = {
    name: "Abdul Kumshey",
    title: "CEO & Founder of Ailoo",
    location: "Riyadh, Saudi Arabia",
    email: "abdul@ailoo.co",
    phone: "+966 583817592",
    linkedin: "https://www.linkedin.com/in/abdulkumshey/",
    github: "https://github.com/abdulkumshey"
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Blog Header */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-400 mb-8">
              <a href="/" className="hover:text-white transition-colors">Home</a>
              <span className="mx-2">/</span>
              <a href="/about-us" className="hover:text-white transition-colors">About Us</a>
              <span className="mx-2">/</span>
              <span className="text-white">Abdul Kumshey</span>
            </nav>

            {/* Blog Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-gray-400">Published: December 2024</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-gray-400">5 min read</span>
              <span className="text-sm text-gray-400">•</span>
              <span className="text-sm text-[#DFFF50]">CEO Profile</span>
            </div>

            {/* Blog Title */}
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Meet Abdul Kumshey: The Visionary Behind Ailoo's Transportation Revolution
            </h1>

            {/* Blog Subtitle */}
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              From founding Haqiq AI news app (5K+ users, top 10 trending) to CEO of Ailoo's multi-service platform 
              serving 50,000+ users across the Middle East, discover the story of how Abdul Kumshey is transforming 
              technology and transportation one innovation at a time.
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center">
                <img 
                  src="https://media.licdn.com/dms/image/v2/D5603AQETRPep4L6Bhg/profile-displayphoto-crop_800_800/B56ZjjaAM8HIAM-/0/1756161905861?e=1760572800&v=beta&t=RtFO5r1Nd871sOPjYsJTVngYTfYs_1F5g9AHcifwcok" 
                  alt="Abdul Kumshey"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold">Abdul Kumshey</p>
                <p className="text-gray-400 text-sm">CEO & Founder of Ailoo</p>
              </div>
            </div>

            {/* Featured Image */}
            <div className="w-full h-96 rounded-2xl overflow-hidden mb-12">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQETRPep4L6Bhg/profile-displayphoto-crop_800_800/B56ZjjaAM8HIAM-/0/1756161905861?e=1760572800&v=beta&t=RtFO5r1Nd871sOPjYsJTVngYTfYs_1F5g9AHcifwcok" 
                alt="Abdul Kumshey - CEO of Ailoo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">
                    <MapPin className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-gray-300">{personalInfo.location}</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Current Role</h3>
                <p className="text-gray-300">CEO & Founder</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">
                    <Calendar className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Founded</h3>
                <p className="text-gray-300">2023</p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-black">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Team Size</h3>
                <p className="text-gray-300">50+ Employees</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-white mb-6">The Visionary Behind Ailoo's Success</h2>
              
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Born and brought up in Riyadh, Abdul Kumshey is a visionary entrepreneur and technology leader 
                who founded Ailoo in July 2025 with a mission to revolutionize transportation across the Middle East. 
                Prior to Ailoo, Abdul founded Haqiq, an AI-powered news application that achieved remarkable success 
                with 5,000+ users and 100,000 impressions in just 2 months, trending in the top 10 across Saudi Arabia and UAE.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Under Abdul's leadership, Ailoo has grown from a startup idea to a comprehensive multi-service 
                platform building the future of transportation. His vision extends beyond traditional 
                ride-hailing to create an ecosystem of transportation and lifestyle services that will enrich 
                people's daily lives.
              </p>

              <blockquote className="border-l-4 border-[#DFFF50] pl-6 py-4 my-8 bg-gray-900/50 rounded-r-lg">
                <p className="text-xl text-white italic mb-2">
                  "Our mission is to revolutionize transportation by creating a comprehensive, accessible, 
                  and sustainable multi-service platform that connects people with their destinations and 
                  enriches their daily lives."
                </p>
                <cite className="text-[#DFFF50] font-semibold">— Abdul Kumshey, CEO & Founder</cite>
              </blockquote>

              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Abdul is passionate about using technology to solve complex problems and create positive 
                impact in communities. His leadership philosophy centers around customer-centric innovation, 
                team empowerment, and sustainable growth that benefits all stakeholders.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Key Milestones in Abdul's Journey</h2>
            
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-6 p-6 bg-gray-900/50 rounded-2xl hover:bg-gray-900 transition-colors">
                  <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-black">
                      {achievement.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{achievement.title}</h3>
                      <span className="px-3 py-1 bg-[#DFFF50] text-black text-sm font-bold rounded-full">{achievement.year}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Professional Journey</h2>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-4 border-[#DFFF50] pl-8 py-4">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.position}</h3>
                    <p className="text-[#DFFF50] text-lg font-semibold mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#DFFF50] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Leadership Philosophy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Leadership Philosophy & Core Values</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-2xl hover:bg-gray-900/50 transition-colors">
                  <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-black">
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect with Abdul */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Connect with Abdul</h2>
            
            <div className="bg-gray-900 rounded-2xl p-8 mb-8">
              <p className="text-lg text-gray-300 mb-6">
                Interested in learning more about Abdul's journey or exploring partnership opportunities with Ailoo? 
                Get in touch for business inquiries, speaking opportunities, or to discuss the future of transportation.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center">
                    <div className="text-black">
                      <Mail className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-[#DFFF50] hover:text-[#DFFF50]/80 text-sm"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg">
                  <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center">
                    <div className="text-black">
                      <Phone className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-[#DFFF50] hover:text-[#DFFF50]/80 text-sm"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-white font-semibold mb-4">Follow Abdul on Social Media</p>
                <div className="flex gap-4">
                  <a 
                    href={personalInfo.linkedin}
                    className="w-10 h-10 bg-[#DFFF50] rounded-full flex items-center justify-center hover:bg-[#DFFF50]/80 transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-black" />
                  </a>
                  <a 
                    href={personalInfo.github}
                    className="w-10 h-10 bg-[#DFFF50] rounded-full flex items-center justify-center hover:bg-[#DFFF50]/80 transition-colors"
                  >
                    <Github className="w-5 h-5 text-black" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Related Articles
              </h2>
              <p className="text-xl text-gray-300">
                Learn more about Ailoo and our team
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <article className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="h-48 bg-gradient-to-br from-[#DFFF50] to-[#DFFF50]/80 flex items-center justify-center">
                  <Building className="w-16 h-16 text-black" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">About Ailoo</h3>
                  <p className="text-gray-300 mb-4">Learn about our mission, vision, and the team behind Ailoo's success.</p>
                  <a href="/about-us" className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="h-48 bg-gradient-to-br from-[#DFFF50] to-[#DFFF50]/80 flex items-center justify-center">
                  <Handshake className="w-16 h-16 text-black" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Partnership Program</h3>
                  <p className="text-gray-300 mb-4">Discover partnership opportunities with Ailoo's multi-service platform.</p>
                  <a href="/partnership" className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold">
                    Read More →
                  </a>
                </div>
              </article>

              <article className="bg-gray-900 rounded-2xl overflow-hidden hover:bg-gray-800 transition-colors">
                <div className="h-48 bg-gradient-to-br from-[#DFFF50] to-[#DFFF50]/80 flex items-center justify-center">
                  <Car className="w-16 h-16 text-black" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Our Services</h3>
                  <p className="text-gray-300 mb-4">Explore Ailoo's comprehensive range of transportation services.</p>
                  <a href="/taxi" className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-semibold">
                    Read More →
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-3xl p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Learn More About Ailoo
            </h2>
            <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
              Discover the comprehensive multi-service platform that Abdul and his team are building 
              to revolutionize transportation across the Middle East.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-4">
                Explore Ailoo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-4">
                Contact Abdul
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
