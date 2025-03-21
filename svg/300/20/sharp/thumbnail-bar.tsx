import type { SVGProps } from "react";
export const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M116-212v-536h728v536H116Zm248-52h428v-432H364v432Zm-52 0v-432H168v432h144Zm-144 0v-432 432Zm144 0h52-52Zm0-432h52-52Z" />
  </svg>
);
