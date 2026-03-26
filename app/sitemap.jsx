export default function sitemap() {
  const baseUrl = "https://sribalajihomes.in";

  const places = ["katrambakkam", "nandhambakkam", "thaiyur"];

  const propertyUrls = places.map((place) => ({
    url: `${baseUrl}/resale-plots-${place}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...propertyUrls,
    {
        url: `${baseUrl}/about`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/contact`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/testimonials`,
        lastModified: new Date(),
    }
  ];
}