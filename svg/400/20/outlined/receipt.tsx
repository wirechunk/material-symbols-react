import type { SVGProps } from "react";
export const SvgReceipt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-96v-768l56 45 56-45 56 45 56-45 56 45 56-45 56 45 56-45 56 45 56-45 56 45 56-45v768l-56-45-56 45-56-45-56 45-56-45-56 45-56-45-56 45-56-45-56 45-56-45-56 45Zm144-216h384v-72H288v72Zm0-132h384v-72H288v72Zm0-132h384v-72H288v72Zm-72 360h528v-528H216v528Zm0-528v528-528Z" />
  </svg>
);
