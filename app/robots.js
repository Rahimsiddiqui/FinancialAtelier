export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard", "/auth", "/api", "/admin", "/settings"],
    },
    sitemap: "https://financialatelier.vercel.app/sitemap.xml",
  };
}
