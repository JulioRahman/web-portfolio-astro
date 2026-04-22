import { defineMiddleware } from "astro:middleware";
import { paraglideMiddleware } from "./paraglide/server";

export const onRequest = defineMiddleware((context, next) => {
  return paraglideMiddleware(new Request(context.url.href), () => next());
});
