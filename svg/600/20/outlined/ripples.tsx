import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M222.78-222.78h514.44v-311.09q-16.44 7.74-32.57 11.61-16.13 3.87-32.65 3.87-64.52 0-109.07-44.54-44.54-44.55-44.54-109 0-16.96 3.87-32.91 3.87-15.94 11.61-32.38H222.78v514.44Zm0 98q-41 0-69.5-28.5t-28.5-69.5v-514.44q0-41 28.5-69.5t69.5-28.5h514.44q41 0 69.5 28.5t28.5 69.5v514.44q0 41-28.5 69.5t-69.5 28.5H222.78Zm0-612.44v514.44-514.44Z" />
  </svg>
);
