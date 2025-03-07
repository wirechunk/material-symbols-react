import type { SVGProps } from "react";
export const SvgPowerFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M380-120v-120L240-380v-300h80v-160h80v160h160v-160h80v160h80v300L580-240v120H380Z" />
  </svg>
);
