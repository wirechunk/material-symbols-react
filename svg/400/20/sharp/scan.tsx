import type { SVGProps } from "react";
export const SvgScan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-192h72v120h432v-120h72v192H192Zm0-408v-360h384l192 192v168h-72v-120H528v-168H264v288h-72ZM96-360v-72h768v72H96Zm384-144Zm0 216Z" />
  </svg>
);
