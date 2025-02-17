import type { SVGProps } from "react";
export const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M616-516h128v-132H616v132Zm-200 0h128v-132H416v132Zm-200 0h128v-132H216v132Zm0 204h128v-132H216v132Zm200 0h128v-132H416v132Zm200 0h128v-132H616v132Zm-472 0v-336q0-29 21.15-50.5T216-720h528q29.7 0 50.85 21.5Q816-677 816-648v336q0 29-21.15 50.5T744-240H216q-29.7 0-50.85-21.5Q144-283 144-312Z" />
  </svg>
);
