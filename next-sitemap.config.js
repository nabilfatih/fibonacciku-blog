/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // YOUR CONFIG
  siteUrl: "https://blog.fibonacciku.com",
  generateIndexSitemap: true,
  generateRobotsTxt: true,
  changefreq: "daily",
  priority: 1.0,
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  // Default robots.txt options
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
