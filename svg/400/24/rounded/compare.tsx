import type { SVGProps } from "react";
export const SvgCompare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M400-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h200v-40q0-17 11.5-28.5T440-920q17 0 28.5 11.5T480-880v800q0 17-11.5 28.5T440-40q-17 0-28.5-11.5T400-80v-40ZM200-240h200v-240L200-240Zm360 120v-360l200 240v-520H560v-80h200q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H560Z" />
  </svg>
);
