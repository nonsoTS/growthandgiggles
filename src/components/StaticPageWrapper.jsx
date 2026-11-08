import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * StaticPageWrapper Component
 * Wraps pages and injects SEO metadata into document head
 * Ensures all metadata is rendered in initial HTML for SEO and social sharing
 */
const StaticPageWrapper = ({ 
  children,
  title,
  description,
  canonical,
  image,
  openGraph = {},
  twitter = {},
  schemas = [],
  keywords,
  noindex = false,
  nofollow = false
}) => {
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow'
  ].join(', ');

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content={robotsContent} />
        
        {/* Canonical URL */}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={openGraph['og:type'] || 'website'} />
        <meta property="og:url" content={openGraph['og:url'] || canonical} />
        <meta property="og:title" content={openGraph['og:title'] || title} />
        <meta property="og:description" content={openGraph['og:description'] || description} />
        <meta property="og:image" content={openGraph['og:image'] || image} />
        <meta property="og:site_name" content={openGraph['og:site_name'] || 'Growth and Giggles'} />
        <meta property="og:locale" content={openGraph['og:locale'] || 'en_US'} />
        
        {openGraph['article:published_time'] && (
          <meta property="article:published_time" content={openGraph['article:published_time']} />
        )}
        {openGraph['article:modified_time'] && (
          <meta property="article:modified_time" content={openGraph['article:modified_time']} />
        )}
        {openGraph['article:author'] && (
          <meta property="article:author" content={openGraph['article:author']} />
        )}

        {/* Twitter */}
        <meta property="twitter:card" content={twitter['twitter:card'] || 'summary_large_image'} />
        <meta property="twitter:url" content={twitter['twitter:url'] || canonical} />
        <meta property="twitter:title" content={twitter['twitter:title'] || title} />
        <meta property="twitter:description" content={twitter['twitter:description'] || description} />
        <meta property="twitter:image" content={twitter['twitter:image'] || image} />
        {twitter['twitter:site'] && (
          <meta property="twitter:site" content={twitter['twitter:site']} />
        )}

        {/* Structured Data / JSON-LD */}
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}

        {/* Additional SEO enhancements */}
        <meta name="author" content="Growth and Giggles" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Mobile optimization */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </Helmet>
      {children}
    </>
  );
};

export default StaticPageWrapper;