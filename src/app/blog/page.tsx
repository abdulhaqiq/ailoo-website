import type { Metadata } from "next";
import { pageMetadata } from "@/constants/metadata";

export const metadata: Metadata = pageMetadata.blog;

'use client'

import { useState, useMemo } from 'react'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import BlogSearch from '@/components/blog/blog-search'
import BlogFilters from '@/components/blog/blog-filters'
import BlogCard from '@/components/blog/blog-card'
import { Search, Filter, Grid, List } from 'lucide-react'
import { blogPosts, blogCategories } from '@/constants/blog-data'
import { BlogSearchFilters } from '@/types'

export default function BlogPage() {
  const [filters, setFilters] = useState<BlogSearchFilters>({
    search: '',
    category: '',
    tag: '',
    sortBy: 'newest'
  })
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)

  const filteredPosts = useMemo(() => {
    let filtered = [...blogPosts]

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(post => post.category.slug === filters.category)
    }

    // Tag filter
    if (filters.tag) {
      filtered = filtered.filter(post => 
        post.tags.some(tag => tag.toLowerCase().includes(filters.tag.toLowerCase()))
      )
    }

    // Sort
    switch (filters.sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
        break
      case 'oldest':
        filtered.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime())
        break
      case 'popular':
        filtered.sort((a, b) => b.views - a.views)
        break
      case 'title':
        filtered.sort((a, b) => a.title.localeCompare(b.title))
        break
    }

    return filtered
  }, [filters])

  const handleFilterChange = (newFilters: Partial<BlogSearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }

  const clearFilters = () => {
    setFilters({
      search: '',
      category: '',
      tag: '',
      sortBy: 'newest'
    })
  }

  const hasActiveFilters = filters.search || filters.category || filters.tag

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Ailoo
              <span className="block text-[#DFFF50]">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Stay updated with the latest news, insights, and tips about transportation, 
              technology, and urban mobility from the Ailoo team.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
              {/* Search */}
              <div className="flex-1 max-w-md">
                <BlogSearch
                  value={filters.search}
                  onChange={(search) => handleFilterChange({ search })}
                />
              </div>

              {/* View Controls */}
              <div className="flex items-center gap-4">
                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    showFilters 
                      ? 'bg-[#DFFF50] text-black' 
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  <Filter className="w-4 h-4" />
                  Filters
                  {hasActiveFilters && (
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  )}
                </button>

                {/* View Mode Toggle */}
                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-[#DFFF50] text-black' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-[#DFFF50] text-black' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Filters Panel */}
            {showFilters && (
              <div className="mt-6">
                <BlogFilters
                  categories={blogCategories}
                  filters={filters}
                  onFilterChange={handleFilterChange}
                  onClearFilters={clearFilters}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Results Header */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {hasActiveFilters ? 'Search Results' : 'All Posts'}
                </h2>
                <p className="text-gray-400">
                  {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-[#DFFF50] hover:text-[#DFFF50]/80 transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length > 0 ? (
              <div className={`grid gap-8 ${
                viewMode === 'grid' 
                  ? 'md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {filteredPosts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                    viewMode={viewMode}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No posts found</h3>
                <p className="text-gray-400 mb-6">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
                <button
                  onClick={clearFilters}
                  className="bg-[#DFFF50] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#DFFF50]/90 transition-colors"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
