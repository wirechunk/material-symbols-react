import type { SVGProps } from "react";
export const SvgWebAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M116-212v-536h728v536H116Zm52-52h624v-360H168v360Z" />
  </svg>
);
