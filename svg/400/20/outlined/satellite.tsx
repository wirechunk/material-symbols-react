import type { SVGProps } from "react";
export const SvgSatellite = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-288h432L552-480 444-336l-72-96-108 144Zm0-168q100 0 170-70t70-170h-72q0 70-48.84 119-48.83 49-119.16 49v72Zm0-144q40.47 0 68.24-28.15Q360-656.31 360-696h-96v96Zm-48 456q-29.7 0-50.85-21.5Q144-187 144-216v-528q0-29 21.15-50.5T216-816h528q29.7 0 50.85 21.5Q816-773 816-744v528q0 29-21.15 50.5T744-144H216Zm0-72h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
