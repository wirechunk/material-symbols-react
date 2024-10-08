import type { SVGProps } from "react";
export const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M184-184v-592h592v592H184Zm560-32v-248H496v248h248Zm0-528H496v248h248v-248Zm-528 0v248h248v-248H216Zm0 528h248v-248H216v248Z" />
  </svg>
);
