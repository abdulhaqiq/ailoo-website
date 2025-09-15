import { CreditCard, TrendingUp } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Premium Subscription",
    description: "Our premium subscription combines the convenience of unlimited rides with exclusive flight discounts and priority booking. Get access to premium services at affordable rates.",
    icon: CreditCard
  },
  {
    id: 2,
    title: "Corporate Solutions",
    description: "Our team is ready to help your business with comprehensive transportation solutions. Let us design custom packages for your organization's travel and commuting needs.",
    icon: TrendingUp
  }
]

export default function ReserveAccount() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold text-black mb-8">
              The Ailoo Experience
            </h2>
            <div className="space-y-6 text-lg text-gray-700 max-w-4xl">
              <p>
                At Ailoo we are bold. Transportation is just a tool we use to get you where you want to be. Our users enjoy much more value for their investment, accessing unparalleled convenience when traveling.
              </p>
              <p>
                We offer personalized experiences with our integrated ride services, flight bookings, and flexible subscription plans. We upgrade the way you move.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service) => {
              const IconComponent = service.icon
              
              return (
                <div key={service.id} className="space-y-6">
                  <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-black">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
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
