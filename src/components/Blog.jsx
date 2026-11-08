import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();

  const handleReadArticle = () => {
    toast({
      title: "🚧 Blog post coming soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  const blogPosts = [
    {
      title: '10 Content Marketing Strategies That Actually Work in 2025',
      excerpt: 'Discover the proven tactics that drive real engagement and conversions in today\'s competitive digital landscape.',
      author: 'Sarah Johnson',
      date: 'Dec 1, 2025',
      readTime: '8 min read',
      category: 'Content Strategy',
      image: 'Content marketing strategy planning session with digital tools'
    },
    {
      title: 'Building Engaged Communities: A Complete Guide',
      excerpt: 'Learn how to create, nurture, and scale communities that become powerful brand advocates and revenue drivers.',
      author: 'Mike Chen',
      date: 'Nov 28, 2025',
      readTime: '12 min read',
      category: 'Community Building',
      image: 'Engaged online community members interacting and collaborating'
    },
    {
      title: 'The ROI of Thought Leadership: Data-Backed Insights',
      excerpt: 'Explore how thought leadership content directly impacts your bottom line with real case studies and metrics.',
      author: 'Emily Rodriguez',
      date: 'Nov 25, 2025',
      readTime: '10 min read',
      category: 'Thought Leadership',
      image: 'Business leader presenting insights at professional conference'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">Latest Insights</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            From Our <span className="text-yellow-400">Blog</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Expert insights, industry trends, and actionable strategies to help you grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all group cursor-pointer"
              onClick={handleReadArticle}
            >
              <div className="relative h-48 overflow-hidden">
                <img alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
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
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={handleReadArticle}
            variant="outline"
            className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black font-semibold px-8"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;