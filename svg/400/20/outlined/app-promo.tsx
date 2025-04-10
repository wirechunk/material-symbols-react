import type { SVGProps } from "react";
export const SvgAppPromo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M624-504 480-360 336-504l51-51 57 57v-150h72v150l57-57 51 51ZM384-156h192v-48H384v48ZM264-48q-29.7 0-50.85-21.15Q192-90.3 192-120v-720q0-29.7 21.15-50.85Q234.3-912 264-912h432q29.7 0 50.85 21.15Q768-869.7 768-840v720q0 29.7-21.15 50.85Q725.7-48 696-48H264Zm0-192v120h432v-120H264Zm0-72h432v-408H264v408Zm0-480h432v-48H264v48Zm0 552v120-120Zm0-552v-48 48Z" />
  </svg>
);
