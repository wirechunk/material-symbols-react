import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-180v-600h760v600H100Zm60-60h640v-480H160v480Zm110-80h423.07L561.54-495.38 449.23-349.23l-80-102.31L270-320Zm-110 80v-480 480Z" />
  </svg>
);
