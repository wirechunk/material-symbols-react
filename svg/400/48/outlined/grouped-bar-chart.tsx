import type { SVGProps } from "react";
export const SvgGroupedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-480h140v480H160Zm210 0v-280h140v280H370Zm290 0v-640h140v640H660Z" />
  </svg>
);
