import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";
import Header from '@/components/sections/header';
import Footer from '@/components/sections/footer';
import { Shield, Lock, FileText, CheckCircle, AlertCircle, Link, Calendar, Globe } from 'lucide-react';

export const metadata: Metadata = pageMetadata.termsOfService;

export default function TermsOfServicePage() {
  const lastUpdated = "September 15, 2025";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing or using the Ailoo website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.",
      icon: CheckCircle
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on Ailoo's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose, or for any public display (commercial or non-commercial); attempt to decompile or reverse engineer any software contained on Ailoo's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or 'mirror' the materials on any other server. This license shall automatically terminate if you violate any of these restrictions and may be terminated by Ailoo at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.",
      icon: FileText
    },
    {
      title: "3. Disclaimer",
      content: "The materials on Ailoo's website are provided on an 'as is' basis. Ailoo makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, Ailoo does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
      icon: Shield
    },
    {
      title: "4. Limitations",
      content: "In no event shall Ailoo or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Ailoo's website, even if Ailoo or an Ailoo authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.",
      icon: Lock
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on Ailoo's website could include technical, typographical, or photographic errors. Ailoo does not warrant that any of the materials on its website are accurate, complete or current. Ailoo may make changes to the materials contained on its website at any time without notice. However Ailoo does not make any commitment to update the materials.",
      icon: AlertCircle
    },
    {
      title: "6. Links",
      content: "Ailoo has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Ailoo of the site. Use of any such linked website is at the user's own risk.",
      icon: Link
    },
    {
      title: "7. Modifications",
      content: "Ailoo may revise these Terms of Service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these Terms of Service.",
      icon: Calendar
    },
    {
      title: "8. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of Saudi Arabia and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.",
      icon: Globe
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-8 text-center">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-400 mb-12 text-center">
              Last Updated: {lastUpdated}
            </p>

            <div className="space-y-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-gray-900 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#DFFF50] rounded-full flex items-center justify-center mr-4">
                      <section.icon className="w-6 h-6 text-black" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}