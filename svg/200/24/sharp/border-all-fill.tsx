import type { SVGProps } from "react";
export const SvgBorderAllFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M500-160v-300h300v300H500Zm0-340v-300h300v300H500Zm-340 0v-300h300v300H160Zm0 340v-300h300v300H160Z" />
  </svg>
);
