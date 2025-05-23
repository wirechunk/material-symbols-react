import type { SVGProps } from "react";
export const SvgDragPan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-81.41 304.35-257.07 363-315.72l75.5 75.5V-438.5H240.22l75.5 75.5-58.65 58.65L81.41-480l175.66-175.65L315.72-597l-75.5 75.5H438.5v-198.28l-75.5 75.5-58.65-58.65L480-878.59l175.65 175.66L597-644.28l-75.5-75.5v198.28h198.28l-75.5-75.5 58.65-58.65L878.59-480 702.93-304.35 644.28-363l75.5-75.5H521.5v198.28l75.5-75.5 58.65 58.65L480-81.41Z" />
  </svg>
);
