import type { SVGProps } from "react";
export const SvgDropdownFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-480h240v-240H480v240ZM160-160v-640h640v640H160Z" />
  </svg>
);
