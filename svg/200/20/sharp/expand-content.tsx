import type { SVGProps } from "react";
export const SvgExpandContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-280v-200h32v168h168v32H280Zm368-200v-168H480v-32h200v200h-32Z" />
  </svg>
);
