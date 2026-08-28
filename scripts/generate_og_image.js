const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function createOgImage() {
  const width = 1200;
  const height = 630;

  // Search for candidate background image
  const bgPath = path.join(__dirname, '../public/assets/home/resale-plots-katrambakkam-layout.webp');
  let baseImage;

  if (fs.existsSync(bgPath)) {
    baseImage = sharp(bgPath).resize(width, height, { fit: 'cover' });
  } else {
    // Create dark green elegant fallback background
    baseImage = sharp({
      create: {
        width,
        height,
        channels: 3,
        background: { r: 2, g: 40, b: 15 }
      }
    });
  }

  // SVG Overlay with dark gradient, green accent bar, and crisp white & gold typography
  const svgOverlay = Buffer.from(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="overlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#022a0a" stop-opacity="0.85"/>
          <stop offset="50%" stop-color="#011b06" stop-opacity="0.90"/>
          <stop offset="100%" stop-color="#000d03" stop-opacity="0.95"/>
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#fbbf24"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
      </defs>

      <!-- Gradient Background -->
      <rect width="${width}" height="${height}" fill="url(#overlay)"/>

      <!-- Accent Top Border -->
      <rect x="0" y="0" width="${width}" height="10" fill="url(#gold)"/>

      <!-- Card Container -->
      <rect x="60" y="60" width="1080" height="510" rx="20" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.15" stroke-width="2"/>

      <!-- Badge -->
      <rect x="100" y="100" width="340" height="42" rx="21" fill="#166534"/>
      <text x="270" y="127" font-family="Arial, sans-serif" font-size="18" font-weight="bold" fill="#ffffff" text-anchor="middle" letter-spacing="1">100% CLEAR TITLE DEEDS</text>

      <!-- Main Headline -->
      <text x="100" y="210" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="#ffffff">
        CMDA &amp; DTCP Approved
      </text>
      <text x="100" y="270" font-family="Georgia, serif" font-size="46" font-weight="bold" fill="url(#gold)">
        Resale Plots in Chennai
      </text>

      <!-- Tagline / Subtitle -->
      <text x="100" y="340" font-family="Arial, sans-serif" font-size="28" font-weight="500" fill="#e2e8f0">
        Kattrambakkam  •  Nandhambakkam  •  Thaiyur OMR
      </text>

      <!-- Features Row -->
      <rect x="100" y="390" width="220" height="48" rx="8" fill="#ffffff" fill-opacity="0.1"/>
      <text x="210" y="421" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#4ade80" text-anchor="middle">Zero Brokerage</text>

      <rect x="340" y="390" width="240" height="48" rx="8" fill="#ffffff" fill-opacity="0.1"/>
      <text x="460" y="421" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#4ade80" text-anchor="middle">Up to 90% Bank Loan</text>

      <rect x="600" y="390" width="220" height="48" rx="8" fill="#ffffff" fill-opacity="0.1"/>
      <text x="710" y="421" font-family="Arial, sans-serif" font-size="20" font-weight="bold" fill="#4ade80" text-anchor="middle">Immediate Reg.</text>

      <!-- Brand Footer -->
      <line x1="100" y1="480" x2="1100" y2="480" stroke="#ffffff" stroke-opacity="0.2" stroke-width="1"/>

      <text x="100" y="525" font-family="Georgia, serif" font-size="32" font-weight="bold" fill="#ffffff">
        Sri Balaji Homes
      </text>
      <text x="1100" y="525" font-family="Arial, sans-serif" font-size="22" font-weight="bold" fill="#fbbf24" text-anchor="end">
        www.sribalajihomes.in
      </text>
    </svg>
  `);

  const outputPath = path.join(__dirname, '../public/og-image.jpg');
  
  await baseImage
    .composite([{ input: svgOverlay, top: 0, left: 0 }])
    .jpeg({ quality: 90 })
    .toFile(outputPath);

  console.log('OG Image generated successfully at:', outputPath);
}

createOgImage().catch(console.error);
