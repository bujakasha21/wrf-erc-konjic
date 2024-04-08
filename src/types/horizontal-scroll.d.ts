// src/types/horizontal-scroll.d.ts
declare module "horizontal-scroll" {
  interface HorizontalScrollOptions {
    // Define options based on library's documentation
    blocks: HTMLElement | null;
    container: HTMLElement | null;
    // Add any other options you intend to use
  }

  export default class HorizontalScroll {
    constructor(options: HorizontalScrollOptions);
    // Define any other methods you intend to use
  }
}
