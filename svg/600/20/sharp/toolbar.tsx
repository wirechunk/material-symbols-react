import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M124.78-124.78v-710.44h710.44v710.44H124.78Zm98-526.61h514.44v-85.83H222.78v85.83Zm514.44 98H222.78v330.61h514.44v-330.61Zm-514.44-98v98-98Zm0 0v-85.83 85.83Zm0 98v330.61-330.61Z" />
  </svg>
);
