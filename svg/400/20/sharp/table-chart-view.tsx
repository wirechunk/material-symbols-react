import type { SVGProps } from "react";
export const SvgTableChartView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m290-96-50-50 264-264 144 144 213-214 51 51-264 264-144-144L290-96Zm-122-48H96v-672h672v264H168v408Zm0-480h528v-120H168v120Zm0 0v-120 120Z" />
  </svg>
);
