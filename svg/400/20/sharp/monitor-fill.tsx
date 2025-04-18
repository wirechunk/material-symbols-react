import type { SVGProps } from "react";
export const SvgMonitorFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-144v-48l48-48H96v-576h768v576H624l48 48v48H288Z" />
  </svg>
);
