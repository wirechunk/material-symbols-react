import type { SVGProps } from "react";
export const SvgDockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-48v-72h288v72H336Zm-24-144q-29.7 0-50.85-21.15Q240-234.3 240-264v-576q0-29.7 21.15-50.85Q282.3-912 312-912h336q29.7 0 50.85 21.15Q720-869.7 720-840v576q0 29.7-21.15 50.85Q677.7-192 648-192H312Zm0-192h336v-336H312v336Z" />
  </svg>
);
