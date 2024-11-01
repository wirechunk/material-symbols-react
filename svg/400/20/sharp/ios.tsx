import type { SVGProps } from "react";
export const SvgIos = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-600v-72h72v72h-72Zm0 312v-240h72v240h-72Zm120 0v-384h240v384H288Zm72-72h96v-240h-96v240Zm216 72v-72h144v-84H576v-228h216v72H648v84h144v228H576Z" />
  </svg>
);
