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
    <path d="M192-216h144v-312H192v312Zm216 0h144v-528H408v528Zm216 0h144v-240H624v240Zm-504 0v-312q0-29.7 21.13-50.85Q162.25-600 191.92-600h143.83v-144q0-29.7 21.12-50.85Q378-816 407.72-816h144.11q29.73 0 50.89 21.15 21.17 21.15 21.17 50.85v216H768q29.7 0 50.85 21.15Q840-485.7 840-456v240q0 29.7-21.16 50.85Q797.68-144 767.97-144H191.71Q162-144 141-165.15T120-216Z" />
  </svg>
);
