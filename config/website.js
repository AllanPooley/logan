module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Frankly Steve - Wedding Photography', // Navigation and Site Title
  titleAlt: 'Frankly Steve', // Title for JSONLD
  description: 'Photography of friends and family having a good old time at your special occasion.',
  headline: 'Photography of friends and family having a good old time', // Headline for schema.org JSONLD
  url: 'https://www.franklysteve.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/logo-1024.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Frankly Steve', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Little & Big', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@franklysteve', // Twitter Username
  facebook: 'franklysteve', // Facebook Site Name

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature

  // Slugs
  blogSlug: 'stories',
  categorySlug: 'category',
};
