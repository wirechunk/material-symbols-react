import type { SVGProps } from "react";
export const SvgMoving = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M143.15-284.69 119.85-308 302-490.15q29.62-28.85 70.77-29.23 41.15-.39 70.77 29.23l34 34q20.15 20.15 48.23 19.77 28.08-.39 48.23-19.77L785.62-668H640.15v-32h200v200h-32v-145.46L596.31-434.62q-29.62 28.85-71.16 29.24-41.53.38-70.38-28.47l-33-33q-20.92-20.92-48.23-20.53-27.31.38-48.23 20.53L143.15-284.69Z" />
  </svg>
);
