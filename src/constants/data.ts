import { Feature, PricingPlan, Statistic, NavigationItem, FAQ } from '@/types'

export const navigationItems: NavigationItem[] = [
  { id: 'taxi', label: 'Taxi', href: '/taxi' },
  { id: 'flight', label: 'Flight', href: '/flight' },
  { id: 'daily-subscription', label: 'Daily Subscription', href: '/daily-subscription' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'become-driver', label: 'Become a Driver', href: '/become-driver' },
  { id: 'partnership', label: 'Partnership', href: '/partnership' },
  { id: 'about-us', label: 'About Us', href: '/about-us' },
]

export const features: Feature[] = [
  {
    id: 'free-transfers',
    title: 'Free transfers',
    description: 'Create a financial experience and automate repeat purchases by scheduling recurring payments.',
    icon: 'Building2'
  },
  {
    id: 'multiple-account',
    title: 'Multiple account',
    description: 'Run your operations with cash from your account and generate yield on funds stored in your account.',
    icon: 'Coins'
  },
  {
    id: 'unmatched-security',
    title: 'Unmatched security',
    description: 'Securely manage your finances with organization-wide MFA, card-locking, and account-level controls.',
    icon: 'Shield'
  }
]

export const statistics: Statistic[] = [
  {
    id: 'businesses',
    value: '3k+',
    label: 'Businesses already running on Ailoo'
  },
  {
    id: 'instant-withdraw',
    value: 'Instant',
    label: 'Withdraw your funds at any time'
  },
  {
    id: 'no-volatility',
    value: 'No asset volatility',
    label: 'Generate returns on your cash reserves without making any investments.'
  },
  {
    id: 'summary',
    value: '$1,876,580',
    label: 'Summary'
  }
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free Plan',
    price: 'SAR 0',
    period: 'month',
    features: [
      'Unlimited service bookings',
      'All transportation services',
      'Basic vehicle types',
      'Standard booking',
      'Real-time tracking',
      'Email support'
    ]
  },
  {
    id: 'monthly',
    name: 'Monthly Plan',
    price: 'SAR 29',
    period: 'month',
    features: [
      'Unlimited service bookings',
      'All vehicle types',
      'Priority booking',
      'Real-time tracking',
      '24/7 customer support',
      'Flight booking discounts',
      'Home rental benefits',
      'Car rental discounts'
    ]
  },
  {
    id: 'yearly',
    name: 'Yearly Plan',
    price: 'SAR 299',
    period: 'year',
    features: [
      'Unlimited service bookings',
      'All vehicle types',
      'Priority booking',
      'Real-time tracking',
      '24/7 customer support',
      'Flight booking discounts',
      'Home rental benefits',
      'Car rental discounts',
      '15 rides with up to SAR 15 off',
      'Max 30% cashback per ride',
      'Exclusive member perks',
      'Save 14% compared to monthly'
    ],
    isPopular: true
  }
]

export const companyStats = [
  {
    id: 'revenue',
    value: '24%',
    label: 'Revenue business'
  },
  {
    id: 'annual-revenue',
    value: '180K',
    label: 'In annual revenue'
  },
  {
    id: 'runway',
    value: '10+',
    label: 'Months of runway'
  }
]

export const faqData = [
  {
    id: 'subscription-plans',
    question: 'How do subscription plans work for different services?',
    answer: 'Our subscription plans are designed to provide flexible access to our services. You can choose from monthly or annual subscriptions, with different tiers offering various features and usage limits. Plans can be upgraded or downgraded at any time, and you\'ll only pay for what you use.'
  },
  {
    id: 'refund-policy',
    question: 'What\'s your refund policy for services?',
    answer: 'We provide refunds only when there\'s a mistake from our side. For service cancellations, refunds are conditional and not guaranteed. We don\'t abide to pay refunds for user-initiated cancellations or service dissatisfaction. Each case is reviewed individually based on the specific circumstances.'
  },
  {
    id: 'driver-requirements',
    question: 'What are the requirements to become a driver?',
    answer: 'To become a driver with our platform, you need a valid driver\'s license, clean driving record, vehicle insurance, and must pass our background check. We also require a minimum age of 21 and at least 2 years of driving experience.'
  },
  {
    id: 'payment-methods',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, digital wallets, and bank transfers. Our platform supports secure payments through multiple providers to ensure your transactions are safe and convenient.'
  },
  {
    id: 'customer-support',
    question: 'How can I contact customer support?',
    answer: 'You can reach our customer support team 24/7 through our in-app chat, email support, or phone. We also have a comprehensive help center with FAQs and guides to help you find answers quickly.'
  }
]
