import type { SVGProps } from "react";
export const SvgTileLargeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-240h320v240H120Zm400 0v-240h320v240H520ZM120-440v-400h720v400H120Z" />
  </svg>
);
