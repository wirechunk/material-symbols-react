import type { SVGProps } from "react";
export const SvgVotingChip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-192q-120.34 0-204.17-83.76Q48-359.52 48-479.76T131.83-684q83.83-84 204.17-84h288q120.34 0 204.17 83.76 83.83 83.76 83.83 204T828.17-276Q744.34-192 624-192H336Zm0-72h288q89.64 0 152.82-63.18Q840-390.36 840-480q0-89.64-63.18-152.82Q713.64-696 624-696H336q-89.64 0-152.82 63.18Q120-569.64 120-480q0 89.64 63.18 152.82Q246.36-264 336-264Zm0-120h48v-72h72v-48h-72v-72h-48v72h-72v48h72v72Zm288 0h48v-192h-96v48h48v144Zm-144-96Z" />
  </svg>
);
