import type { SVGProps } from "react";
export const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h505.38L840-480 625.38-200H120Zm40-40h445.38L790-480 605.38-720H160v480Zm315.38-240Z" />
  </svg>
);
