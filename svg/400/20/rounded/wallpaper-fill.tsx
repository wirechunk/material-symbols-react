import type { SVGProps } from "react";
export const SvgWallpaperFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-216h72v216h216v72H216Zm312 0v-72h216v-216h72v216q0 29.7-21.15 50.85Q773.7-144 744-144H528ZM264-288l108-144 72 96 108-144 144 192H264ZM144-528v-216q0-29.7 21.15-50.85Q186.3-816 216-816h216v72H216v216h-72Zm600 0v-216H528v-72h216q29.7 0 50.85 21.15Q816-773.7 816-744v216h-72Zm-120-48q-20 0-34-14t-14-34q0-20 14-34t34-14q20 0 34 14t14 34q0 20-14 34t-34 14Z" />
  </svg>
);
