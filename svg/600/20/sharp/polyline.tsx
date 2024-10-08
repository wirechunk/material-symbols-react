import type { SVGProps } from "react";
export const SvgPolyline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M591.52-78.48v-98.43L323.78-323H118v-250.48h186.48l95.04-113.35V-890H650v250.48H475.96L368.48-511.48v111.45l223.04 121.9v-51.39H842v251.04H591.52Zm-103.04-650h72v-72h-72v72ZM207.52-412.52h72v-72h-72v72ZM680.48-168h72v-72h-72v72Zm-156-595.48ZM243.52-448.52ZM715.48-204Z" />
  </svg>
);
