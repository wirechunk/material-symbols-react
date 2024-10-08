import type { SVGProps } from "react";
export const SvgDualScreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m264-264 240 96v-528l-240-96v528Zm-27 67q-20-8-32.5-26.5T192-264v-528q0-29.7 21.15-50.85Q234.3-864 264-864l266 101q21 8 33.5 26t12.5 41v528q0 38-32 59.5t-67 7.5l-240-96Zm267-43v-72h192v-480H264v-72h432q29.7 0 50.85 21.15Q768-821.7 768-792v479.57Q768-282 746.85-261T696-240H504Zm-240-24v-528 528Z" />
  </svg>
);
