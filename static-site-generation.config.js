/**
 * Static Site Generation Configuration
 * Defines pre-renderable routes, caching strategies, and metadata for edge deployment
 */

export const staticSiteConfig = {
  // Base URL for the site
  siteUrl: 'https://growthandgiggles.io',

  // Routes that should be pre-rendered for static site generation
  routes: [
    // Homepage
    {
      path: '/',
      priority: 1.0,
      changefreq: 'weekly',
      cacheControl: 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400'
    },

    // About page
    {
      path: '/about',
      priority: 0.9,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=7200, s-maxage=14400, stale-while-revalidate=86400'
    },

    // Service pages
    {
      path: '/services/content-marketing',
      priority: 0.8,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=7200, s-maxage=14400, stale-while-revalidate=86400'
    },
    {
      path: '/services/content-thought-leadership',
      priority: 0.8,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=7200, s-maxage=14400, stale-while-revalidate=86400'
    },
    {
      path: '/services/growth-marketing',
      priority: 0.8,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=7200, s-maxage=14400, stale-while-revalidate=86400'
    },
    {
      path: '/services/creative-media',
      priority: 0.8,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=7200, s-maxage=14400, stale-while-revalidate=86400'
    },
    {
      path: '/services/community-building',
      priority: 0.8,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=7200, s-maxage=14400, stale-while-revalidate=86400'
    },
    {
      path: '/services/careers-and-employers-branding',
      priority: 0.8,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=7200, s-maxage=14400, stale-while-revalidate=86400'
    },

    // Blog list page
    {
      path: '/blog',
      priority: 0.9,
      changefreq: 'weekly',
      cacheControl: 'public, max-age=1800, s-maxage=3600, stale-while-revalidate=86400'
    },

    // Individual blog posts (from blogPosts data)
    {
      path: '/blog/seo-content-writing-guide-startups',
      priority: 0.7,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=14400, s-maxage=28800, stale-while-revalidate=604800'
    },
    {
      path: '/blog/b2b-content-marketing-strategy-guide',
      priority: 0.7,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=14400, s-maxage=28800, stale-while-revalidate=604800'
    },
    {
      path: '/blog/ultimate-guide-content-marketing-nigeria',
      priority: 0.7,
      changefreq: 'monthly',
      cacheControl: 'public, max-age=14400, s-maxage=28800, stale-while-revalidate=604800'
    }
  ],

  // Cloudflare-specific cache directives
  cloudflareCache: {
    // Browser cache TTL (in seconds)
    browserTTL: 3600, // 1 hour

    // Edge cache TTL (in seconds)
    edgeTTL: 7200, // 2 hours

    // Cache everything (including HTML)
    cacheEverything: true,

    // Custom cache key
    cacheKey: {
      includeHost: true,
      includeQueryString: false
    },

    // Cache level
    cacheLevel: 'aggressive',

    // Bypass cache on cookie
    bypassCacheOnCookie: ['session', 'auth_token']
  },

  // Headers for SEO and performance
  headers: {
    // Security headers
    'X-Frame-Options': 'SAMEORIGIN',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    
    // Performance headers
    'Content-Security-Policy': "default-src 'self' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:; style-src 'self' 'unsafe-inline' https:; img-src 'self' data: https:; font-src 'self' https: data:;",
    
    // Cache control (default)
    'Cache-Control': 'public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400'
  },

  // Sitemap generation settings
  sitemap: {
    enabled: true,
    filename: 'sitemap.xml',
    excludePaths: ['/404', '/500']
  },

  // Robots.txt settings
  robots: {
    enabled: true,
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/api']
      }
    ],
    sitemap: 'https://growthandgiggles.io/sitemap.xml'
  },

  // Build configuration
  build: {
    // Generate static HTML files
    generateStaticHTML: true,
    
    // Inline critical CSS
    inlineCriticalCSS: true,
    
    // Minify HTML
    minifyHTML: true,
    
    // Preload fonts and critical assets
    preloadAssets: [
      '/fonts/inter-var.woff2',
      '/logo.png'
    ]
  }
};

export default staticSiteConfig;