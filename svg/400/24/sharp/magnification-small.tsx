import type { SVGProps } from "react";
export const SvgMagnificationSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-520h160v-160H200v160ZM80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
);
