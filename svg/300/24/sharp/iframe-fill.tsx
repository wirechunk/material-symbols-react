import type { SVGProps } from "react";
export const SvgIframeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M400-360v-200h320v200H400ZM100-180v-600h760v600H100Zm60-60h640v-400H160v400Z" />
  </svg>
);
