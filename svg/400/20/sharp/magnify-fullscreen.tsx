import type { SVGProps } from "react";
export const SvgMagnifyFullscreen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Zm396-120h72v-84h84v-72h-84v-84h-72v84h-84v72h84v84Z" />
  </svg>
);
