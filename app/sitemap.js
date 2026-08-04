export default function sitemap() {
  // MUST use www to avoid 301 redirect errors in Google Search Console
  const baseUrl = "https://www.sribalajihomes.in";

  const places = [
    "plots-in-katrambakkam",
    "plots-in-nandhambakkam",
    "plots-in-thaiyur-omr",
  ];

  const propertyUrls = places.map((place) => ({
    url: `${baseUrl}/properties/${place}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...propertyUrls,
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}