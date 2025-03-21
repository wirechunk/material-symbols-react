import type { SVGProps } from "react";
export const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M616-516h128v-132H616v132Zm-200 0h128v-132H416v132Zm-200 0h128v-132H216v132Zm0 204h128v-132H216v132Zm200 0h128v-132H416v132Zm200 0h128v-132H616v132Zm-472 72v-480h672v480H144Z" />
  </svg>
);
