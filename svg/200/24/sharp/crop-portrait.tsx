import type { SVGProps } from "react";
export const SvgCropPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120v-720h560v720H200Zm40-40h480v-640H240v640Zm0 0v-640 640Z" />
  </svg>
);
