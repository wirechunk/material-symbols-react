import type { SVGProps } from "react";
export const SvgBarChartFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M660-160v-280h140v280H660Zm-250 0v-640h140v640H410Zm-250 0v-440h140v440H160Z" />
  </svg>
);
