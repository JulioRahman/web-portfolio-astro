import Hotjar from '@hotjar/browser';
import { Rive } from "@rive-app/canvas-lite";
import EmblaCarousel, { type EmblaOptionsType } from "embla-carousel";
import Autoplay, { type AutoplayOptionsType } from "embla-carousel-autoplay";
import { addDotBtnsAndClickHandlers } from './EmblaCarouselDotButton'

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

  const emblaNodes = [].slice.call(document.querySelectorAll(".embla"));
  const dotsNodes = [].slice.call(document.querySelectorAll(".embla__dots"));
  const emblaOptions: EmblaOptionsType = { loop: true };
  const autoplayOptions: AutoplayOptionsType = { delay: 5000 };

  const emblaCarousels = emblaNodes.map(function (emblaNode) {
    return EmblaCarousel(emblaNode, emblaOptions, [
      Autoplay(autoplayOptions),
    ]);
  });


  dotsNodes.forEach((node, i) => {
    if (emblaCarousels[i].scrollSnapList().length > 1) {
      const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(emblaCarousels[i], node);
      emblaCarousels[i].on('destroy', removeDotBtnsAndClickHandlers)
    }
  });
});