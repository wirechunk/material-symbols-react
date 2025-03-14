import type { SVGProps } from "react";
export const SvgToolbarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-360h720v360q0 33-23.5 56.5T760-120H200Zm-80-520v-120q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v120H120Z" />
  </svg>
);
