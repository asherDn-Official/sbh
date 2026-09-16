// export default function sitemap() {
//   // MUST use www to avoid 301 redirect errors in Google Search Console
//   const baseUrl = "https://www.sribalajihomes.in";

//   const places = [
//     "approved-resale-plots-kattrambakkam-chennai",
//     "cmda-approved-plots-nandhambakkam",
//     "dtcp-resale-plots-thaiyur-omr",
//   ];

//   const propertyUrls = places.map((place) => ({
//     url: `${baseUrl}/properties/${place}`,
//     lastModified: new Date(),
//     changeFrequency: "weekly",
//     priority: 0.9,
//   }));

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/properties`,
//       lastModified: new Date(),
//       changeFrequency: "weekly",
//       priority: 0.9,
//     },
//     ...propertyUrls,
//     {
//       url: `${baseUrl}/about-us`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/contact-us`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/testimonials`,
//       lastModified: new Date(),
//       changeFrequency: "monthly",
//       priority: 0.7,
//     },
//   ];
// }

export default function sitemap() {
  const baseUrl = "https://www.sribalajihomes.in";
  const currentDate = new Date().toISOString();

  const places = [
    "approved-resale-plots-kattrambakkam-chennai",
    "cmda-approved-plots-nandhambakkam",
    "dtcp-resale-plots-thaiyur-omr",
  ];

  const propertyUrls = places.map((place) => ({
    url: `${baseUrl}/properties/${place}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/properties`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...propertyUrls,
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}