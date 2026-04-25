import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const runtime = "nodejs";

const baseUrl = "https://financialatelier.vercel.app";
const appDir = path.join(process.cwd(), "app/(main)");

const PAGE_FILES = new Set(["page.js", "page.jsx", "page.tsx"]);

function getRoutes(dir, basePath = "") {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  let routes = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    if (entry.name.startsWith("(")) {
      routes = routes.concat(getRoutes(path.join(dir, entry.name), basePath));
      continue;
    }

    const fullPath = path.join(dir, entry.name);
    const files = fs.readdirSync(fullPath);

    const routePath = `${basePath}/${entry.name}`;

    const hasPage = files.some((f) => PAGE_FILES.has(f));

    if (hasPage) routes.push(routePath);

    routes = routes.concat(getRoutes(fullPath, routePath));
  }

  return routes;
}

export async function GET() {
  const routes = getRoutes(appDir);

  const pages = ["", ...routes];

  const xml = pages
    .map((route) => {
      const loc = route === "" ? baseUrl : `${baseUrl}${route}`;
      return `
<url>
  <loc>${loc}</loc>
  <changefreq>${route === "" ? "weekly" : "monthly"}</changefreq>
  <priority>${route === "" ? "1.0" : "0.8"}</priority>
</url>`;
    })
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xml}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "no-store",
      },
    }
  );
}