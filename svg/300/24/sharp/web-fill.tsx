import type { SVGProps } from "react";
export const SvgWebFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-180v-600h760v600H100Zm60-60h430v-147.69H160V-240Zm490 0h150v-355.38H650V-240ZM160-447.69h430v-147.69H160v147.69Z" />
  </svg>
);
