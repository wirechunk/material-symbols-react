import type { SVGProps } from "react";
export const SvgSettopComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-300v-360h760v360H100Zm60-60h640v-240H160v240Zm50-90h218.46v-60H210v60Zm313.85 6.15h72.3v-72.3h-72.3v72.3Zm120 0h72.3v-72.3h-72.3v72.3ZM160-360v-240 240Z" />
  </svg>
);
