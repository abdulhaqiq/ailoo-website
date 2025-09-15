import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { 
  Shield, 
  Lock, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Link, 
  Calendar, 
  Globe,
  Users,
  CreditCard,
  Car,
  Plane,
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  AlertTriangle,
  Scale,
  Gavel,
  Building,
  UserCheck,
  Ban,
  DollarSign,
  RefreshCw,
  ShieldCheck,
  Eye,
  Database,
  Smartphone,
  Wifi,
  Camera,
  Mic,
  Navigation,
  Route,
  Timer,
  Zap,
  Heart,
  Target,
  Award,
  TrendingUp,
  Globe2,
  Users2,
  Star2
} from 'lucide-react';

export const metadata: Metadata = pageMetadata.termsOfService;

export default function TermsOfServicePage() {
  const lastUpdated = "September 15, 2025";

  const mainSections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing, downloading, or using the Ailoo mobile application, website, or any related services (collectively, the 'Service'), you agree to be bound by these Terms of Service ('Terms') and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the Service. These Terms constitute a legally binding agreement between you and Ailoo Technologies Company ('Ailoo', 'we', 'us', or 'our').",
      icon: CheckCircle,
      subsections: [
        {
          title: "1.1 Eligibility",
          content: "You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into this agreement. If you are under 18, you may only use the Service with the involvement and consent of a parent or legal guardian."
        },
        {
          title: "1.2 Account Registration",
          content: "To access certain features of the Service, you must register for an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account."
        },
        {
          title: "1.3 Acceptance Methods",
          content: "Your acceptance of these Terms may be indicated by: (a) clicking 'I Accept' or similar button; (b) creating an account; (c) using the Service; (d) making a booking; or (e) any other action that indicates your agreement to be bound by these Terms."
        }
      ]
    },
    {
      title: "2. Description of Service",
      content: "Ailoo is a comprehensive multi-service transportation platform that provides various mobility and travel services including but not limited to ride-hailing, taxi services, subscription transportation, flight bookings, accommodation reservations, car rentals, and other related services. Our Service connects users with service providers to facilitate transportation and travel needs.",
      icon: Car,
      subsections: [
        {
          title: "2.1 Available Services",
          content: "Our platform offers: (a) Ride-hailing and taxi services; (b) Transportation subscriptions; (c) Flight bookings and airline partnerships; (d) Hotel and accommodation reservations; (e) Car rental services; (f) Multi-modal transportation planning; (g) Real-time tracking and navigation; (h) Payment processing and billing; (i) Customer support and assistance."
        },
        {
          title: "2.2 Service Availability",
          content: "Services are available in designated geographic areas as determined by Ailoo. Service availability may vary by location, time, and demand. We reserve the right to modify, suspend, or discontinue any part of the Service at any time without notice."
        },
        {
          title: "2.3 Third-Party Services",
          content: "Some services are provided by third-party partners, including drivers, airlines, hotels, and other service providers. Ailoo acts as an intermediary platform and does not directly provide transportation or accommodation services."
        }
      ]
    },
    {
      title: "3. User Accounts and Registration",
      content: "To use our Service, you must create an account and provide certain information. You are responsible for maintaining the security of your account and all activities that occur under your account.",
      icon: Users,
      subsections: [
        {
          title: "3.1 Account Information",
          content: "You must provide accurate, current, and complete information including your name, email address, phone number, and payment information. You must update this information promptly if it changes."
        },
        {
          title: "3.2 Account Security",
          content: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account."
        },
        {
          title: "3.3 Account Verification",
          content: "We may require you to verify your identity through various methods including phone verification, email confirmation, or government-issued identification. Failure to complete verification may result in account suspension."
        },
        {
          title: "3.4 Account Termination",
          content: "You may terminate your account at any time by contacting customer support. We may suspend or terminate your account if you violate these Terms or for other reasons at our discretion."
        }
      ]
    },
    {
      title: "4. Booking and Service Usage",
      content: "When you book a service through our platform, you enter into a separate agreement with the service provider. Ailoo facilitates the connection but is not a party to the actual service provision.",
      icon: Calendar,
      subsections: [
        {
          title: "4.1 Booking Process",
          content: "To book a service, you must: (a) Select your service type and destination; (b) Confirm pricing and estimated time; (c) Provide pickup location and contact information; (d) Confirm payment method; (e) Accept the booking terms."
        },
        {
          title: "4.2 Service Confirmation",
          content: "All bookings are subject to confirmation by the service provider. We do not guarantee that a service provider will accept your booking request. Confirmation may depend on availability, location, and other factors."
        },
        {
          title: "4.3 Cancellation Policy",
          content: "You may cancel bookings subject to our cancellation policy. Cancellation fees may apply depending on timing and service type. Service providers may also cancel bookings due to safety concerns, weather, or other circumstances."
        },
        {
          title: "4.4 No-Show Policy",
          content: "If you fail to appear for a confirmed booking without canceling, you may be charged a no-show fee. Repeated no-shows may result in account restrictions or suspension."
        }
      ]
    },
    {
      title: "5. Payment Terms and Pricing",
      content: "All payments for services are processed through our secure payment system. Pricing may vary based on demand, distance, time, and other factors.",
      icon: CreditCard,
      subsections: [
        {
          title: "5.1 Pricing Structure",
          content: "Our pricing is dynamic and may include: (a) Base fare; (b) Distance-based charges; (c) Time-based charges; (d) Demand-based surge pricing; (e) Service fees; (f) Taxes and regulatory fees; (g) Tips and gratuities."
        },
        {
          title: "5.2 Payment Methods",
          content: "We accept various payment methods including credit cards, debit cards, digital wallets, and other approved payment methods. You authorize us to charge your selected payment method for all services and fees."
        },
        {
          title: "5.3 Billing and Invoicing",
          content: "Charges will appear on your payment method statement as 'Ailoo' or similar identifier. You will receive electronic receipts for all transactions. Detailed billing information is available in your account."
        },
        {
          title: "5.4 No Refund Policy",
          content: "ALL SALES ARE FINAL. Ailoo operates a strict no-refund policy. Once a service is purchased, booked, or payment is processed, no refunds will be provided under any circumstances, including but not limited to: (a) Service cancellations; (b) No-shows; (c) Service quality issues; (d) Weather conditions; (e) Traffic delays; (f) User change of mind; (g) Technical issues; (h) Any other reason. By using our Service, you acknowledge and agree to this no-refund policy."
        },
        {
          title: "5.5 Chargeback Prohibition",
          content: "You expressly agree that you will NOT initiate any chargebacks, disputes, or payment reversals with your bank, credit card company, or payment processor for any transactions made through our Service. Any attempt to initiate a chargeback or dispute will be considered a violation of these Terms and may result in immediate account termination and legal action. You acknowledge that all charges are authorized and legitimate charges for services rendered or attempted to be rendered."
        },
        {
          title: "5.6 Subscription Services",
          content: "Subscription services are billed in advance on a recurring basis. You may cancel subscriptions at any time, but NO REFUNDS will be provided for unused portions. Subscription terms and pricing are subject to change with notice. All subscription payments are final and non-refundable."
        }
      ]
    },
    {
      title: "6. User Conduct and Prohibited Activities",
      content: "Users must comply with all applicable laws and regulations and use the Service in a responsible manner. Certain activities are strictly prohibited.",
      icon: Ban,
      subsections: [
        {
          title: "6.1 Prohibited Activities",
          content: "You may not: (a) Use the Service for illegal purposes; (b) Harass, abuse, or harm other users or service providers; (c) Impersonate another person or entity; (d) Attempt to gain unauthorized access to our systems; (e) Interfere with the proper functioning of the Service; (f) Use automated systems to access the Service; (g) Violate any applicable laws or regulations."
        },
        {
          title: "6.2 Safety Requirements",
          content: "You must: (a) Wear seatbelts when required; (b) Follow all safety instructions; (c) Not engage in dangerous or disruptive behavior; (d) Respect service providers and other users; (e) Comply with all applicable traffic and safety laws."
        },
        {
          title: "6.3 Content Restrictions",
          content: "You may not post, transmit, or share content that is: (a) Illegal, harmful, or threatening; (b) Defamatory, obscene, or offensive; (c) Infringing on intellectual property rights; (d) Spam or unsolicited communications; (e) False or misleading information."
        },
        {
          title: "6.4 Account Misuse",
          content: "You may not: (a) Create multiple accounts; (b) Share account credentials; (c) Use accounts for commercial purposes without authorization; (d) Attempt to circumvent account restrictions; (e) Engage in fraudulent activities; (f) Initiate chargebacks or payment disputes; (g) Request refunds after payment processing."
        },
        {
          title: "6.5 Payment Disputes Prohibited",
          content: "You expressly agree that you will NOT dispute any charges with your bank, credit card company, or payment processor. All payments are final and non-refundable. Any attempt to dispute charges will result in immediate account termination and may result in legal action to recover disputed amounts plus legal fees."
        }
      ]
    },
    {
      title: "7. Service Provider Terms",
      content: "Service providers (drivers, partners, etc.) must comply with additional terms and requirements to maintain their status on our platform.",
      icon: UserCheck,
      subsections: [
        {
          title: "7.1 Driver Requirements",
          content: "Drivers must: (a) Possess valid driver's license and insurance; (b) Pass background checks and vehicle inspections; (c) Maintain clean driving record; (d) Complete required training; (e) Comply with all applicable regulations; (f) Provide safe and professional service."
        },
        {
          title: "7.2 Vehicle Standards",
          content: "Vehicles must meet: (a) Age and condition requirements; (b) Safety inspection standards; (c) Insurance coverage requirements; (d) Cleanliness standards; (e) Accessibility requirements where applicable; (f) Environmental standards."
        },
        {
          title: "7.3 Service Standards",
          content: "Service providers must: (a) Arrive on time for bookings; (b) Provide courteous and professional service; (c) Follow designated routes when applicable; (d) Maintain vehicle cleanliness; (e) Comply with all safety requirements; (f) Handle payments and receipts properly."
        },
        {
          title: "7.4 Partner Compliance",
          content: "All service providers must comply with: (a) These Terms of Service; (b) Applicable local, state, and federal laws; (c) Industry regulations and standards; (d) Ailoo's service provider agreements; (e) Safety and quality standards."
        }
      ]
    },
    {
      title: "8. Privacy and Data Protection",
      content: "We are committed to protecting your privacy and personal information. Our collection, use, and protection of your data is governed by our Privacy Policy, which is incorporated into these Terms by reference.",
      icon: Shield,
      subsections: [
        {
          title: "8.1 Information Collection",
          content: "We collect information necessary to provide our services, including personal information, location data, payment information, usage patterns, and communication records."
        },
        {
          title: "8.2 Information Use",
          content: "We use your information to: (a) Provide and improve our services; (b) Process bookings and payments; (c) Ensure safety and security; (d) Communicate with you; (e) Comply with legal obligations; (f) Prevent fraud and abuse."
        },
        {
          title: "8.3 Information Sharing",
          content: "We may share your information with: (a) Service providers necessary to fulfill your bookings; (b) Payment processors and financial institutions; (c) Law enforcement when required by law; (d) Third-party service providers under strict confidentiality agreements."
        },
        {
          title: "8.4 Data Security",
          content: "We implement industry-standard security measures to protect your information, including encryption, secure servers, access controls, and regular security audits."
        }
      ]
    },
    {
      title: "9. Intellectual Property Rights",
      content: "The Service and its original content, features, and functionality are owned by Ailoo and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
      icon: FileText,
      subsections: [
        {
          title: "9.1 Ownership",
          content: "Ailoo owns all rights, title, and interest in and to the Service, including all intellectual property rights. You may not copy, modify, distribute, sell, or lease any part of our Service without our written permission."
        },
        {
          title: "9.2 License to Use",
          content: "We grant you a limited, non-exclusive, non-transferable license to use the Service for personal, non-commercial purposes in accordance with these Terms."
        },
        {
          title: "9.3 User Content",
          content: "You retain ownership of content you create, but grant us a license to use, modify, and distribute such content in connection with the Service."
        },
        {
          title: "9.4 Trademarks",
          content: "The Ailoo name, logo, and related marks are trademarks of Ailoo. You may not use our trademarks without our written permission."
        }
      ]
    },
    {
      title: "10. Disclaimers and Limitations of Liability",
      content: "The Service is provided 'as is' and 'as available' without warranties of any kind. Our liability is limited to the maximum extent permitted by law.",
      icon: AlertTriangle,
      subsections: [
        {
          title: "10.1 Service Disclaimers",
          content: "We disclaim all warranties, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or secure."
        },
        {
          title: "10.2 Third-Party Services",
          content: "We are not responsible for the quality, safety, or performance of third-party services or service providers. Your use of third-party services is at your own risk."
        },
        {
          title: "10.3 Limitation of Liability",
          content: "To the maximum extent permitted by law, Ailoo shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising from your use of the Service."
        },
        {
          title: "10.4 Maximum Liability",
          content: "Our total liability to you for any claims arising from or related to the Service shall not exceed the amount you paid us for the specific service giving rise to the claim, or $100, whichever is greater."
        }
      ]
    },
    {
      title: "11. Indemnification",
      content: "You agree to indemnify, defend, and hold harmless Ailoo and its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of the Service or violation of these Terms.",
      icon: ShieldCheck,
      subsections: [
        {
          title: "11.1 Indemnification Scope",
          content: "You agree to indemnify us against any claims arising from: (a) Your use of the Service; (b) Your violation of these Terms; (c) Your violation of any third-party rights; (d) Your violation of any applicable laws or regulations."
        },
        {
          title: "11.2 Defense and Settlement",
          content: "We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you. You agree to cooperate with our defense of such claims."
        }
      ]
    },
    {
      title: "12. Dispute Resolution",
      content: "Any disputes arising from or related to these Terms or the Service will be resolved through binding arbitration, except for certain exceptions as specified below.",
      icon: Scale,
      subsections: [
        {
          title: "12.1 Arbitration Agreement",
          content: "You and Ailoo agree to resolve any disputes through binding arbitration rather than in court, except that you may assert claims in small claims court if they qualify."
        },
        {
          title: "12.2 Arbitration Process",
          content: "Arbitration will be conducted by a neutral arbitrator in accordance with the rules of the American Arbitration Association or similar organization. The arbitration will take place in Riyadh, Saudi Arabia."
        },
        {
          title: "12.3 Class Action Waiver",
          content: "You agree that any arbitration or court proceeding will be limited to the dispute between you and Ailoo individually. You waive any right to participate in class actions or consolidated proceedings."
        },
        {
          title: "12.4 Exceptions",
          content: "Either party may seek injunctive relief in court to prevent irreparable harm. Intellectual property disputes may be resolved in court rather than arbitration."
        }
      ]
    },
    {
      title: "13. Governing Law and Jurisdiction",
      content: "These Terms are governed by the laws of the Kingdom of Saudi Arabia, without regard to conflict of law principles.",
      icon: Gavel,
      subsections: [
        {
          title: "13.1 Applicable Law",
          content: "These Terms and your use of the Service are governed by the laws of the Kingdom of Saudi Arabia, including its commercial laws and consumer protection regulations."
        },
        {
          title: "13.2 Jurisdiction",
          content: "Any legal action or proceeding arising from these Terms will be brought exclusively in the courts of Riyadh, Saudi Arabia, and you consent to the jurisdiction of such courts."
        },
        {
          title: "13.3 Regulatory Compliance",
          content: "Our Service is subject to regulation by various Saudi Arabian authorities, including the Saudi Authority for Data and Artificial Intelligence (SDAIA) and the General Authority for Civil Aviation (GACA)."
        }
      ]
    },
    {
      title: "14. Modifications to Terms",
      content: "We may modify these Terms at any time. We will notify you of material changes through the Service or by other means. Your continued use of the Service constitutes acceptance of the modified Terms.",
      icon: RefreshCw,
      subsections: [
        {
          title: "14.1 Right to Modify",
          content: "We reserve the right to modify these Terms at any time in our sole discretion. Changes may be necessary to reflect changes in our Service, legal requirements, or business practices."
        },
        {
          title: "14.2 Notice of Changes",
          content: "We will provide notice of material changes through: (a) In-app notifications; (b) Email notifications; (c) Website announcements; (d) Push notifications; (e) Other reasonable means."
        },
        {
          title: "14.3 Acceptance of Changes",
          content: "Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms. If you do not agree to the changes, you must stop using the Service."
        },
        {
          title: "14.4 Effective Date",
          content: "Changes will become effective on the date specified in the notice, or if no date is specified, 30 days after the notice is provided."
        }
      ]
    },
    {
      title: "15. Termination",
      content: "Either party may terminate this agreement at any time. Termination does not relieve you of obligations incurred before termination.",
      icon: AlertCircle,
      subsections: [
        {
          title: "15.1 Termination by You",
          content: "You may terminate your account and this agreement at any time by contacting customer support or using the account deletion feature in the Service."
        },
        {
          title: "15.2 Termination by Us",
          content: "We may terminate or suspend your account and this agreement immediately if you violate these Terms, engage in fraudulent activity, or for other reasons at our discretion."
        },
        {
          title: "15.3 Effect of Termination",
          content: "Upon termination: (a) Your right to use the Service ceases immediately; (b) We may delete your account and data; (c) You remain liable for all charges incurred before termination; (d) Certain provisions of these Terms survive termination."
        },
        {
          title: "15.4 Survival of Terms",
          content: "The following provisions survive termination: (a) Intellectual property rights; (b) Disclaimers and limitations of liability; (c) Indemnification; (d) Dispute resolution; (e) Governing law; (f) Any other provisions that by their nature should survive."
        }
      ]
    },
    {
      title: "16. Force Majeure",
      content: "We shall not be liable for any failure or delay in performance due to circumstances beyond our reasonable control.",
      icon: Globe,
      subsections: [
        {
          title: "16.1 Force Majeure Events",
          content: "Force majeure events include but are not limited to: (a) Natural disasters; (b) Acts of God; (c) War, terrorism, or civil unrest; (d) Government actions or regulations; (e) Labor disputes; (f) Internet or telecommunications failures; (g) Pandemics or public health emergencies."
        },
        {
          title: "16.2 Mitigation",
          content: "We will use reasonable efforts to mitigate the effects of force majeure events and resume normal operations as soon as practicable."
        }
      ]
    },
    {
      title: "17. Severability",
      content: "If any provision of these Terms is found to be unenforceable or invalid, the remaining provisions will remain in full force and effect.",
      icon: CheckCircle,
      subsections: [
        {
          title: "17.1 Invalid Provisions",
          content: "If any provision of these Terms is determined to be invalid, illegal, or unenforceable, such provision will be severed from these Terms, and the remaining provisions will continue to be valid and enforceable."
        },
        {
          title: "17.2 Reformation",
          content: "If a provision is found to be invalid, the parties will work in good faith to reform the provision to make it valid and enforceable while preserving the original intent."
        }
      ]
    },
    {
      title: "18. Entire Agreement",
      content: "These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and Ailoo regarding the Service.",
      icon: FileText,
      subsections: [
        {
          title: "18.1 Complete Agreement",
          content: "These Terms, along with our Privacy Policy, Cookie Policy, and any other policies referenced herein, constitute the complete and exclusive agreement between you and Ailoo regarding the Service."
        },
        {
          title: "18.2 Prior Agreements",
          content: "These Terms supersede all prior or contemporaneous communications, proposals, and agreements between you and Ailoo regarding the Service."
        },
        {
          title: "18.3 Modifications",
          content: "Any modifications to these Terms must be in writing and signed by both parties, except as otherwise provided in these Terms."
        }
      ]
    },
    {
      title: "19. Contact Information",
      content: "If you have any questions about these Terms, please contact us using the information provided below.",
      icon: Mail,
      subsections: [
        {
          title: "19.1 General Inquiries",
          content: "For general questions about these Terms or our Service, contact us at: Email: legal@ailoo.co, Phone: +966 583 817 592, Address: Ailoo Technologies Company, Riyadh, Saudi Arabia"
        },
        {
          title: "19.2 Legal Notices",
          content: "For legal notices, service of process, or formal communications, contact our legal department at: Email: legal@ailoo.co, Address: Ailoo Technologies Company, Legal Department, Riyadh, Saudi Arabia"
        },
        {
          title: "19.3 Customer Support",
          content: "For customer support and service-related questions, contact us at: Email: support@ailoo.co, Phone: +966 583 817 592, In-app support chat"
        }
      ]
    }
  ];

  const quickLinks = [
    { title: "Privacy Policy", href: "/privacy-policy", icon: Shield },
    { title: "Cookie Policy", href: "/cookie-policy", icon: Database },
    { title: "Community Guidelines", href: "/community-guidelines", icon: Users },
    { title: "Safety Center", href: "/safety", icon: ShieldCheck },
    { title: "Help Center", href: "/help", icon: Phone },
    { title: "Contact Us", href: "/contact", icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Terms of
              <span className="block text-[#DFFF50]">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Please read these terms carefully before using our service. By using Ailoo, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice - No Refunds */}
      <section className="py-8 bg-red-900/20 border-l-4 border-red-500">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-red-400 mb-4">⚠️ IMPORTANT: NO REFUND POLICY</h2>
                <div className="text-white space-y-2">
                  <p className="text-lg font-semibold">ALL SALES ARE FINAL - NO REFUNDS WHATSOEVER</p>
                  <p>By using Ailoo services, you agree that:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Once payment is processed, NO REFUNDS will be provided under ANY circumstances</li>
                    <li>You CANNOT request chargebacks or dispute charges with your bank</li>
                    <li>All payments are final and non-refundable</li>
                    <li>Attempting to dispute charges will result in immediate account termination</li>
                  </ul>
                  <p className="text-red-300 font-semibold mt-4">This policy applies to ALL services including rides, subscriptions, bookings, and any other transactions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Related Policies</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-gray-800 hover:bg-gray-700 rounded-lg p-4 text-center transition-colors group"
                >
                  <link.icon className="w-6 h-6 text-[#DFFF50] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-white text-sm font-medium">{link.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {mainSections.map((section, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-[#DFFF50] rounded-lg flex items-center justify-center flex-shrink-0">
                      <section.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {section.content}
                      </p>
                      
                      {section.subsections && (
                        <div className="space-y-4">
                          {section.subsections.map((subsection, subIndex) => (
                            <div key={subIndex} className="bg-gray-800 rounded-lg p-4">
                              <h3 className="text-lg font-semibold text-white mb-2">{subsection.title}</h3>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {subsection.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="mt-12 bg-gradient-to-r from-[#DFFF50] to-[#DFFF50]/80 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-black flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-black mb-4">Important Notice</h3>
                  <p className="text-black/80 leading-relaxed mb-4">
                    These Terms of Service are legally binding. By using our Service, you acknowledge that you have read, 
                    understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Service.
                  </p>
                  <p className="text-black/80 leading-relaxed">
                    For questions about these Terms, please contact our legal team at legal@ailoo.co or call +966 583 817 592.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
