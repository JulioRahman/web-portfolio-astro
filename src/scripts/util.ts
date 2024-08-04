import type { AvailableLanguageTag } from "../paraglide/runtime"

type AbsolutePathname = `/${string}`

const pathnames: Record<string, Record<AvailableLanguageTag, AbsolutePathname>> = {
  "/": {
    en: "/",
    id: "/id"
  },
  "/experiences": {
    en: "/experiences",
    id: "/id/pengalaman"
  },
  "/about": {
    en: "/about",
    id: "/id/tentang"
  },
  "/id": {
    en: "/",
    id: "/id"
  },
  "/id/pengalaman": {
    en: "/experiences",
    id: "/id/pengalaman"
  },
  "/id/tentang": {
    en: "/about",
    id: "/id/tentang"
  },
}

export function localizePathname(
  pathname: string,
  locale: AvailableLanguageTag
) {
  if (pathnames[pathname]) {
    return pathnames[pathname][locale]
  }
  return pathnames["/"][locale]
}