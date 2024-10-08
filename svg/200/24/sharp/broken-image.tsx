import type { SVGProps } from "react";
export const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm80-268.54 160-160 160 160 160-160 40 40V-760H200v291.46l40 40ZM200-200h560v-291.69l-40-40-160 160-160-160-160 160-40-40V-200Zm0 0v-291.69 40V-760v560Z" />
  </svg>
);
