import type { SVGProps } from "react";
export const SvgLeaderboard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-216h144v-312H192v312Zm216 0h144v-528H408v528Zm216 0h144v-240H624v240Zm-504 72v-456h216v-216h288v288h216v384H120Z" />
  </svg>
);
