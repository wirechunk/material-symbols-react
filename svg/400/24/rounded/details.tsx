import type { SVGProps } from "react";
export const SvgDetails = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m80-120 400-720 400 720H80Zm136-80h224v-403L216-200Zm304 0h224L520-603v403Z" />
  </svg>
);
