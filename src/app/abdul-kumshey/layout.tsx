import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Abdul Kumshey - CEO & Founder of Ailoo | Transportation Technology Leader',
  description: 'Abdul Kumshey is the CEO and Founder of Ailoo, a revolutionary multi-service transportation platform. Learn about his vision, achievements, and leadership in transforming transportation across the Middle East.',
  keywords: [
    'Abdul Kumshey',
    'Kumshey',
    'CEO Ailoo',
    'Founder Ailoo',
    'Transportation Technology',
    'Saudi Arabia',
    'Riyadh',
    'Entrepreneur',
    'Tech Leader',
    'Multi-service Platform',
    'Ride-hailing',
    'Transportation Innovation'
  ],
  authors: [{ name: 'Abdul Kumshey' }],
  creator: 'Abdul Kumshey',
  publisher: 'Ailoo',
  openGraph: {
    title: 'Abdul Kumshey - CEO & Founder of Ailoo',
    description: 'Visionary leader and entrepreneur revolutionizing transportation across the Middle East. CEO and Founder of Ailoo.',
    url: 'https://ailoo.co/abdul-kumshey',
    siteName: 'Ailoo',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face',
        width: 1200,
        height: 630,
        alt: 'Abdul Kumshey - CEO of Ailoo',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Kumshey - CEO & Founder of Ailoo',
    description: 'Visionary leader and entrepreneur revolutionizing transportation across the Middle East.',
    images: ['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=630&fit=crop&crop=face'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://ailoo.co/abdul-kumshey',
  },
}

export default function AbdulKumsheyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
