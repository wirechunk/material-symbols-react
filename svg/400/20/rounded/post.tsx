import type { SVGProps } from "react";
export const SvgPost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M744-144H216q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144Zm-48-144H264v48h432v-48Zm-432-48h432v-48H264v48Zm0-144h432v-240H264v240Zm0 192v48-48Zm0-48v-48 48Zm0-144v-240 240Zm0 96v-96 96Zm0 96v-48 48Z" />
  </svg>
);
