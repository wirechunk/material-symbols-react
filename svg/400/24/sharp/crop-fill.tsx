import type { SVGProps } from "react";
export const SvgCropFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M680-40v-160H200v-480H40v-80h160v-160h80v640h640v80H760v160h-80Zm0-320v-320H360v-80h400v400h-80Z" />
  </svg>
);
