import type { SVGProps } from "react";
export const SvgViewTimelineFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm120-160h240v-80H240v80Zm240-320h240v-80H480v80ZM360-440h240v-80H360v80Z" />
  </svg>
);
