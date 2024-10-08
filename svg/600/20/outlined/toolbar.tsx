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
    <path d="M217.78-124.78q-40.3 0-66.65-26.35-26.35-26.35-26.35-66.65v-524.44q0-41.3 26.35-67.15 26.35-25.85 66.65-25.85h524.44q41.3 0 67.15 25.85 25.85 25.85 25.85 67.15v524.44q0 40.3-25.85 66.65-25.85 26.35-67.15 26.35H217.78Zm5-526.61h514.44v-85.83H222.78v85.83Zm514.44 98H222.78v330.61h514.44v-330.61Zm-514.44-98v98-98Zm0 0v-85.83 85.83Zm0 98v330.61-330.61Z" />
  </svg>
);
