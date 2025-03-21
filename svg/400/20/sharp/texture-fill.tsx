import type { SVGProps } from "react";
export const SvgTextureFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M123-123v-60l655-654h59v59L183-123h-60Zm-3-244v-118l355-355h118L120-367Zm0-305v-168h168L120-672Zm552 552 168-168v168H672Zm-305 0 473-473v118L485-120H367Z" />
  </svg>
);
