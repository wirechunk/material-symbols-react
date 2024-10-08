import type { SVGProps } from "react";
export const SvgCake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-96v-312h96v-240h204v-54q-17-12-26.5-25t-9.5-35.77q0-14.23 5-26.73t15.94-23.44L480-864l51.88 51.06Q543-802 547.5-789.5q4.5 12.5 4.5 26.73 0 22.77-9.5 35.77-9.5 13-26.5 25v54h204v240h96v312H144Zm168-312h336v-168H312v168Zm-96 240h528v-168H216v168Zm96-240h336-336Zm-96 240h528-528Zm528-240H216h528Z" />
  </svg>
);
