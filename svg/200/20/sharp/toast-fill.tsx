import type { SVGProps } from "react";
export const SvgToastFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M284-284h392v-32H284v32ZM184-184v-592h592v592H184Z" />
  </svg>
);
