'use client'

import { useState } from 'react'
import { ChevronDown, X } from 'lucide-react'
import { BlogCategory, BlogSearchFilters } from '@/types'

interface BlogFiltersProps {
  categories: BlogCategory[]
  filters: BlogSearchFilters
  onFilterChange: (filters: Partial<BlogSearchFilters>) => void
  onClearFilters: () => void
}

export default function BlogFilters({
  categories,
  filters,
  onFilterChange,
  onClearFilters
}: BlogFiltersProps) {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'title', label: 'Title A-Z' }
  ]

  const selectedCategory = categories.find(cat => cat.slug === filters.category)
  const selectedSort = sortOptions.find(opt => opt.value === filters.sortBy)

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Filter Posts</h3>
        <button
          onClick={onClearFilters}
          className="text-[#DFFF50] hover:text-[#DFFF50]/80 transition-colors text-sm"
        >
          Clear all
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Category Filter */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Category
          </label>
          <div className="relative">
            <button
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white hover:bg-gray-600 transition-colors"
            >
              <span className={selectedCategory ? 'text-white' : 'text-gray-400'}>
                {selectedCategory ? selectedCategory.name : 'All Categories'}
              </span>
              <ChevronDown className={`w-4 h-4 transition-transform ${
                isCategoryOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {isCategoryOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10">
                <button
                  onClick={() => {
                    onFilterChange({ category: '' })
                    setIsCategoryOpen(false)
                  }}
                  className={`w-full text-left px-4 py-3 hover:bg-gray-600 transition-colors ${
                    !filters.category ? 'bg-gray-600 text-[#DFFF50]' : 'text-white'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      onFilterChange({ category: category.slug })
                      setIsCategoryOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-600 transition-colors flex items-center gap-3 ${
                      filters.category === category.slug ? 'bg-gray-600 text-[#DFFF50]' : 'text-white'
                    }`}
                  >
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    {category.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Sort Filter */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Sort By
          </label>
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white hover:bg-gray-600 transition-colors"
            >
              <span>{selectedSort?.label}</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${
                isSortOpen ? 'rotate-180' : ''
              }`} />
            </button>

            {isSortOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-lg shadow-lg z-10">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      onFilterChange({ sortBy: option.value as any })
                      setIsSortOpen(false)
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-600 transition-colors ${
                      filters.sortBy === option.value ? 'bg-gray-600 text-[#DFFF50]' : 'text-white'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tag Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tag
          </label>
          <input
            type="text"
            value={filters.tag}
            onChange={(e) => onFilterChange({ tag: e.target.value })}
            placeholder="Search by tag..."
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#DFFF50] focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Active Filters */}
      {(filters.category || filters.tag) && (
        <div className="mt-6 pt-6 border-t border-gray-700">
          <div className="flex flex-wrap gap-2">
            {filters.category && (
              <div className="flex items-center gap-2 bg-[#DFFF50] text-black px-3 py-1 rounded-full text-sm">
                <span>Category: {selectedCategory?.name}</span>
                <button
                  onClick={() => onFilterChange({ category: '' })}
                  className="hover:bg-black/10 rounded-full p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            {filters.tag && (
              <div className="flex items-center gap-2 bg-[#DFFF50] text-black px-3 py-1 rounded-full text-sm">
                <span>Tag: {filters.tag}</span>
                <button
                  onClick={() => onFilterChange({ tag: '' })}
                  className="hover:bg-black/10 rounded-full p-1"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
