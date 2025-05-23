import type { SVGProps } from "react";
export const SvgBlindsFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v560h40q17 0 28.5 11.5T880-160q0 17-11.5 28.5T840-120H120q-17 0-28.5-11.5T80-160q0-17 11.5-28.5T120-200h40Zm80-480h320v-80H240v80Zm0 160h320v-80H240v80Zm0 320h480v-240h-80v73q14 10 22 25t8 32q0 29-20.5 49.5T600-240q-29 0-49.5-20.5T530-310q0-17 8-32t22-25v-73H240v240Zm400-480h80v-80h-80v80Zm0 160h80v-80h-80v80Z" />
  </svg>
);
