import type { SVGProps } from "react";
export const SvgGridViewFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-520v-300h300v300H140Zm0 380v-300h300v300H140Zm380-380v-300h300v300H520Zm0 380v-300h300v300H520Z" />
  </svg>
);
