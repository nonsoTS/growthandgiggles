/**
 * SEO Metadata Utility Module for Growth and Giggles
 * Provides functions to generate SEO tags, Open Graph metadata, and structured data
 */

const SITE_URL = 'https://growthandgiggles.com';
const SITE_NAME = 'Growth and Giggles';
const DEFAULT_IMAGE = 'https://growthandgiggles.com/og-image.jpg';
const TWITTER_HANDLE = '@growthandgiggles';

/**
 * Generate page title with site name
 */
export const generateTitle = (pageTitle, includeSiteName = true) => {
  if (!pageTitle) return SITE_NAME;
  return includeSiteName ? `${pageTitle} | ${SITE_NAME}` : pageTitle;
};

/**
 * Generate meta description with character limit
 */
export const generateDescription = (description, maxLength = 160) => {
  if (!description) return '';
  return description.length > maxLength 
    ? `${description.substring(0, maxLength - 3)}...` 
    : description;
};

/**
 * Generate canonical URL
 */
export const generateCanonicalUrl = (path) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${cleanPath}`;
};

/**
 * Generate Open Graph metadata
 */
export const generateOpenGraphTags = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author
}) => {
  const tags = {
    'og:site_name': SITE_NAME,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'og:type': type,
    'og:locale': 'en_US'
  };

  if (publishedTime) tags['article:published_time'] = publishedTime;
  if (modifiedTime) tags['article:modified_time'] = modifiedTime;
  if (author) tags['article:author'] = author;

  return tags;
};

/**
 * Generate Twitter Card metadata
 */
export const generateTwitterTags = ({
  title,
  description,
  image = DEFAULT_IMAGE,
  cardType = 'summary_large_image'
}) => {
  return {
    'twitter:card': cardType,
    'twitter:site': TWITTER_HANDLE,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image
  };
};

/**
 * Generate Organization structured data schema
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Professional content management and marketing agency specializing in thought leadership, growth strategy, creative media, and community building.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'CA',
      addressCountry: 'US'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'Customer Service',
      email: 'hello@growthandgiggles.com'
    },
    sameAs: [
      'https://www.facebook.com/growthandgiggles',
      'https://twitter.com/growthandgiggles',
      'https://www.linkedin.com/company/growthandgiggles',
      'https://www.instagram.com/growthandgiggles'
    ]
  };
};

/**
 * Generate Service structured data schema
 */
export const generateServiceSchema = ({
  name,
  description,
  url,
  serviceType,
  provider = SITE_NAME
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    serviceType,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: SITE_URL
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States'
    }
  };
};

/**
 * Generate BlogPosting structured data schema
 */
export const generateBlogPostingSchema = ({
  title,
  description,
  url,
  image,
  author,
  publishedDate,
  modifiedDate,
  keywords = []
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url,
    datePublished: publishedDate,
    dateModified: modifiedDate || publishedDate,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`
      }
    },
    keywords: keywords.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    }
  };
};

/**
 * Generate BreadcrumbList structured data schema
 */
export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

/**
 * Generate WebSite structured data schema
 */
export const generateWebSiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Transform your brand with Growth and Giggles - expert content marketing, growth strategy, and community building services.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
};

/**
 * Dynamic schema generator based on page type
 */
export const generateSchemaByPageType = (pageType, data) => {
  const schemas = [];

  switch (pageType) {
    case 'homepage':
      schemas.push(generateOrganizationSchema());
      schemas.push(generateWebSiteSchema());
      break;

    case 'service':
      schemas.push(generateServiceSchema(data));
      schemas.push(generateOrganizationSchema());
      break;

    case 'blog-post':
      schemas.push(generateBlogPostingSchema(data));
      if (data.breadcrumbs) {
        schemas.push(generateBreadcrumbSchema(data.breadcrumbs));
      }
      break;

    case 'blog-list':
      schemas.push(generateOrganizationSchema());
      break;

    case 'about':
      schemas.push(generateOrganizationSchema());
      break;

    default:
      schemas.push(generateOrganizationSchema());
  }

  return schemas;
};

/**
 * Complete SEO metadata generator
 */
export const generateSEOMetadata = ({
  pageType,
  title,
  description,
  path,
  image,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
  schemaData = {}
}) => {
  const fullTitle = generateTitle(title);
  const fullDescription = generateDescription(description);
  const canonicalUrl = generateCanonicalUrl(path);
  const schemas = generateSchemaByPageType(pageType, schemaData);

  return {
    title: fullTitle,
    description: fullDescription,
    canonical: canonicalUrl,
    openGraph: generateOpenGraphTags({
      title: fullTitle,
      description: fullDescription,
      image,
      url: canonicalUrl,
      type: ogType,
      publishedTime,
      modifiedTime,
      author
    }),
    twitter: generateTwitterTags({
      title: fullTitle,
      description: fullDescription,
      image
    }),
    schemas,
    keywords: keywords.join(', ')
  };
};