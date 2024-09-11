/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    }  // <-- This closing curly brace was missing
};

module.exports = nextConfig;