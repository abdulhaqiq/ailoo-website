# Ailoo - Transportation Platform Website

A modern, dark-mode transportation platform website built with Next.js 15, TypeScript, and Tailwind CSS. This project showcases Ailoo's comprehensive transportation services including ride-hailing, flight booking, and subscription plans with a professional, user-friendly design.

## 🚀 Features

- **Dark Mode Design**: Beautiful dark theme with teal and slate color palette
- **Responsive Layout**: Mobile-first design that works on all devices
- **Modern UI Components**: Built with Radix UI primitives and custom components
- **TypeScript**: Full type safety throughout the application
- **Transportation Services**: Comprehensive ride-hailing, flight booking, and subscription services
- **Performance Optimized**: Built with Next.js 15 and optimized for speed

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: Radix UI + Custom components
- **Icons**: Lucide React
- **Utilities**: Class Variance Authority, clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with dark mode
│   └── page.tsx           # Home page
├── components/
│   ├── sections/          # Page sections
│   │   ├── header.tsx     # Navigation header
│   │   ├── hero.tsx       # Hero section
│   │   ├── features.tsx   # Features section
│   │   ├── statistics.tsx # Statistics section
│   │   ├── reserve-account.tsx # Reserve account section
│   │   ├── company-stats.tsx  # Company statistics
│   │   ├── pricing.tsx    # Pricing plans
│   │   ├── cta.tsx        # Call-to-action section
│   │   └── footer.tsx     # Footer
│   └── ui/                # Reusable UI components
│       ├── button.tsx     # Button component
│       ├── input.tsx      # Input component
│       └── card.tsx       # Card component
├── constants/
│   └── data.ts            # Static data and content
├── lib/
│   └── utils.ts           # Utility functions
├── types/
│   └── index.ts           # TypeScript type definitions
└── hooks/                  # Custom React hooks (empty)
```

## 🎨 Design System

### Colors
- **Primary**: Teal (#14b8a6)
- **Background**: Dark slate (#0f172a)
- **Text**: Light slate (#f8fafc)
- **Accent**: Teal variants for highlights

### Typography
- **Font**: System fonts (SF Pro, Segoe UI, etc.)
- **Headings**: Bold, large sizes for impact
- **Body**: Clean, readable text with proper contrast

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Key Sections

1. **Header**: Navigation with mobile menu
2. **Hero**: Main value proposition with transportation services
3. **Features**: Core transportation services (Ride, Flight, Subscription, Corporate, Driver)
4. **Statistics**: Key metrics and user statistics
5. **Ailoo Experience**: Premium services and corporate solutions
6. **Company Stats**: Business achievements and growth metrics
7. **Pricing**: Subscription plans for different user needs
8. **News**: Latest updates and transportation insights
9. **Driver CTA**: Driver recruitment section
10. **Footer**: Links and company information

## 🔧 Customization

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Follow the existing naming conventions

### Modifying Content
- Update data in `src/constants/data.ts`
- Modify component props and styling as needed

### Styling Changes
- Update Tailwind classes in components
- Modify CSS variables in `src/app/globals.css`
- Adjust theme colors in `tailwind.config.ts`

## 📦 Dependencies

### Core
- `next`: 15.x
- `react`: 18.x
- `typescript`: 5.x

### Styling
- `tailwindcss`: 3.x
- `@tailwindcss/postcss`: 0.x

### UI & Icons
- `lucide-react`: 0.x
- `@radix-ui/react-slot`: 1.x

### Utilities
- `class-variance-authority`: 0.x
- `clsx`: 2.x
- `tailwind-merge`: 2.x

## 🚀 Deployment

This project is ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

## 📄 License

This project is for demonstration purposes. Please ensure you have proper licensing for any commercial use.

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS# ailooco
# Force deployment
# Force deployment 2
