import { Button } from '@/components/ui/button'

export default function DriverCTA() {
  return (
    <section 
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="600"
      className="py-20 lg:py-32 bg-gradient-to-b from-purple-900/20 to-black relative overflow-hidden"
    >
      {/* Background Stars/Sparkles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 left-32 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-20 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute top-60 left-40 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-80 left-15 w-2 h-2 bg-white rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-24 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-3000"></div>
        <div className="absolute top-48 right-32 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-2500"></div>
        <div className="absolute top-72 right-16 w-1 h-1 bg-white rounded-full animate-pulse delay-750"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-12 relative">
          <h2 className="text-4xl lg:text-6xl font-bold text-black mb-8">
            <span className="bg-teal-400 text-black px-4 py-2 rounded-lg">Join Ailoo as Driver</span>
            <br />
            <span className="text-black">Earn More, Drive Better!</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of drivers earning competitive rates with Ailoo. Flexible schedule, transparent earnings, and comprehensive support.
          </p>
          
          <div className="mb-8">
            <Button 
              size="lg" 
              className="bg-teal-400 text-black hover:bg-teal-500 text-lg px-8 py-4 rounded-lg font-semibold"
            >
              Start Driving Today
            </Button>
          </div>

          <p className="text-lg text-gray-600">
            Competitive rates • Flexible hours • 24/7 support
          </p>
        </div>
      </div>
    </section>
  )
}
