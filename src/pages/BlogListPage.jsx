import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import { generateSEOMetadata } from '@/utils/seoMetadata';
import { getAllBlogPosts } from '@/data/blogPosts';

const BlogListPage = () => {
  const blogPosts = getAllBlogPosts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const seoData = generateSEOMetadata({
    pageType: 'blog-list',
    title: 'Blog - Growth and Giggles',
    description: 'Expert insights on content marketing, growth strategy, community building, and digital transformation. Read the latest articles from Growth and Giggles team.',
    path: '/blog/',
    keywords: ['content marketing blog', 'growth strategy articles', 'digital marketing insights', 'thought leadership']
  });

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog/' }
  ];

  return (
    <StaticPageWrapper {...seoData}>
      <div className="pt-24 min-h-screen bg-black">
        <section className="py-12 lg:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb items={breadcrumbItems} />
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto pt-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                The Growth and Giggles <span className="text-yellow-400">Blog</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Expert insights, proven strategies, and actionable tactics to help you grow your brand, engage your audience, and drive real results.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-yellow-400/10 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-yellow-400" />
                          </div>
                          <span className="text-sm text-gray-400">{post.author}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-yellow-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </StaticPageWrapper>
  );
};

export default BlogListPage;