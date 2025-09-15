import { BlogCategory, BlogPost } from '@/types'

export const blogCategories: BlogCategory[] = [
  {
    id: 'transportation',
    name: 'Transportation',
    slug: 'transportation',
    description: 'Latest updates on transportation services and mobility solutions',
    color: '#DFFF50'
  },
  {
    id: 'technology',
    name: 'Technology',
    slug: 'technology',
    description: 'Tech innovations and platform updates',
    color: '#14b8a6'
  },
  {
    id: 'business',
    name: 'Business',
    slug: 'business',
    description: 'Business insights and industry trends',
    color: '#f59e0b'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    slug: 'lifestyle',
    description: 'Lifestyle tips and travel guides',
    color: '#ef4444'
  },
  {
    id: 'safety',
    name: 'Safety',
    slug: 'safety',
    description: 'Safety tips and best practices',
    color: '#8b5cf6'
  }
]

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Urban Mobility: How Ailoo is Revolutionizing Transportation',
    slug: 'future-urban-mobility-ailoo-revolutionizing-transportation',
    excerpt: 'Discover how Ailoo\'s multi-service platform is transforming the way people move around cities, combining ride-hailing, flight booking, and accommodation services in one seamless experience.',
    content: `
      <p>Urban mobility is undergoing a dramatic transformation, and Ailoo is at the forefront of this revolution. Our comprehensive platform brings together multiple transportation services under one roof, making it easier than ever for users to plan and execute their journeys.</p>
      
      <h2>The Multi-Service Advantage</h2>
      <p>Unlike traditional ride-hailing apps that focus solely on ground transportation, Ailoo offers a complete mobility ecosystem. Users can book rides, flights, home rentals, and car rentals all from a single platform, eliminating the need to switch between multiple apps.</p>
      
      <h2>Zero Commission Model</h2>
      <p>One of our key differentiators is our zero commission policy for drivers and vendors. This means more money stays in the pockets of our service providers, leading to better service quality and more competitive pricing for users.</p>
      
      <h2>Technology Integration</h2>
      <p>Our advanced technology stack ensures seamless integration between all services. Real-time tracking, smart routing, and predictive analytics help optimize every aspect of the user journey.</p>
      
      <h2>Looking Ahead</h2>
      <p>As we continue to expand our services and improve our technology, we're committed to making urban mobility more accessible, efficient, and sustainable for everyone.</p>
    `,
    author: {
      name: 'Ahmed Al-Rashid',
      avatar: '/blog/authors/ahmed-al-rashid.jpg',
      bio: 'CEO and Co-founder of Ailoo, passionate about transforming urban mobility'
    },
    category: blogCategories[0],
    tags: ['mobility', 'innovation', 'urban-transport', 'technology'],
    featuredImage: '/blog/featured/urban-mobility.jpg',
    publishedAt: '2024-12-15',
    readTime: 5,
    views: 1250,
    isFeatured: true
  },
  {
    id: '2',
    title: 'Zero Commission Policy: Why We Put Drivers and Vendors First',
    slug: 'zero-commission-policy-drivers-vendors-first',
    excerpt: 'Learn about Ailoo\'s revolutionary zero commission policy and how it benefits both service providers and users, creating a more sustainable and fair ecosystem.',
    content: `
      <p>At Ailoo, we believe that the success of our platform depends on the success of our service providers. That's why we've implemented a zero commission policy that allows drivers and vendors to keep 100% of their earnings.</p>
      
      <h2>The Traditional Model Problem</h2>
      <p>Most platforms charge 20-30% commission from their service providers, significantly reducing their take-home earnings. This creates pressure on service quality and can lead to higher prices for users.</p>
      
      <h2>Our Solution</h2>
      <p>By eliminating commission fees, we ensure that our drivers and vendors can focus on providing excellent service rather than worrying about platform fees. This results in better service quality and more competitive pricing.</p>
      
      <h2>Benefits for Everyone</h2>
      <p>Our zero commission policy creates a win-win situation: drivers earn more, vendors keep more of their revenue, and users benefit from better service and competitive pricing.</p>
      
      <h2>Sustainable Growth</h2>
      <p>This model allows us to build a more sustainable ecosystem where all participants can thrive and grow together.</p>
    `,
    author: {
      name: 'Sarah Al-Mansouri',
      avatar: '/blog/authors/sarah-al-mansouri.jpg',
      bio: 'Head of Operations at Ailoo, focused on creating fair and sustainable business models'
    },
    category: blogCategories[2],
    tags: ['business', 'commission', 'fair-pricing', 'sustainability'],
    featuredImage: '/blog/featured/zero-commission.jpg',
    publishedAt: '2024-12-12',
    readTime: 4,
    views: 980,
    isFeatured: true
  },
  {
    id: '3',
    title: 'Safety First: Ailoo\'s Comprehensive Safety Measures',
    slug: 'safety-first-ailoo-comprehensive-safety-measures',
    excerpt: 'Explore the extensive safety measures Ailoo implements to ensure the security and well-being of all users, from background checks to real-time monitoring.',
    content: `
      <p>Safety is our top priority at Ailoo. We've implemented comprehensive safety measures across all our services to ensure that every user has a secure and comfortable experience.</p>
      
      <h2>Driver Verification</h2>
      <p>All drivers undergo thorough background checks, including criminal history verification, driving record review, and identity verification. We also require valid licenses and insurance documentation.</p>
      
      <h2>Real-Time Monitoring</h2>
      <p>Our platform includes real-time trip monitoring, emergency contact features, and 24/7 safety support. Users can share their trip details with trusted contacts and access emergency assistance at any time.</p>
      
      <h2>Vehicle Safety</h2>
      <p>All vehicles are regularly inspected to ensure they meet safety standards. We verify that vehicles have proper insurance coverage and are in good working condition.</p>
      
      <h2>User Safety Features</h2>
      <p>Users can report safety concerns, rate their experience, and access safety tips through our app. We take all reports seriously and investigate them promptly.</p>
      
      <h2>Continuous Improvement</h2>
      <p>We continuously review and improve our safety measures based on user feedback and industry best practices.</p>
    `,
    author: {
      name: 'Omar Al-Zahrani',
      avatar: '/blog/authors/omar-al-zahrani.jpg',
      bio: 'Head of Safety and Security at Ailoo, ensuring the highest safety standards'
    },
    category: blogCategories[4],
    tags: ['safety', 'security', 'background-checks', 'monitoring'],
    featuredImage: '/blog/featured/safety-measures.jpg',
    publishedAt: '2024-12-10',
    readTime: 6,
    views: 750,
    isFeatured: false
  },
  {
    id: '4',
    title: 'Smart Cities and Transportation: The Role of Technology',
    slug: 'smart-cities-transportation-role-technology',
    excerpt: 'Discover how technology is shaping the future of smart cities and how Ailoo is contributing to this transformation through innovative transportation solutions.',
    content: `
      <p>Smart cities are the future of urban living, and transportation plays a crucial role in making cities more efficient, sustainable, and livable. Ailoo is at the forefront of this transformation.</p>
      
      <h2>Data-Driven Insights</h2>
      <p>Our platform collects and analyzes transportation data to help cities optimize traffic flow, reduce congestion, and improve air quality. This data-driven approach enables more efficient urban planning.</p>
      
      <h2>Integration with City Infrastructure</h2>
      <p>We work closely with city governments to integrate our services with existing transportation infrastructure, creating a seamless experience for residents and visitors.</p>
      
      <h2>Sustainable Transportation</h2>
      <p>By promoting shared mobility and efficient routing, we help reduce the number of vehicles on the road and lower carbon emissions.</p>
      
      <h2>Future Innovations</h2>
      <p>We're exploring emerging technologies like autonomous vehicles, electric mobility, and AI-powered optimization to further enhance our services.</p>
    `,
    author: {
      name: 'Fatima Al-Sabah',
      avatar: '/blog/authors/fatima-al-sabah.jpg',
      bio: 'CTO at Ailoo, leading technology innovation and smart city initiatives'
    },
    category: blogCategories[1],
    tags: ['smart-cities', 'technology', 'sustainability', 'innovation'],
    featuredImage: '/blog/featured/smart-cities.jpg',
    publishedAt: '2024-12-08',
    readTime: 7,
    views: 890,
    isFeatured: false
  },
  {
    id: '5',
    title: 'Travel Tips: Making the Most of Your Ailoo Experience',
    slug: 'travel-tips-making-most-ailoo-experience',
    excerpt: 'Get expert tips on how to maximize your Ailoo experience, from booking strategies to taking advantage of our multi-service platform.',
    content: `
      <p>Whether you're a frequent traveler or just getting started with Ailoo, these tips will help you make the most of our comprehensive platform.</p>
      
      <h2>Plan Ahead</h2>
      <p>Use our platform to plan your entire journey, from airport transfers to accommodation. Booking multiple services together often comes with additional discounts.</p>
      
      <h2>Take Advantage of Subscriptions</h2>
      <p>Our subscription plans offer significant savings for regular users. The yearly plan includes cashback rewards and exclusive benefits across all services.</p>
      
      <h2>Use Real-Time Features</h2>
      <p>Take advantage of real-time tracking, live updates, and instant notifications to stay informed about your bookings and any changes.</p>
      
      <h2>Explore All Services</h2>
      <p>Don't limit yourself to just one service. Our platform offers ride-hailing, flights, home rentals, and car rentals - explore them all for the best experience.</p>
      
      <h2>Stay Connected</h2>
      <p>Follow our blog and social media channels for the latest updates, tips, and exclusive offers.</p>
    `,
    author: {
      name: 'Layla Al-Mutairi',
      avatar: '/blog/authors/layla-al-mutairi.jpg',
      bio: 'Customer Experience Manager at Ailoo, helping users get the most from our platform'
    },
    category: blogCategories[3],
    tags: ['travel-tips', 'user-guide', 'subscriptions', 'platform-features'],
    featuredImage: '/blog/featured/travel-tips.jpg',
    publishedAt: '2024-12-05',
    readTime: 4,
    views: 650,
    isFeatured: false
  },
  {
    id: '6',
    title: 'The Economics of Shared Mobility: A Deep Dive',
    slug: 'economics-shared-mobility-deep-dive',
    excerpt: 'Analyze the economic impact of shared mobility services and how Ailoo\'s business model is reshaping the transportation industry.',
    content: `
      <p>Shared mobility is transforming the economics of transportation, creating new opportunities for both service providers and users while addressing urban challenges.</p>
      
      <h2>Cost Efficiency</h2>
      <p>Shared mobility reduces the total cost of transportation for users by eliminating the need to own and maintain personal vehicles. This is especially beneficial in urban areas where parking and maintenance costs are high.</p>
      
      <h2>Economic Multiplier Effect</h2>
      <p>Our platform creates economic opportunities for drivers, property owners, and local businesses, contributing to the overall economic health of the communities we serve.</p>
      
      <h2>Resource Optimization</h2>
      <p>By optimizing vehicle utilization and reducing empty trips, shared mobility makes transportation more efficient and environmentally sustainable.</p>
      
      <h2>Future Economic Impact</h2>
      <p>As shared mobility continues to grow, it will create new job opportunities, reduce transportation costs, and contribute to more sustainable urban development.</p>
    `,
    author: {
      name: 'Dr. Khalid Al-Rashid',
      avatar: '/blog/authors/khalid-al-rashid.jpg',
      bio: 'Chief Economist at Ailoo, analyzing the economic impact of shared mobility'
    },
    category: blogCategories[2],
    tags: ['economics', 'shared-mobility', 'business-model', 'sustainability'],
    featuredImage: '/blog/featured/economics-mobility.jpg',
    publishedAt: '2024-12-03',
    readTime: 8,
    views: 720,
    isFeatured: false
  }
]

export const featuredPosts = blogPosts.filter(post => post.isFeatured)
export const recentPosts = blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, 3)
export const popularPosts = blogPosts.sort((a, b) => b.views - a.views).slice(0, 3)
