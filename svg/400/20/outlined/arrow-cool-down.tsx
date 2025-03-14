import type { SVGProps } from "react";
export const SvgArrowCoolDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96 216-360l51-51 177 177v-294h72v294l177-177 51 51L480-96Zm-36-504v-120h72v120h-72Zm0-192v-72h72v72h-72Z" />
  </svg>
);
