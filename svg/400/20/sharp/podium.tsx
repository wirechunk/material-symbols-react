import type { SVGProps } from "react";
export const SvgPodium = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M504-768q0 30-21 51t-51 21q-10 0-20-3t-18-8q-23 5-41 20.5T328-648h488l-48 264H602v-72h106l22-120H230l22 120h106v72H192l-48-264h110q7-44 35.5-77t70.5-47q2-29 22.5-48.5T432-840q30 0 51 21t21 51ZM399-216h162l29-240H370l29 240Zm-63 72-47-384h382l-47 384H336Z" />
  </svg>
);
