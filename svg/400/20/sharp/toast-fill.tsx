import type { SVGProps } from "react";
export const SvgToastFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-264h432v-72H264v72ZM144-144v-672h672v672H144Z" />
  </svg>
);
