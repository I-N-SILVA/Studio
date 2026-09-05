import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/syne";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "./globals.css";
import "@/components/brand/tokens.css";
import "@/components/brand/brand-global.css";
import { CLIENT_SITE } from "@/lib/client-content";
import { siteUrl } from "@/lib/routes";
import StudioShell from "@/components/studio/StudioShell";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: { default: CLIENT_SITE.TITLE, template: `%s — ${CLIENT_SITE.NAME}` },
  description: CLIENT_SITE.DESCRIPTION,
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }], apple: "/apple-touch-icon.png" },
  openGraph: { title: CLIENT_SITE.TITLE, description: CLIENT_SITE.DESCRIPTION, siteName: CLIENT_SITE.NAME, type: "website", url: siteUrl() },
};

export const viewport = { themeColor: "#F1EFE7" };

const jsonLd = { "@context": "https://schema.org", "@type": "ProfessionalService", name: CLIENT_SITE.NAME, description: CLIENT_SITE.DESCRIPTION, url: siteUrl(), email: CLIENT_SITE.EMAIL, founder: { "@type": "Person", name: "Ian N. Silva" }, areaServed: "Worldwide" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><StudioShell><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />{children}</StudioShell></body></html>;
}
