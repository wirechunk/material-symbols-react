import type { SVGProps } from "react";
export const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m256-120-42-42 236-236v-328l-90 90-42-42 162-162 162 162-42 42-90-90v328l236 236-42 42-224-224-224 224Z" />
  </svg>
);
