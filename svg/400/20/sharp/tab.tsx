import type { SVGProps } from "react";
export const SvgTab = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-264h624v-264H528v-168H168v432Zm-72 72v-576h768v576H96Zm72-72v-432 432Z" />
  </svg>
);
