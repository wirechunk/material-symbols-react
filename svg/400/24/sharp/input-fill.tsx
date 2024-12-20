import type { SVGProps } from "react";
export const SvgInputFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-200h80v120h640v-480H160v120H80v-200h800v640H80Zm380-140-56-58 83-82H80v-80h407l-83-82 56-58 180 180-180 180Z" />
  </svg>
);
