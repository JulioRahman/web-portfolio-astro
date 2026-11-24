import type { Locale } from "../paraglide/runtime";

type AbsolutePathname = `/${string}`;

const home: Record<Locale, AbsolutePathname> = { en: "/", id: "/id" };
const pathnames: Record<Locale, AbsolutePathname>[] = [
  home,
  { en: "/projects", id: "/id/proyek" },
];

export function getLocalizedPathnames(pathname: string) {
  return pathnames.find((paths) =>
    Object.values(paths).some((path) => path === pathname),
  );
}

export function localizePathname(pathname: string, locale: Locale) {
  return (getLocalizedPathnames(pathname) ?? home)[locale];
}
