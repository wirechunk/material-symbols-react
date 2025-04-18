import type { SVGProps } from "react";
export const SvgPlaceItemFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-528h228v72H216v384h528v-384H588v-72h228v528H144Zm336-192L336-480l51-51 57 57v-438h72v438l57-57 51 51-144 144Z" />
  </svg>
);
