import type { SVGProps } from "react";
export const SvgChess = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-168h528v-72H216v72Zm110-144h308l-31-168H357l-31 168ZM144-96v-216h109l31-168h-92v-72h576v72h-92l31 168h109v216H144Zm131-456-83-312q34 29 70 56.5t81 27.5q42 0 76-25.5t61-58.5q27 32 61 58t76 26q45 0 81-27.5t70-56.5l-83 312h-75l43-159q-9 2-18.5 2.5t-18.5.5q-37 0-72-12.5T480-757q-29 24-64 36.5T344-708q-9 0-18.5-.5T307-711l43 159h-75Zm205 72Zm0-72Zm0 384Z" />
  </svg>
);
