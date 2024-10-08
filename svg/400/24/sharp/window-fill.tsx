import type { SVGProps } from "react";
export const SvgWindowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M520-440h320v320H520v-320Zm0-80v-320h320v320H520Zm-80 0H120v-320h320v320Zm0 80v320H120v-320h320Z" />
  </svg>
);
