import type { SVGProps } from "react";
export const SvgDockFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-48v-72h288v72H336Zm-96-144v-720h480v720H240Zm72-192h336v-336H312v336Z" />
  </svg>
);
