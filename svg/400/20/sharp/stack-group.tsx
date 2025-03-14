import type { SVGProps } from "react";
export const SvgStackGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-96v-240H96v-528h528v240h240v528H336Zm72-72h384v-384H552v-240H168v384h240v240Zm72-312Z" />
  </svg>
);
