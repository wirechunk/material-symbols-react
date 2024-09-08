import type { SVGProps } from "react";
export const SvgToolbarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-640v-160h640v160H160Zm0 480v-440h640v440H160Z" />
  </svg>
);
