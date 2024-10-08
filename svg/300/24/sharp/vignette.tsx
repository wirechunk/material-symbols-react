import type { SVGProps } from "react";
export const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-330q94.15 0 162.08-44.53Q710-419.06 710-480t-67.92-105.47Q574.15-630 480-630t-162.08 44.53Q250-540.94 250-480t67.92 105.47Q385.85-330 480-330Zm0-60q-68.85 0-119.42-26.88Q310-443.77 310-480t50.58-63.12Q411.15-570 480-570t119.42 26.88Q650-516.23 650-480t-50.58 63.12Q548.85-390 480-390ZM100-180v-600h760v600H100Zm60-60h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
);
