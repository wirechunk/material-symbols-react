import type { SVGProps } from "react";
export const SvgCandlestickChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M276-144v-96h-84v-480h84v-96h72v96h84v480h-84v96h-72Zm-12-168h96v-336h-96v336Zm348 168v-192h-84v-288h84v-192h72v192h84v288h-84v192h-72Zm-12-264h96v-144h-96v144Zm-288-72Zm336 0Z" />
  </svg>
);
