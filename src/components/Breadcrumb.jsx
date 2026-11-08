import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://growthandgiggles.io${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <nav aria-label="Breadcrumb" className="mb-6 pt-6">
        <motion.ol 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center gap-2 text-sm text-gray-400"
        >
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link 
                    to={item.path} 
                    className="flex items-center hover:text-yellow-400 transition-colors"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    <span className="hidden sm:inline">{item.label}</span>
                  </Link>
                ) : (
                  <Link 
                    to={item.path}
                    className={`hover:text-yellow-400 transition-colors ${
                      isLast ? 'text-gray-200 font-semibold pointer-events-none' : ''
                    }`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                )}
                {!isLast && <ChevronRight className="w-4 h-4 text-gray-600" />}
              </li>
            );
          })}
        </motion.ol>
      </nav>
    </>
  );
};

export default Breadcrumb;