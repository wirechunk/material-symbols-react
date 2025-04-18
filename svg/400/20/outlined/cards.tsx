import type { SVGProps } from "react";
export const SvgCards = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-504v-192h192v192H264Zm0 240v-192h192v192H264Zm240-240v-192h192v192H504Zm0 240v-192h192v192H504ZM336-576h48v-48h-48v48Zm240 0h48v-48h-48v48ZM336-336h48v-48h-48v48Zm240 0h48v-48h-48v48ZM384-576Zm192 0Zm0 192Zm-192 0ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Z" />
  </svg>
);
