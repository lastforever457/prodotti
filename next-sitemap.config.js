// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://prodotti.uz', // ← o'zingizning domeningiz
  generateRobotsTxt: true, // robots.txt faylini ham generatsiya qiladi
  generateIndexSitemap: true, // agar ko‘p sitemaplar bo‘lsa, indeks yaratadi
  sitemapSize: 5000, // bitta sitemapda maksimal
  i18n: {
    locales: ['eng', 'uzb', 'rus'], // o'zingizning tillar
    defaultLocale: 'rus',
  },
}
