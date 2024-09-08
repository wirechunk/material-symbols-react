import type { SVGProps } from "react";
export const SvgOpenInFull = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-288h72v165l477-477H528v-72h288v288h-72v-165L267-216h165v72H144Z" />
  </svg>
);
