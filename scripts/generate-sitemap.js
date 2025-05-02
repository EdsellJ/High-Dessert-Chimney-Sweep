const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const SITE_URL = 'https://hdcs.services';
const LASTMOD_DATE = '2025-05-01';

// Add pages that should be excluded from the sitemap
const EXCLUDED_PATHS = [
  '/_app.tsx',
  '/_document.tsx',
  '/api/',
  '/404.tsx',
  '/500.tsx',
  '/layout.tsx',
  '/components/',
  '/libs/',
  '/public/',
  '/styles/',
];

// Recursively get all .tsx files that represent pages
function getPages(directory, basePath = '') {
  const pages = [];

  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const relativePath = path.join(basePath, file);
    const stats = fs.statSync(filePath);
    
    if (
      stats.isDirectory() && 
      !EXCLUDED_PATHS.some(excludedPath => relativePath.startsWith(excludedPath))
    ) {
      // Recursively scan directories
      pages.push(...getPages(filePath, relativePath));
    } 
    else if (
      stats.isFile() && 
      (file === 'page.tsx' || file === 'page.jsx') &&
      !EXCLUDED_PATHS.some(excludedPath => relativePath.startsWith(excludedPath))
    ) {
      // For app router, use the directory structure
      let pagePath = basePath.replace(/\/page$/, '');
      
      // Convert index routes to root
      if (pagePath === 'index' || pagePath === '') {
        pagePath = '/';
      }
      
      pages.push(pagePath);
    }
  }
  
  return pages;
}

function generateSitemapXml(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(page => {
      // Determine priority (you can customize this)
      let priority = 0.7;
      let changeFreq = 'monthly';
      
      if (page === '/') {
        priority = 1.0;
        changeFreq = 'weekly';
      } else if (page === '/services') {
        priority = 0.9;
        changeFreq = 'monthly';
      } else if (page === '/about') {
        priority = 0.8;
        changeFreq = 'yearly';
      } else if (page === '/contact') {
        priority = 0.7;
        changeFreq = 'yearly';
      } else if (page === '/service-area') {
        priority = 0.7;
        changeFreq = 'yearly';
      }
      
      return `
  <url>
    <loc>${SITE_URL}${page === '/' ? '' : '/'}${page}</loc>
    <lastmod>${LASTMOD_DATE}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>`;
}

async function main() {
  try {
    // App directory for Next.js app router
    const APP_DIR = path.join(process.cwd(), 'app');
    
    // Get all pages
    const pages = getPages(APP_DIR);
    
    // Format pages for sitemap
    const formattedPages = pages.map(page => {
      // Strip file extension and normalize path
      let formattedPage = page.replace(/\\/g, '/');
      
      // Remove trailing slash unless it's the root
      if (formattedPage !== '/' && formattedPage.endsWith('/')) {
        formattedPage = formattedPage.slice(0, -1);
      }
      
      return formattedPage;
    });
    
    // Generate the sitemap XML without using prettier
    const sitemap = generateSitemapXml(formattedPages);
    
    // Write the sitemap to public directory
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
    
    console.log('✅ Sitemap generated successfully!');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

main(); 