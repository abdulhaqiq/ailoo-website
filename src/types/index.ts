export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface PricingPlan {
  id: string
  name: string
  price: string
  period: string
  features: string[]
  isPopular?: boolean
}

export interface Statistic {
  id: string
  value: string
  label: string
  description?: string
}

export interface NavigationItem {
  id: string
  label: string
  href: string
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  description: string
  color: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: {
    name: string
    avatar: string
    bio: string
  }
  category: BlogCategory
  tags: string[]
  featuredImage: string
  publishedAt: string
  readTime: number
  views: number
  isFeatured: boolean
}

export interface BlogSearchFilters {
  search: string
  category: string
  tag: string
  sortBy: 'newest' | 'oldest' | 'popular' | 'title'
}
