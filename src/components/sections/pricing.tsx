import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import { pricingPlans } from '@/constants/data'

export default function Pricing() {
  return (
    <section className="py-12 lg:py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Choose Your
              <span className="block text-[#DFFF50]">Subscription Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free plan or upgrade to unlock unlimited bookings across all Ailoo services with exclusive discounts and cashback rewards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  plan.isPopular ? 'ring-2 ring-[#DFFF50] bg-[#DFFF50]/5' : 
                  plan.id === 'free' ? 'border-gray-600 bg-gray-900/50' : ''
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#DFFF50] text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                {plan.id === 'free' && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Free Forever
                    </span>
                  </div>
                )}
                
                <CardHeader className={`text-center pb-4 ${
                  plan.isPopular ? 'bg-[#DFFF50] text-black' : 'bg-transparent'
                }`}>
                  <CardTitle className={`text-2xl font-bold ${
                    plan.isPopular ? 'text-black' : 'text-foreground'
                  }`}>
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${
                      plan.isPopular ? 'text-black' : 'text-[#DFFF50]'
                    }`}>
                      {plan.price}
                    </span>
                    <span className={`${
                      plan.isPopular ? 'text-black/70' : 'text-muted-foreground'
                    }`}>/{plan.period}</span>
                  </div>
                  {plan.id === 'yearly' && (
                    <div className="mt-2 space-y-1">
                      <div className="text-sm text-green-400 font-medium">
                        Save SAR 49 per year (14% off)
                      </div>
                      <div className="text-sm text-[#DFFF50] font-medium">
                        + Up to SAR 225 cashback on rides
                      </div>
                    </div>
                  )}
                  {plan.id === 'free' && (
                    <div className="mt-2">
                      <span className="text-sm text-gray-400">
                        Unlimited bookings across all services
                      </span>
                    </div>
                  )}
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#DFFF50] flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.isPopular ? "default" : plan.id === 'free' ? "secondary" : "outline"} 
                    className={`w-full flex items-center justify-center gap-2 ${
                      plan.isPopular 
                        ? 'bg-[#DFFF50] text-black hover:bg-[#DFFF50]/90 border-[#DFFF50]' 
                        : plan.id === 'free'
                        ? 'bg-gray-700 text-white hover:bg-gray-600 border-gray-600'
                        : 'border-[#DFFF50] text-[#DFFF50] hover:bg-[#DFFF50] hover:text-black'
                    }`}
                  >
                    {plan.id === 'free' ? 'Start Free' : 'Get Started'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
