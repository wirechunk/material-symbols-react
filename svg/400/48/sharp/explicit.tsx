import type { SVGProps } from "react";
export const SvgExplicit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M366-280h227v-60H426v-106h167v-60H426v-107h167v-60H366v393ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z" />
  </svg>
);
