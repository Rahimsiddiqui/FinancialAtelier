"use client";

// Third party imports
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't show on home page
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter((v) => v);

  // Generate the JSON-LD Structured Data
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://financialatelier.vercel.app",
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: segment.charAt(0).toUpperCase() + segment.slice(1),
        item: `https://financialatelier.vercel.app/${pathSegments.slice(0, index + 1).join("/")}`,
      })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />

      {/* The Visual UI */}
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 lg:px-15 mb-4"
      >
        <ol className="flex list-none p-0 text-xs uppercase tracking-widest font-bold text-secondary/60">
          <li className="flex items-center">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            const isLast = index === pathSegments.length - 1;
            return (
              <li key={href} className="flex items-center">
                {isLast ? (
                  <span className="text-primary">{segment}</span>
                ) : (
                  <>
                    <Link
                      href={href}
                      className="hover:text-primary transition-colors"
                    >
                      {segment}
                    </Link>
                    <span className="mx-2">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
