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
    <path d="M120-200v-560h720v560H120Zm240-40h440v-480H360v480Zm-40 0v-480H160v480h160Zm-160 0v-480 480Zm160 0h40-40Zm0-480h40-40Z" />
  </svg>
);
