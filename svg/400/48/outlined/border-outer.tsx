import type { SVGProps } from "react";
export const SvgBorderOuter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-180h600v-600H180v600Zm-60 60v-720h720v720H120Zm165-330v-60h60v60h-60Zm165 165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm0-165v-60h60v60h-60Zm165 165v-60h60v60h-60Z" />
  </svg>
);
