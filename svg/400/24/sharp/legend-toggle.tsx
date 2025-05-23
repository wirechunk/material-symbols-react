import type { SVGProps } from "react";
export const SvgLegendToggle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-200v-80h640v80H160Zm0-160v-80h640v80H160Zm0-160v-94l240-146 200 142 200-142v98L600-520 397-664 160-520Z" />
  </svg>
);
