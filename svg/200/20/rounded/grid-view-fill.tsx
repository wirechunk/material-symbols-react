import type { SVGProps } from "react";
export const SvgGridViewFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-528v-248h248v248H184Zm0 344v-248h248v248H184Zm344-344v-248h248v248H528Zm0 344v-248h248v248H528Z" />
  </svg>
);
