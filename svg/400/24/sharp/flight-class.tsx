import type { SVGProps } from "react";
export const SvgFlightClass = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-440v-360h240v360H480Zm80-80h80v-200h-80v200Zm160 280H320L200-640v-160h80v160l100 320h340v80ZM320-120v-80h400v80H320Zm240-600h80-80Z" />
  </svg>
);
