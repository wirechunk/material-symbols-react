import type { SVGProps } from "react";
export const SvgContrastSquareFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm60-60h600v-600L180-180Zm44-430h76v76h50v-76h76v-50h-76v-76h-50v76h-76v50Zm496 300H494v-50h226v50Z" />
  </svg>
);
