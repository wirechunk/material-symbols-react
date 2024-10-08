import type { SVGProps } from "react";
export const SvgTabs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm40-40h560v-304.62H200V-200Zm0-344.62h560V-760H200v215.38ZM480-640h240v-80H480v80Zm-280 95.38V-760v215.38Z" />
  </svg>
);
