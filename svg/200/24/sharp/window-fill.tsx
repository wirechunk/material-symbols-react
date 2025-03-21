import type { SVGProps } from "react";
export const SvgWindowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M500-460h300v300H500v-300Zm0-40v-300h300v300H500Zm-40 0H160v-300h300v300Zm0 40v300H160v-300h300Z" />
  </svg>
);
