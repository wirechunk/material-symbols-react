import type { SVGProps } from "react";
export const SvgEqualFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z" />
  </svg>
);
