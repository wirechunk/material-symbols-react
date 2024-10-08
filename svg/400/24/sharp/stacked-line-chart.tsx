import type { SVGProps } from "react";
export const SvgStackedLineChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m140-100-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Zm0-240-60-60 300-300 160 160 284-320 56 56-340 384-160-160-240 240Z" />
  </svg>
);
