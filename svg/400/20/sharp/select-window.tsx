import type { SVGProps } from "react";
export const SvgSelectWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-480h144v-288h624v480H720v288H96Zm72-72h480v-264H168v264Zm552-288h72v-264H312v144h408v120Z" />
  </svg>
);
