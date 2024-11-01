import type { SVGProps } from "react";
export const SvgDockToBottom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h528v-120H216v120Zm0-172h528v-356H216v356Zm0 52v120-120Zm-52 172v-632h632v632H164Z" />
  </svg>
);
