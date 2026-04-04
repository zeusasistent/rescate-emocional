/** Prefijo para assets en GitHub Pages (project site: /nombre-repo). En local queda vacío. */
export function publicPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
