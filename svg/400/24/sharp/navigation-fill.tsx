import type { SVGProps } from "react";
export const SvgNavigationFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m200-120-40-40 320-720 320 720-40 40-280-120-280 120Z" />
  </svg>
);
