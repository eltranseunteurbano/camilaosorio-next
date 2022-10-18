/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  },
  i18n,
})
