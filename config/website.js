module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Little & Big - Websites With Character', // Navigation and Site Title
  titleAlt: 'Little & Big', // Title for JSONLD
  description: 'Design and Development Studio based in Sydney Australia. We build Websites, Apps, E-commerce with character',
  headline: 'Websites with Character', // Headline for schema.org JSONLD
  url: 'https://www.littleandbig.com.au', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Little & Big', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Little & Big', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@littleplusbig', // Twitter Username
  facebook: 'littleandbig', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature

  // Slugs
  blogSlug: 'blog',
  categorySlug: 'category',
};
