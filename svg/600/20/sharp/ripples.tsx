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
    <path d="M222.78-222.78h514.44v-311.09q-16.44 7.74-32.57 11.61-16.13 3.87-32.65 3.87-64.52 0-109.07-44.54-44.54-44.55-44.54-109 0-16.96 3.87-32.91 3.87-15.94 11.61-32.38H222.78v514.44Zm-98 98v-710.44h710.44v710.44H124.78Zm98-612.44v514.44-514.44Z" />
  </svg>
);
