import type { SVGProps } from "react";
export const SvgCameraRoll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-72v-720h120v-72h240v72h120v96h288v528H576v96H96Zm72-72h336v-96h288v-384H504v-96H168v576Zm216-144h72v-72h-72v72Zm0-216h72v-72h-72v72Zm144 216h72v-72h-72v72Zm0-216h72v-72h-72v72Zm144 216h72v-72h-72v72Zm0-216h72v-72h-72v72Zm-336 72Z" />
  </svg>
);
