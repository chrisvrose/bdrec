const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
module.exports = withPWA({
    reactStrictMode: true,
    // TODO switch to a proper subdomain later
    basePath:'/bdrec',
    pwa: {
        dest: 'public',
        // disable if not production
        disable: process.env.NODE_ENV === 'development',
    },
});
