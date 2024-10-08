import type { SVGProps } from "react";
export const SvgStart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-240v-480h72v480h-72Zm528-48-51-51 105-105H264v-72h438L597-621l51-51 192 192-192 192Z" />
  </svg>
);
