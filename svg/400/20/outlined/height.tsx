import type { SVGProps } from "react";
export const SvgHeight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-144 336-288l51-51 57 57v-396l-57 57-51-51 144-144 144 144-51 51-57-57v396l57-57 51 51-144 144Z" />
  </svg>
);
