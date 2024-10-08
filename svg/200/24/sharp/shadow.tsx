import type { SVGProps } from "react";
export const SvgShadow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-560h144.62v-160H840v575.38H680V-120H120Zm184.62-184.62H800V-800H304.62v495.38Z" />
  </svg>
);
