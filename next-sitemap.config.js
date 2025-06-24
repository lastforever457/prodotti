/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://prodotti.uz'

module.exports = {
  siteUrl,
  generateRobotsTxt: true, // (optional)
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  alternateRefs: [
    {
      href: `${siteUrl}/eng`,
      hreflang: 'eng',
    },
    {
      href: `${siteUrl}/uzb`,
      hreflang: 'uzb',
    },
    {
      href: `${siteUrl}/rus`,
      hreflang: 'rus',
    },
  ],
  i18n: {
    locales: ['eng', 'uzb', 'rus'],
    defaultLocale: 'eng',
  },
}
