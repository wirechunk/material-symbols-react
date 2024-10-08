import type { SVGProps } from "react";
export const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-159.23 348.46-290.77 376-319.08l84 83.77v-201.61q0-36.85-26.19-63.04-26.19-26.19-63.04-26.19H89.23V-800h40v233.85h241.54q35.23 0 63.92 16.8 28.69 16.81 45.31 44.89 16.62-28.08 45.31-44.89 28.69-16.8 63.92-16.8h241.54V-800h40v273.85H589.23q-36.85 0-63.04 26.19Q500-473.77 500-436.92v200.84l83.77-83 27.77 28.31L480-159.23Z" />
  </svg>
);
