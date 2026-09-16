// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   compress: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'images.unsplash.com',
//       },
//     ],
//   },
//   async redirects() {
//     return [
//       { source: '/about', destination: '/about-us', permanent: true },
//       { source: '/testimonial', destination: '/testimonials', permanent: true },
//       { source: '/contact', destination: '/contact-us', permanent: true },
//       { source: '/resale-plots-katrambakkam', destination: '/properties/plots-in-katrambakkam', permanent: true },
//       { source: '/properties/katrambakkam', destination: '/properties/plots-in-katrambakkam', permanent: true },
//       { source: '/resale-plots-nandhambakkam', destination: '/properties/plots-in-nandhambakkam', permanent: true },
//       { source: '/properties/nandhambakkam', destination: '/properties/plots-in-nandhambakkam', permanent: true },
//       { source: '/resale-plots-thaiyur', destination: '/properties/plots-in-thaiyur-omr', permanent: true },
//     ];
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Enable Brotli/Gzip compression
  compress: true,

  // 2. Advanced Image Optimization (AVIF + WebP)
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // Caches optimized images for 1 year
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // 3. Security & Caching Headers
  async headers() {
    return [
      {
        // Apply Security Headers to ALL routes site-wide
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload', // Enforces HTTPS for 2 years
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN', // Prevents clickjacking (embedding in iFrames)
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // Prevents MIME-type sniffing attacks
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin', // Protects referral paths
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()', // Blocks unauthorized device feature usage
          },
        ],
      },
      {
        // Static Asset Caching Header
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Next.js Static JS/CSS Bundle Caching Header
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Next.js Optimized Image Caching Header
        source: '/_next/image/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Public images, webp, fonts caching header
        source: '/:path*.{webp,jpg,jpeg,png,gif,svg,ico,woff2}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // 4. 301 Permanent Redirects for SEO & Legacy URLs
  // Add trailing slash variants to guarantee single-hop execution
async redirects() {
  return [
    { source: '/about', destination: '/about-us', permanent: true },
    { source: '/about/', destination: '/about-us', permanent: true },
    { source: '/testimonial', destination: '/testimonials', permanent: true },
    { source: '/testimonial/', destination: '/testimonials', permanent: true },
    { source: '/contact', destination: '/contact-us', permanent: true },
    { source: '/contact/', destination: '/contact-us', permanent: true },

    // Katrambakkam
    { source: '/resale-plots-katrambakkam', destination: '/properties/approved-resale-plots-kattrambakkam-chennai', permanent: true },
    { source: '/properties/katrambakkam', destination: '/properties/approved-resale-plots-kattrambakkam-chennai', permanent: true },
    { source: '/properties/plots-in-katrambakkam', destination: '/properties/approved-resale-plots-kattrambakkam-chennai', permanent: true },
    { source: '/approved-resale-plots-kattrambakkam-chennai', destination: '/properties/approved-resale-plots-kattrambakkam-chennai', permanent: true },
    
    // Nandhambakkam
    { source: '/resale-plots-nandhambakkam', destination: '/properties/cmda-approved-plots-nandhambakkam', permanent: true },
    { source: '/properties/nandhambakkam', destination: '/properties/cmda-approved-plots-nandhambakkam', permanent: true },
    { source: '/properties/plots-in-nandhambakkam', destination: '/properties/cmda-approved-plots-nandhambakkam', permanent: true },
    { source: '/cmda-approved-plots-nandhambakkam', destination: '/properties/cmda-approved-plots-nandhambakkam', permanent: true },

    // Thaiyur OMR
    { source: '/resale-plots-thaiyur', destination: '/properties/dtcp-resale-plots-thaiyur-omr', permanent: true },
    { source: '/properties/thaiyur', destination: '/properties/dtcp-resale-plots-thaiyur-omr', permanent: true },
    { source: '/properties/plots-in-thaiyur-omr', destination: '/properties/dtcp-resale-plots-thaiyur-omr', permanent: true },
    { source: '/dtcp-resale-plots-thaiyur-omr', destination: '/properties/dtcp-resale-plots-thaiyur-omr', permanent: true },

    { 
      source: '/properties/thaiyur', 
      destination: '/properties/dtcp-resale-plots-thaiyur-omr', 
      permanent: true 
    },
    { 
      source: '/properties/nandhambakkam', 
      destination: '/properties/cmda-approved-plots-nandhambakkam', 
      permanent: true 
    },
    { 
      source: '/properties/katrambakkam', 
      destination: '/properties/approved-resale-plots-kattrambakkam-chennai', 
      permanent: true 
    },
    {
      source: '/resale-plots-katrambakkam',
      destination: '/properties/approved-resale-plots-kattrambakkam-chennai',
      permanent: true,
    },
  ];
},
};

export default nextConfig;
