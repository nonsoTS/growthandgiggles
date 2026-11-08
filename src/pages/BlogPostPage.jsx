import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import StaticPageWrapper from '@/components/StaticPageWrapper';
import Breadcrumb from '@/components/Breadcrumb';
import { generateSEOMetadata } from '@/utils/seoMetadata';
import { getBlogPostBySlug } from '@/data/blogPosts';

const BlogPostPage = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/blog/">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Blog', path: '/blog/' },
    { label: post.title, path: `/blog/${post.slug}/` }
  ];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "The article link has been copied to your clipboard."
      });
    }
  };

  const seoData = generateSEOMetadata({
    pageType: 'blog-post',
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}/`,
    image: post.image,
    ogType: 'article',
    publishedTime: post.publishedDate,
    modifiedTime: post.modifiedDate,
    author: post.author,
    keywords: post.keywords,
    schemaData: {
      title: post.title,
      description: post.description,
      url: `https://growthandgiggles.io/blog/${post.slug}/`,
      image: post.image,
      author: post.author,
      publishedDate: post.publishedDate,
      modifiedDate: post.modifiedDate,
      keywords: post.keywords
    }
  });

  return (
    <StaticPageWrapper {...seoData}>
      <article className="pt-24 min-h-screen bg-black">
        <section className="py-12 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 max-w-4xl">
            <Breadcrumb items={breadcrumbItems} />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6"
            >
              <div className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {post.category}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {post.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-yellow-400/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium">{post.author}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.publishedDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleShare}
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black mb-8"
              >
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
            </motion.div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <img src={post.image} alt={post.title} className="w-full rounded-2xl shadow-2xl border border-gray-800" />
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <ReactMarkdown
              className={`
                prose prose-invert prose-lg max-w-none

                prose-headings:font-bold
                prose-h1:text-4xl prose-h1:mb-6
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-yellow-400
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-white

                prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6

                prose-a:text-yellow-400 hover:prose-a:underline

                prose-strong:text-white
                prose-ul:my-6 prose-li:mb-2

                prose-blockquote:border-l-4 prose-blockquote:border-yellow-400
                prose-blockquote:pl-4 prose-blockquote:text-gray-400

                prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
              `}
              components={{
                a: ({ node, ...props }) => {
                  const { href, children } = props;
                  if (href && href.startsWith('/')) {
                    return <Link to={href} {...props}>{children}</Link>;
                  }
                  return <a target="_blank" rel="noopener noreferrer" {...props}>{children}</a>;
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </section>
      </article>
    </StaticPageWrapper>
  );
};

export default BlogPostPage;