'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, Eye, User } from 'lucide-react'
import { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
  viewMode: 'grid' | 'list'
}

export default function BlogCard({ post, viewMode }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  if (viewMode === 'list') {
    return (
      <article className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="md:w-1/3 h-48 md:h-auto">
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#DFFF50]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-black">
                      {post.title.charAt(0)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400">Featured Image</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: post.category.color + '20',
                  color: post.category.color 
                }}
              >
                {post.category.name}
              </div>
              {post.isFeatured && (
                <div className="px-3 py-1 bg-[#DFFF50] text-black rounded-full text-xs font-medium">
                  Featured
                </div>
              )}
            </div>

            <h2 className="text-xl font-bold text-white mb-3 hover:text-[#DFFF50] transition-colors">
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>

            <p className="text-gray-300 mb-4 line-clamp-2">
              {post.excerpt}
            </p>

            <div className="flex items-center gap-6 text-sm text-gray-400 mb-4">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                <span>{post.views.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="px-2 py-1 bg-gray-800 text-gray-400 rounded text-xs">
                  +{post.tags.length - 3} more
                </span>
              )}
            </div>

            <Link
              href={`/blog/${post.slug}`}
              className="inline-flex items-center text-[#DFFF50] hover:text-[#DFFF50]/80 font-medium transition-colors"
            >
              Read more →
            </Link>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="bg-gray-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      {/* Image */}
      <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFFF50]/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-black">
                {post.title.charAt(0)}
              </span>
            </div>
            <p className="text-sm text-gray-400">Featured Image</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: post.category.color + '20',
              color: post.category.color 
            }}
          >
            {post.category.name}
          </div>
          {post.isFeatured && (
            <div className="px-3 py-1 bg-[#DFFF50] text-black rounded-full text-xs font-medium">
              Featured
            </div>
          )}
        </div>

        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#DFFF50] transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h2>

        <p className="text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              <span>{post.views.toLocaleString()}</span>
            </div>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="text-[#DFFF50] hover:text-[#DFFF50]/80 font-medium transition-colors"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  )
}
