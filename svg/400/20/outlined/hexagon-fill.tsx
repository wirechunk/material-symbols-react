import type { SVGProps } from "react";
export const SvgHexagonFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-144 96-480l192-336h384l192 336-192 336H288Z" />
  </svg>
);
