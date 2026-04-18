export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const baseUrl = "https://financialatelier.vercel.app";

  const pages = ["", "/about", "/features", "/contact"];

  const urls = pages
    .map((path) => {
      return `
<url>
  <loc>${baseUrl}${path}</loc>
  <changefreq>${path === "" ? "weekly" : "monthly"}</changefreq>
  <priority>${path === "" ? "1.0" : "0.8"}</priority>
</url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control":
        "no-store, no-cache, must-revalidate, max-age=0, s-maxage=0",
    },
  });
}
