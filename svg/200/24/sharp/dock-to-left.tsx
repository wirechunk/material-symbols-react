import type { SVGProps } from "react";
export const SvgDockToLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M640-200h120v-560H640v560Zm-440 0h400v-560H200v560Zm440 0h120-120Zm-480 40v-640h640v640H160Z" />
  </svg>
);
