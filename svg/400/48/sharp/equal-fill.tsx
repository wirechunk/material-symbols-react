import type { SVGProps } from "react";
export const SvgEqualFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-290v-100h640v100H160Zm0-280v-100h640v100H160Z" />
  </svg>
);
