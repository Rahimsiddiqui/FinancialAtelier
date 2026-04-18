export async function GET() {
  const robots = `
User-agent: *
Allow: /

Disallow: /dashboard
Disallow: /auth
Disallow: /api
Disallow: /admin
Disallow: /settings

Sitemap: https://financialatelier.vercel.app/sitemap.xml
`.trim();

  return new Response(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
