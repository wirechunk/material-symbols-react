import type { SVGProps } from "react";
export const SvgPanoramaFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm168-144h432L552-528 444-384l-72-96-108 144Z" />
  </svg>
);
