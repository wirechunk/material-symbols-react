import type { SVGProps } from "react";
export const SvgWork = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-160v-520h240v-120h240v120h240v520H120Zm40-40h640v-440H160v440Zm240-480h160v-80H400v80ZM160-200v-440 440Z" />
  </svg>
);
