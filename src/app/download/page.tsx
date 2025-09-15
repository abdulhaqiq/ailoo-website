import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.download;

'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import { Smartphone, Apple, Android, Monitor, Download, X, CheckCircle } from 'lucide-react'

export default function DownloadPage() {
  const [deviceType, setDeviceType] = useState<string>('')
  const [showAndroidModal, setShowAndroidModal] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const detectDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      
      if (/iphone|ipad|ipod/.test(userAgent)) {
        setDeviceType('ios')
        // Redirect to App Store immediately for iOS
        window.location.href = 'https://apps.apple.com/us/app/ailoo/id6751115120?uo=2'
      } else if (/android/.test(userAgent)) {
        setDeviceType('android')
        setShowAndroidModal(true)
      } else {
        setDeviceType('desktop')
        // Redirect to main website for desktop
        router.push('/')
      }
    }

    detectDevice()
  }, [router])

  const handleAndroidClose = () => {
    setShowAndroidModal(false)
    router.push('/')
  }

  const handleDownloadIOS = () => {
    window.location.href = 'https://apps.apple.com/us/app/ailoo/id6751115120?uo=2'
  }

  const handleGoToWebsite = () => {
    router.push('/')
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Main Content */}
      <div className="pt-20 pb-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Loading State */}
            {!deviceType && (
              <div className="space-y-8">
                <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Download className="w-10 h-10 text-black" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Detecting Your
                  <span className="block text-[#DFFF50]">Device</span>
                </h1>
                <p className="text-xl text-gray-300">
                  Please wait while we redirect you to the appropriate download option...
                </p>
              </div>
            )}

            {/* iOS Device */}
            {deviceType === 'ios' && (
              <div className="space-y-8">
                <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto">
                  <Apple className="w-10 h-10 text-black" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Download Ailoo
                  <span className="block text-[#DFFF50]">for iOS</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Redirecting you to the App Store...
                </p>
                <div className="space-y-4">
                  <button
                    onClick={handleDownloadIOS}
                    className="bg-[#DFFF50] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#DFFF50]/90 transition-colors"
                  >
                    Download from App Store
                  </button>
                  <p className="text-gray-400 text-sm">
                    If you're not redirected automatically, click the button above
                  </p>
                </div>
              </div>
            )}

            {/* Android Device */}
            {deviceType === 'android' && (
              <div className="space-y-8">
                <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto">
                  <Android className="w-10 h-10 text-black" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Android App
                  <span className="block text-[#DFFF50]">Coming Soon</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  We're working hard to bring you the best Android experience
                </p>
                <button
                  onClick={handleGoToWebsite}
                  className="bg-[#DFFF50] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#DFFF50]/90 transition-colors"
                >
                  Visit Website Instead
                </button>
              </div>
            )}

            {/* Desktop Device */}
            {deviceType === 'desktop' && (
              <div className="space-y-8">
                <div className="w-20 h-20 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto">
                  <Monitor className="w-10 h-10 text-black" />
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                  Welcome to
                  <span className="block text-[#DFFF50]">Ailoo Web</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Redirecting you to our website...
                </p>
                <div className="space-y-4">
                  <button
                    onClick={handleGoToWebsite}
                    className="bg-[#DFFF50] text-black px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#DFFF50]/90 transition-colors"
                  >
                    Go to Website
                  </button>
                  <p className="text-gray-400 text-sm">
                    If you're not redirected automatically, click the button above
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Android Coming Soon Modal */}
      {showAndroidModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md w-full relative">
            <button
              onClick={handleAndroidClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto">
                <Android className="w-8 h-8 text-black" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Android App Coming Soon
                </h2>
                <p className="text-gray-300">
                  We're working hard to bring you the best Android experience. 
                  Stay tuned for updates!
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DFFF50]" />
                  <span>iOS app available now</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DFFF50]" />
                  <span>Web platform accessible</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-[#DFFF50]" />
                  <span>Android app in development</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={handleAndroidClose}
                  className="w-full bg-[#DFFF50] text-black py-3 rounded-xl font-semibold hover:bg-[#DFFF50]/90 transition-colors"
                >
                  Visit Website
                </button>
                <button
                  onClick={handleAndroidClose}
                  className="w-full bg-gray-700 text-white py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
