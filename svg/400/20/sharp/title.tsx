import type { SVGProps } from "react";
export const SvgTitle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M432-192v-480H240v-96h480v96H528v480h-96Z" />
  </svg>
);
