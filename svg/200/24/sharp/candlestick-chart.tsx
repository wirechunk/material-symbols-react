import type { SVGProps } from "react";
export const SvgCandlestickChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-200v-80h-80v-400h80v-80h40v80h80v400h-80v80h-40Zm-40-120h120v-320H280v320Zm320 120v-184.62h-80v-223.07h80V-760h40v152.31h80v223.07h-80V-200h-40Zm-40-224.62h120v-143.07H560v143.07ZM340-480Zm280-16.15Z" />
  </svg>
);
