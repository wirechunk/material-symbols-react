import type { SVGProps } from "react";
export const SvgEscalator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M294-264h124l184-324h63.61q23.39 0 38.89-15.75T720-642q0-22.5-15.75-38.25T666-696H542L358-372h-63.61q-23.39 0-38.89 15.75T240-318q0 22.5 15.75 38.25T294-264Zm-78 120q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" />
  </svg>
);
