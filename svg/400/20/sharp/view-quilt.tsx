import type { SVGProps } from "react";
export const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-240v-480h672v480H144Zm272-276h328v-132H416v132Zm200 204h128v-132H616v132Zm-200 0h128v-132H416v132Zm-200 0h128v-336H216v336Z" />
  </svg>
);
