import type { SVGProps } from "react";
export const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-180v-600h760v600H100Zm280-60h420v-480H380v480Zm-60 0v-480H160v480h160Zm-160 0v-480 480Zm160 0h60-60Zm0-480h60-60Z" />
  </svg>
);
