import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm60-60h680v-520H140v520Zm97-100h487L577-519 446-345l-92-129-117 154Zm-97 100v-520 520Z" />
  </svg>
);
