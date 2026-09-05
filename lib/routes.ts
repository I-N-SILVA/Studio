export const DEFAULT_SITE_URL = "https://studio.iamnsilva.me";

export const routes = {
  home: "https://iamnsilva.me",
  portal: "https://iamnsilva.me/portal",
  studio: {
    root: "/",
    section: (id: "work" | "process" | "about" | "faq" | "contact") => `/#${id}`,
    work: (caseSlug: string) => `/work/${caseSlug}`,
  },
} as const;

export function siteUrl(path = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL).replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
