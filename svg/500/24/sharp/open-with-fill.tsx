import type { SVGProps } from "react";
export const SvgOpenWithFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-65.41 302.35-243.07 367-307.72l67.5 67.5v-157.87h91v156.87l66.5-67.5 65.65 65.65L480-65.41ZM243.07-302.35 65.41-480l176.66-176.65L306.72-592l-66.5 66.5h157.87v91H241.22l67.5 66.5-65.65 65.65Zm473.86 0L652.28-367l67.5-67.5H561.91v-91h156.87l-67.5-66.5 65.65-65.65L894.59-480 716.93-302.35ZM434.5-561.91v-157.87l-67.5 67.5-64.65-64.65L480-894.59l177.65 177.66L593-652.28l-67.5-67.5v157.87h-91Z" />
  </svg>
);
