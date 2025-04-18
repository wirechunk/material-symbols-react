import type { SVGProps } from "react";
export const SvgSquareDot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm300-145q-65 0-110-45t-45-110q0-65 45-110t110-45q65 0 110 45t45 110q0 65-45 110t-110 45Z" />
  </svg>
);
