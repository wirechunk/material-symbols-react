import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M116-212v-536h728v536H116Zm52-52h624v-432H168v432Zm126-72h375.07L543.54-503.38 443.23-373.23l-62-78.31L294-336Zm-126 72v-432 432Z" />
  </svg>
);
