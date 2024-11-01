import type { SVGProps } from "react";
export const SvgInputFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-192h72v120h624v-432H168v120H96v-192h768v576H96Zm312-120-51-51 81-81H96v-72h342l-81-81 51-51 168 168-168 168Z" />
  </svg>
);
