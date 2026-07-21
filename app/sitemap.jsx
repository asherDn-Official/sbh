export default function sitemap() {
  const baseUrl = "https://sribalajihomes.in";

  const places = ["plots-in-katrambakkam", "plots-in-nandhambakkam", "plots-in-thaiyur-omr"];

  const propertyUrls = places.map((place) => ({
    url: `${baseUrl}/properties/${place}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...propertyUrls,
    {
        url: `${baseUrl}/about-us`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/contact-us`,
        lastModified: new Date(),
    },
    {
        url: `${baseUrl}/testimonials`,
        lastModified: new Date(),
    }
  ];
}