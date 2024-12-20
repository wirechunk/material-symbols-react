import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M330-72.31v-60h300v60H330Zm-70-140v-680h440v680H260Zm60-110v50h320v-50H320Zm0-60h320v-340H320v340Zm0-400h320v-50H320v50Zm0 0v-50 50Zm0 460v50-50Z" />
  </svg>
);
