/** @type {import('next-i18next').UserConfig} */

module.exports = {
  i18n: {
    locales: ['en', 'ro'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  react: {
    transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p', 'span', 'a'],
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  debug: process.env.NODE_ENV === 'development',
  ns: ['common'],
}
