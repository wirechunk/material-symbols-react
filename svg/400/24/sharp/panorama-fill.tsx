import type { SVGProps } from "react";
export const SvgPanoramaFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm160-160h480L570-520 450-360l-90-120-120 160Z" />
  </svg>
);
