import type { SVGProps } from "react";
export const SvgCropFree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-240h72v168h168v72H144Zm432 0v-72h168v-168h72v240H576ZM144-576v-240h240v72H216v168h-72Zm600 0v-168H576v-72h240v240h-72Z" />
  </svg>
);
