import type { SVGProps } from "react";
export const SvgTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M432-672H288q-20 0-34-14t-14-34q0-20 14-34t34-14h384q20 0 34 14t14 34q0 20-14 34t-34 14H528v432q0 20-14 34t-34 14q-20 0-34-14t-14-34v-432Z" />
  </svg>
);
