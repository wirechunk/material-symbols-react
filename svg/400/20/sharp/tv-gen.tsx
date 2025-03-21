import type { SVGProps } from "react";
export const SvgTvGen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-144v-96H96v-528h768v528h-96v96h-36l-32-96H260l-32 96h-36Zm-24-168h624v-384H168v384Zm312-192Z" />
  </svg>
);
