import type { SVGProps } from "react";
export const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M464-464H280v-32h184v-184h32v184h184v32H496v184h-32v-184Z" />
  </svg>
);
