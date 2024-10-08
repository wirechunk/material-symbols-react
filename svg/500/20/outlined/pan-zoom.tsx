import type { SVGProps } from "react";
export const SvgPanZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M135.87-135.87V-342.7h83v65.18l111.5-111.5 58.65 58.65-111.5 111.5h65.18v83H135.87Zm493.76-435.11-58.65-58.65 111.5-111.5H617.3v-83h206.83v206.83h-83v-65.18l-111.5 111.5Z" />
  </svg>
);
