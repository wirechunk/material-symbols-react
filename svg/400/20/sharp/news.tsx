import type { SVGProps } from "react";
export const SvgNews = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h480l192 192v480H144Zm72-72h528v-360H576v-168H216v528Zm72-72h384v-72H288v72Zm12-300h180v-72H300v72Zm-12 168h384v-72H288v72Zm-72-324v156-156 528-528Z" />
  </svg>
);
