import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M311.52-31.52v-80h336.96v80H311.52Zm26-160q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-524.96q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h284.96q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v524.96q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H337.52Zm0-146v40h284.96v-40H337.52Zm0-80h284.96v-284.96H337.52v284.96Zm0-364.96h284.96v-40H337.52v40Zm0 0v-40 40Zm0 444.96v40-40Z" />
  </svg>
);
