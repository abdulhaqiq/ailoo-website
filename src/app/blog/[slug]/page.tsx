'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/sections/header'
import Footer from '@/components/sections/footer'
import BlogCard from '@/components/blog/blog-card'
import { 
  Calendar, 
  Clock, 
  Eye, 
  User, 
  ArrowLeft, 
  Share2, 
  Bookmark,
  Tag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'
import { blogPosts, recentPosts } from '@/constants/blog-data'
import { BlogPost } from '@/types'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find(p => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex(p => p.slug === params.slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (err) {
        console.log('Error sharing:', err)
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(window.location.href)
      // You could show a toast notification here
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Back Button */}
      <section className="pt-20 pb-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#DFFF50] hover:text-[#DFFF50]/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: post.category.color + '20',
                  color: post.category.color 
                }}
              >
                {post.category.name}
              </div>
              {post.isFeatured && (
                <div className="px-4 py-2 bg-[#DFFF50] text-black rounded-full text-sm font-medium">
                  Featured
                </div>
              )}
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{post.readTime} min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>{post.views.toLocaleString()} views</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleShare}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <Bookmark className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <div className="w-full h-64 lg:h-96 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DFFF50]/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#DFFF50] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl font-bold text-black">
                        {post.title.charAt(0)}
                      </span>
                    </div>
                    <p className="text-lg text-gray-400">Featured Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </div>
      </section>

      {/* Tags */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Tag className="w-5 h-5 text-[#DFFF50]" />
              <span className="text-lg font-semibold text-white">Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?tag=${tag}`}
                  className="px-3 py-1 bg-gray-800 hover:bg-[#DFFF50] hover:text-black text-gray-300 rounded-full text-sm transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-[#DFFF50] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-black">
                    {post.author.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {post.author.name}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      {(prevPost || nextPost) && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <ChevronLeft className="w-5 h-5 text-[#DFFF50] group-hover:-translate-x-1 transition-transform" />
                      <span className="text-sm text-[#DFFF50] font-medium">Previous Post</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#DFFF50] transition-colors line-clamp-2">
                      {prevPost.title}
                    </h3>
                  </Link>
                )}

                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-colors md:text-right"
                  >
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <span className="text-sm text-[#DFFF50] font-medium">Next Post</span>
                      <ChevronRight className="w-5 h-5 text-[#DFFF50] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#DFFF50] transition-colors line-clamp-2">
                      {nextPost.title}
                    </h3>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Posts */}
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8">Related Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts
                .filter(p => p.id !== post.id)
                .slice(0, 3)
                .map((relatedPost) => (
                  <BlogCard
                    key={relatedPost.id}
                    post={relatedPost}
                    viewMode="grid"
                  />
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
