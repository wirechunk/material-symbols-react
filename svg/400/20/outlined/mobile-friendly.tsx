import type { SVGProps } from "react";
export const SvgMobileFriendly = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-48q-29.7 0-50.85-21.15Q144-90.3 144-120v-720q0-29.7 21.15-50.85Q186.3-912 216-912h432q29.7 0 50.85 21.15Q720-869.7 720-840v168h-72v-48H216v480h432v-48h72v168q0 29.7-21.15 50.85Q677.7-48 648-48H216Zm0-120v48h432v-48H216Zm376-168L423-506l51-51 118 119 221-221 51 51-272 272ZM216-792h432v-48H216v48Zm0 0v-48 48Zm0 624v48-48Z" />
  </svg>
);
