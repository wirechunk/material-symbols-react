import type { SVGProps } from "react";
export const SvgOutputFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v144h-72v-72H216v528h528v-72h72v144H144Zm528-144-51-51 105-105H384v-72h342L621-621l51-51 192 192-192 192Z" />
  </svg>
);
