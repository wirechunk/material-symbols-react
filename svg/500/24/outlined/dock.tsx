import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M316.41-36.41v-80h327.18v80H316.41Zm11-160q-37.78 0-64.39-26.61t-26.61-64.39v-545.18q0-37.78 26.61-64.39t64.39-26.61h305.18q37.78 0 64.39 26.61t26.61 64.39v545.18q0 37.78-26.61 64.39t-64.39 26.61H327.41Zm0-131v40h305.18v-40H327.41Zm0-80h305.18v-305.18H327.41v305.18Zm0-385.18h305.18v-40H327.41v40Zm0 0v-40 40Zm0 465.18v40-40Z" />
  </svg>
);
