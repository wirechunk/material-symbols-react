import type { SVGProps } from "react";
export const SvgCountertops = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-192v-288h-72v-72h144q-29.7 0-50.85-21.15Q192-594.3 192-624v-144h216v144q0 29.7-21.15 50.85Q365.7-552 336-552h288v-107.74q0-15.26-10.29-25.76-10.29-10.5-25.5-10.5t-25.59 10.35Q552.23-675.3 552.23-660H480q0-45 31.5-76.5T588-768q45 0 76.5 31.5T696-660v108h144v72h-72v288H192Zm72-432h72v-72h-72v72Zm0 360h180v-216H264v216Zm252 0h180v-216H516v216ZM264-624h72-72Zm0 360h432-432Z" />
  </svg>
);
