/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/testimonial', destination: '/testimonials', permanent: true },
      { source: '/contact', destination: '/contact-us', permanent: true },
      { source: '/resale-plots-katrambakkam', destination: '/properties/plots-in-katrambakkam', permanent: true },
      { source: '/properties/katrambakkam', destination: '/properties/plots-in-katrambakkam', permanent: true },
      { source: '/resale-plots-nandhambakkam', destination: '/properties/plots-in-nandhambakkam', permanent: true },
      { source: '/properties/nandhambakkam', destination: '/properties/plots-in-nandhambakkam', permanent: true },
      { source: '/resale-plots-thaiyur', destination: '/properties/plots-in-thaiyur-omr', permanent: true },
    ];
  },
};

export default nextConfig;
