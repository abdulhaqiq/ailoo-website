'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'

interface BlogSearchProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function BlogSearch({ 
  value, 
  onChange, 
  placeholder = "Search blog posts..." 
}: BlogSearchProps) {
  const [isFocused, setIsFocused] = useState(false)

  const handleClear = () => {
    onChange('')
  }

  return (
    <div className="relative">
      <div className={`relative transition-all duration-200 ${
        isFocused ? 'scale-105' : ''
      }`}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DFFF50] focus:border-transparent transition-all duration-200"
        />
        
        {value && (
          <button
            onClick={handleClear}
            className="absolute inset-y-0 right-0 pr-3 flex items-center hover:bg-gray-700 rounded-r-lg transition-colors"
          >
            <X className="h-4 w-4 text-gray-400 hover:text-white" />
          </button>
        )}
      </div>
    </div>
  )
}
