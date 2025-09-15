import { ArrowUpRight } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Urban Mobility",
    description: "Discover how Ailoo is revolutionizing transportation in Saudi Arabia with integrated ride and flight services.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Modern urban transportation"
  },
  {
    id: 2,
    title: "Smart Subscription Plans for Every Need",
    description: "Learn how our flexible subscription plans can save you money while providing unlimited access to transportation services.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Mobile app subscription interface"
  },
  {
    id: 3,
    title: "Driver Success Stories",
    description: "Meet our drivers and learn how Ailoo has helped them build successful careers in the transportation industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Professional driver with car"
  },
  {
    id: 4,
    title: "Corporate Travel Solutions",
    description: "How businesses are using Ailoo to streamline their corporate travel and reduce transportation costs.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Business team in modern office"
  }
]

export default function CTA() {
  return (
    <section className="py-20 lg:py-32 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Latest from
              <span className="bg-teal-400 text-black px-3 py-1 rounded-md ml-2">Ailoo News</span>
            </h2>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors group">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-white text-sm font-medium hover:text-teal-400 transition-colors"
                  >
                    Read more
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
