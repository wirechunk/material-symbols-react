import type { SVGProps } from "react";
export const SvgCaptureFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M230-310h500v-340H230v340ZM80-160v-640h800v640H80Z" />
  </svg>
);
