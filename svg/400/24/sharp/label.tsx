import type { SVGProps } from "react";
export const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h560l240 320-240 320H80Zm80-80h440l180-240-180-240H160v480Zm310-240Z" />
  </svg>
);
