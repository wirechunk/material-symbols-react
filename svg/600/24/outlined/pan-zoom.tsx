import type { SVGProps } from "react";
export const SvgPanZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100.78-100.78v-275.05h106v94.96l111-111 74.09 74.09-111 111h94.96v106H100.78Zm541.44-467.35-74.09-74.09 111-111h-94.96v-106h275.05v275.05h-106v-94.96l-111 111Z" />
  </svg>
);
