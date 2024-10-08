import type { SVGProps } from "react";
export const SvgPanZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M164-164v-172h52v82.85l127-127L380.15-343l-127 127H336v52H164Zm453-415.85L579.85-617l127-127H624v-52h172v172h-52v-82.85l-127 127Z" />
  </svg>
);
