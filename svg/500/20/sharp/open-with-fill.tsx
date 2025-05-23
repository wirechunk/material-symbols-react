import type { SVGProps } from "react";
export const SvgOpenWithFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-81.41 304.35-257.07 363-315.72l75.5 75.5v-165.87h83v165.87l75.5-75.5 58.65 58.65L480-81.41ZM257.07-304.35 81.41-480l175.66-175.65L315.72-597l-75.5 75.5h165.87v83H240.22l75.5 75.5-58.65 58.65Zm445.86 0L644.28-363l75.5-75.5H553.91v-83h165.87l-75.5-75.5 58.65-58.65L878.59-480 702.93-304.35ZM438.5-553.91v-165.87l-75.5 75.5-58.65-58.65L480-878.59l175.65 175.66L597-644.28l-75.5-75.5v165.87h-83Z" />
  </svg>
);
