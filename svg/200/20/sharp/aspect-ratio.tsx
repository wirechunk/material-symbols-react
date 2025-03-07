import type { SVGProps } from "react";
export const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M572-332h152v-152h-32v120H572v32ZM236-476h32v-120h120v-32H236v152ZM136-232v-496h688v496H136Zm32-32h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
