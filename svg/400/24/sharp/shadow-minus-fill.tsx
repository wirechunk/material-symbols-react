import type { SVGProps } from "react";
export const SvgShadowMinusFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-80v-640h160v-160h640v640H720v160H80Zm240-240h480v-480H320v480Zm80-200v-80h320v80H400Z" />
  </svg>
);
