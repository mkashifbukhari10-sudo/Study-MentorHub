export function createPageUrl(page: string): string {
  const map: Record<string, string> = {
    Home: "/",
    Blog: "/blog",
    BlogDetail: "/blog/detail",
    About: "/about",
    Contact: "/contact",
    Privacy: "/privacy",
    Terms: "/terms",
  };

  const key = page.trim();
  return map[key] ?? "/";
}

