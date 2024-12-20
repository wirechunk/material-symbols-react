import type { SVGProps } from "react";
export const SvgTableChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M744-144H216q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29 0 50.5 21.15T816-744v528q0 29-21.5 50.5T744-144ZM216-636h528v-108H216v108Zm96 72h-96v348h96v-348Zm336 0v348h96v-348h-96Zm-72 0H384v348h192v-348Z" />
  </svg>
);
