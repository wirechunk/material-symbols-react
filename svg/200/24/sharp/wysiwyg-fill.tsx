import type { SVGProps } from "react";
export const SvgWysiwygFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm40-40h560v-480H200v480Zm80-300v-40h400v40H280Zm0 160v-40h240v40H280Z" />
  </svg>
);
