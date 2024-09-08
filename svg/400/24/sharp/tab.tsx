import type { SVGProps } from "react";
export const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-240h640v-320H520v-160H160v480Zm-80 80v-640h800v640H80Zm80-80v-480 480Z" />
  </svg>
);
