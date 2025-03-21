import type { SVGProps } from "react";
export const SvgContrastSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm72-72h528v-528L216-216Zm48-360h72v72h48v-72h72v-48h-72v-72h-48v72h-72v48Zm432 240H504v-48h192v48Z" />
  </svg>
);
