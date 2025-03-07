import type { SVGProps } from "react";
export const SvgAddBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M450-280h60v-170h170v-60H510v-170h-60v170H280v60h170v170ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z" />
  </svg>
);
