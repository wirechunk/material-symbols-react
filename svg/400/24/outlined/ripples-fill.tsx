import type { SVGProps } from "react";
export const SvgRipplesFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm480-400q21 0 41.5-5.5T760-542v-218H542q-11 18-16.5 38.5T520-680q0 66 47 113t113 47Z" />
  </svg>
);
