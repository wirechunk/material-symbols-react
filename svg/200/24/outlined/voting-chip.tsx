import type { SVGProps } from "react";
export const SvgVotingChip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-240q-100.29 0-170.14-69.81Q80-379.63 80-479.85q0-100.23 69.86-170.19Q219.71-720 320-720h320q100.29 0 170.14 69.81Q880-580.37 880-480.15q0 100.23-69.86 170.19Q740.29-240 640-240H320Zm0-40h320q83 0 141.5-58.5T840-480q0-83-58.5-141.5T640-680H320q-83 0-141.5 58.5T120-480q0 83 58.5 141.5T320-280Zm22.31-92.31h35.38v-90h90v-35.38h-90v-90h-35.38v90h-90v35.38h90v90Zm290 0h35.38v-215.38h-95.38v35.38h60v180ZM480-480Z" />
  </svg>
);
