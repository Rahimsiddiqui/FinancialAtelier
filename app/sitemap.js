export default function sitemap() {
  const baseUrl = "https://financialatelier.vercel.app";
  const routes = [
    "",
    "/about",
    "/careers",
    "/contact",
    "/cookies",
    "/features",
    "/opensource",
    "/privacy",
    "/security",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
