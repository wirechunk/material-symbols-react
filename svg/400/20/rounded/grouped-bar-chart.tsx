import type { SVGProps } from "react";
export const SvgGroupedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-192v-416h144v416H192Zm192 0v-216h144v216H384Zm240 0v-576h144v576H624Z" />
  </svg>
);
