import type { SVGProps } from "react";
export const SvgImageAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-480h72v-72h-72v72Zm144 0h72v-72h-72v72Zm144 144h72v-72h-72v72Zm0-144h72v-72h-72v72ZM96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
