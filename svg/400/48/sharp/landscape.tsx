import type { SVGProps } from "react";
export const SvgLandscape = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m40-240 240-320 195 260h325L560-619 435-453l-38-50 163-217 360 480H40Zm510-60Zm-390 0h240L280-460 160-300Zm0 0h240-240Z" />
  </svg>
);
