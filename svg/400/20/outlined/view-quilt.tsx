import type { SVGProps } from "react";
export const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-312v-336q0-29 21.15-50.5T216-720h528q29.7 0 50.85 21.5Q816-677 816-648v336q0 29.7-21.15 50.85Q773.7-240 744-240H216q-29.7 0-50.85-21.15Q144-282.3 144-312Zm272-204h328v-132H416v132Zm200 204h128v-132H616v132Zm-200 0h128v-132H416v132Zm-200 0h128v-336H216v336Z" />
  </svg>
);
