import type { SVGProps } from "react";
export const SvgTooltipFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-100-99.31-150H100v-610h760v610H579.31L480-100Z" />
  </svg>
);
