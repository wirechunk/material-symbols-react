import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm40-40h640v-480H160v480Zm140-80h366.15L553.08-470.77 448.46-338.46l-70-84.62L300-320Zm-140 80v-480 480Z" />
  </svg>
);
