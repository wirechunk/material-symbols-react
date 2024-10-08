import type { SVGProps } from "react";
export const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm288-72h408v-432H384v432Zm-72 0v-432H168v432h144Zm-144 0v-432 432Zm144 0h72-72Zm0-432h72-72Z" />
  </svg>
);
