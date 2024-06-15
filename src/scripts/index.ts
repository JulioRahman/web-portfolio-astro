import Hotjar from '@hotjar/browser';
import { Rive } from "@rive-app/canvas-lite";

const siteId = 5025471;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

document.addEventListener("astro:page-load", () => {
  const r = new Rive({
    src: "../../scroll_down.riv",
    canvas: document.getElementById(
      "scroll-down-canvas",
    ) as HTMLCanvasElement,
    autoplay: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
});