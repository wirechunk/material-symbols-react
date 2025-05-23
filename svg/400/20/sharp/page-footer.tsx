import type { SVGProps } from "react";
export const SvgPageFooter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-72h672v72H144Zm0-144v-528h672v528H144Zm72-72h528v-384H216v384Zm0 0v-384 384Z" />
  </svg>
);
