import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M136-232v-496h688v496H136Zm32-32h624v-432H168v432Zm156-72h318.15L535.08-478.77l-92.62 116.31-52-60.62L324-336Zm-156 72v-432 432Z" />
  </svg>
);
