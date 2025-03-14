import type { SVGProps } from "react";
export const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m256.77-635.38-73.69-73.24 28.3-28.76 73.7 73.69-28.31 28.31ZM460-724.62v-104.61h40v104.61h-40Zm243.69 89.24-28.77-28.31 73.7-73.23 28.3 28.3-73.23 73.24ZM400-120v-176.92l-120-120V-560h400v143.08l-120 120V-120H400Zm40-40h80v-153.77l120-120V-520H320v86.23l120 120V-160Zm40-180Z" />
  </svg>
);
