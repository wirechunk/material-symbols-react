import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm80-80h480L570-520 450-360l-90-120-120 160Zm-80 80v-480 480Z" />
  </svg>
);
