import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-216v-336q0-29.7 21.15-50.85Q186.3-624 216-624h120v-120q0-29.7 21.15-50.85Q378.3-816 408-816h336q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216q-29.7 0-50.85-21.15Q144-186.3 144-216Zm480 0h120v-528H408v120h144q29.7 0 50.85 21.15Q624-581.7 624-552v336Zm-216 0h144v-336H408v336Zm-192 0h120v-336H216v336Z" />
  </svg>
);
