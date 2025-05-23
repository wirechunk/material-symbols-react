import type { SVGProps } from "react";
export const SvgGridViewFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-520v-280h280v280H160Zm0 360v-280h280v280H160Zm360-360v-280h280v280H520Zm0 360v-280h280v280H520Z" />
  </svg>
);
