import type { SVGProps } from "react";
export const SvgViewColumn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-312v-336q0-29 21.15-50.5T216-720h528q29.7 0 50.85 21.5Q816-677 816-648v336q0 29-21.15 50.5T744-240H216q-29.7 0-50.85-21.5Q144-283 144-312Zm72 0h128v-336H216v336Zm200 0h128v-336H416v336Zm200 0h128v-336H616v336Z" />
  </svg>
);
