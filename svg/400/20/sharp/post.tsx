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
    <path d="M144-144v-672h672v672H144Zm552-144H264v48h432v-48Zm-432-48h432v-48H264v48Zm0-144h432v-240H264v240Zm0 192v48-48Zm0-48v-48 48Zm0-144v-240 240Zm0 96v-96 96Zm0 96v-48 48Z" />
  </svg>
);
