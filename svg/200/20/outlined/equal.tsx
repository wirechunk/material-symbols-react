import type { SVGProps } from "react";
export const SvgEqual = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M232-328v-80h496v80H232Zm0-224v-80h496v80H232Z" />
  </svg>
);
