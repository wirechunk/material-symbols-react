import type { SVGProps } from "react";
export const SvgDraftFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z" />
  </svg>
);
