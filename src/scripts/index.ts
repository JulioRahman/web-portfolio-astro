import { Rive } from "@rive-app/canvas-lite";

document.addEventListener("astro:page-load", () => {
  const r = new Rive({
    src: "../scroll_down.riv",
    canvas: document.getElementById(
      "scroll-down-canvas",
    ) as HTMLCanvasElement,
    autoplay: true,
    onLoad: () => {
      r.resizeDrawingSurfaceToCanvas();
    },
  });
});