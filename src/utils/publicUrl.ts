export function publicUrl(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedPath = path.replace(/^\.?\/*/, "");

  if (base.endsWith("/")) {
    return `${base}${normalizedPath}`;
  }

  return `${base}/${normalizedPath}`;
}
