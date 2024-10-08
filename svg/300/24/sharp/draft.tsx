import type { SVGProps } from "react";
export const SvgDraft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-100v-760h390l210 210v550H180Zm360-520v-180H240v640h480v-460H540ZM240-800v180-180 640-640Z" />
  </svg>
);
