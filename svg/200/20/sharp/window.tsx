import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M776-184H184v-592h592v592ZM496-464v248h248v-248H496Zm0-32h248v-248H496v248Zm-32 0v-248H216v248h248Zm0 32H216v248h248v-248Z" />
  </svg>
);
