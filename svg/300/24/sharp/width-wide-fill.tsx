import type { SVGProps } from "react";
export const SvgWidthWideFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-180v-600h760v600H100Zm60-60h100v-480H160v480Zm540 0h100v-480H700v480Z" />
  </svg>
);
