import type { SVGProps } from "react";
export const SvgWallpaper = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-288h72v216h216v72H144Zm384 0v-72h216v-216h72v288H528ZM264-288l108-144 72 96 108-144 144 192H264ZM144-528v-288h288v72H216v216h-72Zm600 0v-216H528v-72h288v288h-72Zm-120-48q-20 0-34-14t-14-34q0-20 14-34t34-14q20 0 34 14t14 34q0 20-14 34t-34 14Z" />
  </svg>
);
