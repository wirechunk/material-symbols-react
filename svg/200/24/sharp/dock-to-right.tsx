import type { SVGProps } from "react";
export const SvgDockToRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-200h120v-560H200v560Zm160 0h400v-560H360v560Zm-40 0H200h120Zm-160 40v-640h640v640H160Z" />
  </svg>
);
