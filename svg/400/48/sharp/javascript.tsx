import type { SVGProps } from "react";
export const SvgJavascript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-360v-100h48v52h84v-192h48v240H240Zm240 0v-80h48v32h104v-53H480v-139h200v80h-48v-32H528v53h152v139H480Z" />
  </svg>
);
