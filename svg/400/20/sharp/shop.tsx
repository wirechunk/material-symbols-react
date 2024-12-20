import type { SVGProps } from "react";
export const SvgShop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-144v-576h240v-144h288v144h240v576H96Zm72-72h624v-432H168v432Zm240-504h144v-72H408v72ZM168-216v-432 432Zm216-48 264-168-264-168v336Z" />
  </svg>
);
