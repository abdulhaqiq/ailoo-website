'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Plane, User } from 'lucide-react'
import { navigationItems } from '@/constants/data'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 w-full transition-colors duration-300 ${
      isScrolled ? 'bg-black' : 'bg-transparent'
    }`}>
      {/* Content */}
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
        isScrolled ? 'pt-0' : 'pt-4'
      }`}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo-new-dark.svg" 
                alt="Ailoo" 
                className="h-8 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                {item.label}
                {item.id === 'flight' && (
                  <Plane className="w-4 h-4 rotate-45" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="icon" className="w-10 h-10 bg-white border-white hover:bg-gray-100">
              <User className="h-4 w-4 text-black" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  {item.id === 'flight' && (
                    <Plane className="w-4 h-4 rotate-45" />
                  )}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full justify-start">
                  Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
