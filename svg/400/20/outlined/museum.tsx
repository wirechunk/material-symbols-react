import type { SVGProps } from "react";
export const SvgMuseum = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-72h96v-360H96v-72l384-264 384 264v72h-96v360h96v72H96Zm168-72h432-432Zm72-96h72v-144l72 96 72-96v144h72v-240h-72l-72 96-72-96h-72v240Zm360 96v-456L480-777 264-624v456h432Z" />
  </svg>
);
