import type { SVGProps } from "react";
export const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-160v-640h800v640H80Zm320-60h420v-520H400v520Zm-60 0v-520H140v520h200Zm-200 0v-520 520Zm200 0h60-60Zm0-520h60-60Z" />
  </svg>
);
