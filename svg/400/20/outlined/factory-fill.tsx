import type { SVGProps } from "react";
export const SvgFactoryFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-456l264-120v84l192-84v120h312v456H96Zm348-144h72v-168h-72v168Zm-156 0h72v-168h-72v168Zm312 0h72v-168h-72v168Zm257-360H679l41-264h96l41 264Z" />
  </svg>
);
