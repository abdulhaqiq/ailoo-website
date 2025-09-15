'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const imageSlides = [
  {
    id: 1,
    title: "Riyadh Palace",
    description: "Riyadh, Saudi Arabia",
    flag: "🇸🇦",
    image: "https://images.unsplash.com/photo-1605237165959-dcc784975d51?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Riyadh Palace in Saudi Arabia"
  },
  {
    id: 2,
    title: "Dubai Marina",
    description: "Dubai, United Arab Emirates",
    flag: "🇦🇪",
    image: "https://images.unsplash.com/photo-1628859017536-c2f1d69f3c84?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Dubai Marina skyline"
  },
  {
    id: 3,
    title: "Chefchaouen",
    description: "Morocco",
    flag: "🇲🇦",
    image: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=2677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Chefchaouen, Morocco - Blue city"
  }
]

export default function MobileAppSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageSlides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageSlides.length) % imageSlides.length)
  }

  const currentSlideData = imageSlides[currentSlide]

  return (
    <div className="relative w-full">
      {/* Container with Cut-out Effect */}
      <div className="relative rounded-3xl p-8 overflow-hidden">
        {/* Image Slider */}
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={currentSlideData.image}
            alt={currentSlideData.alt}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          
          {/* Navigation Arrows - Inside Image */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Text Overlay - Like City/Place Names */}
          <div className="absolute bottom-0 left-0 right-0 text-white">
            <div className="bg-black rounded-b-2xl px-4 py-3">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-bold">{currentSlideData.title}</h3>
                <span className="text-lg">{currentSlideData.flag}</span>
              </div>
              <p className="text-white/90 text-xs">{currentSlideData.description}</p>
            </div>
          </div>

          {/* Slide Indicators - Inside Image */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {imageSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}