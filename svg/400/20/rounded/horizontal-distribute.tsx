import type { SVGProps } from "react";
export const SvgHorizontalDistribute = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-768h72v768H96Zm336-192v-384h96v384h-96ZM792-96v-768h72v768h-72Z" />
  </svg>
);
